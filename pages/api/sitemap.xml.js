const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
import axios from 'axios'

export default async(req,res)=> {

    // An array with your links
    const links = [{ url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/login', changefreq: 'daily', priority: 0.3 },
    { url: '/signup', changefreq: 'daily', priority: 0.3 },
    { url: '/about', changefreq: 'daily', priority: 0.3 },
    { url: '/disclamier', changefreq: 'daily', priority: 0.3 },
    { url: '/policies', changefreq: 'daily', priority: 0.3 },
    { url: '/terms', changefreq: 'daily', priority: 0.3 },]
    const response = await axios.get('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/')
    const blogs = await response.data.reverse()
    

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

    res.writeHead(200,{
        "Content-Type":"application/xml",
    })
    blogs.map(blog=>{
        stream.write({ url: `/thought/${blog.id}`, changefreq: 'daily', priority: 0.3})
    })

    const xmlString= await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data)=>data.toString())
    
    res.end(xmlString)
}

