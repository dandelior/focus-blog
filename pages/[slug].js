import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";

export default function Post(post){

    post = post.post[0]
    // console.log(post);

    return (
      <Layout>
        <div className="the-article">
            <div className="article-header">
                <h1>
                    {post.title.rendered}
                </h1>
                <p>{post.date}</p>
            </div>
            <div className="article-body" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </div>

        <div className="similar-posts">
            <h2>Post Similares</h2>
            <PostsGrid />
        </div>
  
        <style jsx>
          {`
            /* Styles in —» components/layout */
          `}
        </style>
      </Layout>
    )
  }

  export async function getStaticPaths() {
    const res = await fetch('http://localhost:10028/wp-json/wp/v2/posts?_fields=slug,id')
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    return { 
        paths, 
        fallback: false
    }
  }
  
  export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:10028/wp-json/wp/v2/posts?slug=${params.slug}&_fields=author,id,title,date,slug,content`)
    const data = await res.json()

    if (!data) {
      return {
        notFound: false,
      }
    }
  
    return {
      props: {
        post: data
      },
    }
  }
  