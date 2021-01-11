import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";
import API_URL from "../client"

export default function Post(post){

    // post = post.post[0]
    post = post.post
    // console.log(post);

    return (
      <Layout>
        <div className="the-article">
            <div className="article-header">
                <h1>
                    {post.title}
                </h1>
                <p>{post.date}</p>
            </div>
            <div className="article-body" dangerouslySetInnerHTML={{__html: post.content}} />
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
    // const res = await fetch(`${API_URL}/wp-json/wp/v2/posts?_fields=slug,id`)
    const res = await fetch(`${API_URL}/posts/?fields=slug`)
    const posts = await res.json()
  
    const paths = posts.posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    return { 
        paths, 
        fallback: false
    }
  }
  
  export async function getStaticProps({params}) {
    const res = await fetch(`${API_URL}/posts/slug:${params.slug}/?fields=author,ID,title,date,slug,content`)
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
  