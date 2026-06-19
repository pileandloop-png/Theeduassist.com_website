import createClient from '@sanity/client'

const client = createClient({
  projectId: 'jg4gi6mn',
  dataset: 'production',
  apiVersion: '2026-06-01',
  useCdn: false,
})

async function main(){
  try{
    const platforms = await client.fetch(`*[_type == "platform" && showAsBadge == true] | order(orderRank asc)`)
    console.log('FOUND_PLATFORM_COUNT::', platforms?.length)
    console.log(JSON.stringify(platforms, null, 2))
  }catch(err){
    console.error('ERROR', err)
    process.exit(1)
  }
}

main()
