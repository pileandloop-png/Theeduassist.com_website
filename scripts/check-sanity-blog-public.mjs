import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'jg4gi6mn';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2026-06-19';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

async function checkPublicBlog() {
  console.log(`Checking Sanity Blog for Project ID: ${projectId}, Dataset: ${dataset}`);
  console.log(`Blog Type: blogPost`);

  const query = `*[_type == "blogPost" && defined(publishedAt) && defined(slug.current) && (!defined(migrationStatus) || migrationStatus in ["approved", "published"])] | order(publishedAt desc) { title, "slug": slug.current, publishedAt, migrationStatus }`;

  try {
    const posts = await client.fetch(query);
    console.log(`\nTotal public posts found: ${posts.length}`);

    if (posts.length > 0) {
      console.log('\nFirst 5 posts:');
      posts.slice(0, 5).forEach((post, index) => {
        console.log(`\nPost ${index + 1}:`);
        console.log(`  Title: ${post.title}`);
        console.log(`  Slug: ${post.slug}`);
        console.log(`  PublishedAt: ${post.publishedAt}`);
        console.log(`  MigrationStatus: ${post.migrationStatus || 'undefined'}`);
      });
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error.message);
  }
}

checkPublicBlog();
