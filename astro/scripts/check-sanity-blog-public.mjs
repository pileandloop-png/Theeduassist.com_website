import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../.env') });
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

    try {
        const query = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && !(_id in path("drafts.**")) && (!defined(migrationStatus) || migrationStatus in ["approved", "published"]) && (!defined(seo.noindex) || seo.noindex != true)] | order(publishedAt desc)[0...5] {
            title,
            slug,
            publishedAt,
            category,
            migrationStatus
        }`;

        const posts = await client.fetch(query);
        console.log(`\nFound ${posts.length} visible public posts (limit 5).`);
        posts.forEach((post, i) => {
            console.log(`\nPost ${i + 1}:`);
            console.log(`  Title: ${post.title}`);
            console.log(`  Slug: ${post.slug?.current}`);
            console.log(`  PublishedAt: ${post.publishedAt}`);
            console.log(`  Category: ${post.category}`);
            console.log(`  MigrationStatus: ${post.migrationStatus || 'missing/approved'}`);
        });

    } catch (e) {
        console.error("Failed to query Sanity:", e.message);
    }
}

run();
