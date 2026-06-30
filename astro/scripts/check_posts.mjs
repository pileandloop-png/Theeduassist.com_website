import createClient from '@sanity/client'

const client = createClient({
  projectId: 'jg4gi6mn',
  dataset: 'production',
  apiVersion: '2026-06-01',
  useCdn: false,
})

async function main(){
  try{
    const posts = await client.fetch(`*[_type == "post"]{_id,title,slug,publishedAt,_createdAt}`)
    console.log('FOUND_POST_COUNT::', posts.length)
    console.log(JSON.stringify(posts, null, 2))
  }catch(err){
    console.error('ERROR', err)
    process.exit(1)
  }
}

main()
