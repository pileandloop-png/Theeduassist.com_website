import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../.env.example') }); // Load from example for structural verification, though .env would be better if real
if (process.env.PUBLIC_SANITY_PROJECT_ID === 'demo' || !process.env.PUBLIC_SANITY_PROJECT_ID) {
    console.warn("Using demo project ID. This is expected if .env is missing and you are checking the build config structure.");
}

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'jg4gi6mn',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2026-06-19',
  useCdn: true,
});

async function run() {
    console.log(`Checking Sanity Blog Public Query`);
    console.log(`Project ID: ${client.config().projectId}`);
    console.log(`Dataset: ${client.config().dataset}`);
    console.log(`API Version: ${client.config().apiVersion}`);
    console.log(`Token used: No`);
    console.log(`Query type: post`);

    try {
        const query = `*[
            _type == "post"
        ] | order(publishedAt desc) {
            _id,
            _type,
            title,
            "slug": slug.current,
            publishedAt,
            migrationStatus,
            "noIndex": seo.noindex,
            _updatedAt
        }`;

        const allPosts = await client.fetch(query);

        let validPosts = 0;
        let missingSlug = 0;
        let missingDate = 0;
        let drafts = 0;
        let blockedByMig = 0;
        let blockedByNoIndex = 0;

        console.log(`\nFound ${allPosts.length} total posts in Sanity (including drafts, missing data, etc).`);
        console.log(`\nFirst 20 posts analysis:`);

        allPosts.forEach((post, i) => {
            const isDraft = post._id?.startsWith('drafts.');
            const hasSlug = !!post.slug;
            const hasDate = !!post.publishedAt;
            const migOk = post.migrationStatus === undefined || post.migrationStatus === null || post.migrationStatus === 'approved' || post.migrationStatus === 'published';
            const indexOk = post.noIndex !== true;

            const isPublic = hasSlug && hasDate && !isDraft && migOk && indexOk;

            if (isPublic) validPosts++;
            if (!hasSlug) missingSlug++;
            if (!hasDate) missingDate++;
            if (isDraft) drafts++;
            if (!migOk) blockedByMig++;
            if (!indexOk) blockedByNoIndex++;

            if (i < 20) {
                console.log(`\nPost ${i + 1}:`);
                console.log(`  _id: ${post._id}`);
                console.log(`  _type: ${post._type}`);
                console.log(`  Title: ${post.title}`);
                console.log(`  Slug: ${post.slug}`);
                console.log(`  PublishedAt: ${post.publishedAt}`);
                console.log(`  MigrationStatus: ${post.migrationStatus || 'missing/null'}`);
                console.log(`  NoIndex: ${post.noIndex || false}`);
                console.log(`  Passes public filter? ${isPublic ? 'YES' : 'NO'}`);
            }
        });

        console.log(`\nSummary of ALL posts:`);
        console.log(`Total posts: ${allPosts.length}`);
        console.log(`Valid public posts: ${validPosts}`);
        console.log(`Drafts: ${drafts}`);
        console.log(`Missing slug: ${missingSlug}`);
        console.log(`Missing publishedAt: ${missingDate}`);
        console.log(`Blocked by migrationStatus: ${blockedByMig}`);
        console.log(`Blocked by noIndex: ${blockedByNoIndex}`);

        // Find duplicates
        const slugs = new Set();
        const dupSlugs = new Set();
        const titles = new Set();
        const dupTitles = new Set();

        allPosts.forEach(p => {
           if (p.slug) {
               const nSlug = p.slug.replace(/^https?:\/\/[^\/]+\/blog\//, '').replace(/\/$/, '');
               if (p.slug.startsWith('http')) console.warn(`\n[WARNING] Bad full URL slug found: ${p.slug}. This must be corrected manually in Sanity Studio. Do not silently hide this data quality issue.`);
               if (slugs.has(nSlug)) dupSlugs.add(nSlug);
               slugs.add(nSlug);
           }
           if (p.title) {
               if (titles.has(p.title)) dupTitles.add(p.title);
               titles.add(p.title);
           }
        });

        console.log(`\nDuplicate Slugs: ${dupSlugs.size > 0 ? Array.from(dupSlugs).join(', ') : 'None'}`);
        console.log(`Duplicate Titles: ${dupTitles.size > 0 ? Array.from(dupTitles).join(', ') : 'None'}`);

    } catch (e) {
        console.error("Failed to query Sanity:", e.message);
    }
}

run();
