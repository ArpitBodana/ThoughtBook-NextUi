function Homepage({posts}){
  return(
    <div className="content-center bg-slate-400 ">
      <main className='pt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3' >
        {
          posts.map(post=>{
            return(
              
                <div className="m-4 border-2   border-gray-900 " key={post.id}>
                  {post.id}
                  <hr/>
                  <span>{post.thought}</span>
                  <br/>
                  <span>{post.author}</span>
                  <br/>
                  <span>{post.user}</span>
                  <br/>
                  <span>{post.date}</span>
                </div>
            )
          })
        }
        </div>
      </main>
    </div>
  )
}
export default Homepage

export async function getServerSideProps(){
 
  const response = await fetch('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/')
  const data = await response.json()
  return{
    props:{
      posts:data,
    },
  }
}