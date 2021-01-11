import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";
import API_URL from "../client"

export default function Home({posts}){

  // console.log(posts.meta.next_page);
  
  return (
    <Layout>
      <div className="intro">
        <h1>Un espacio para enfocarme y escribir</h1>
      </div>
      
      <PostsGrid nextPageOnIndex={true} posts={posts.posts} />

      <style jsx>
        {`
          .intro {
            margin-top: 11ch;
            margin-bottom: 7ch;
          }
          @media (min-width: 600px) {
            .intro {
              margin-top: 12ch;
              margin-bottom: 9ch;
            }
          }
          @media (min-width: 900px) {
            .intro {
              margin-top: 14ch;
              margin-bottom: 9.5ch;
            }
          }
          @media (min-width: 1200px) {
            .intro {
              margin-top: 14.5ch;
              margin-bottom: 10ch;
            }
          }
          .intro h1 {
            width: 92%;
            font-size: 40px;
            line-height: 125%;
            font-weight: 600;
            color: var(--color-dark);
            letter-spacing: -0.1rem;
            letter-spacing: -0.09rem;
          }
          @media (min-width: 600px) {
            .intro h1 {
              font-size: 54px;
            }
          }
          @media (min-width: 900px) {
            .intro h1 {
              width: 74%;
              line-height: 115%;
              font-size: 60px;
            }
          }
          @media (min-width: 1200px) {
            .intro h1 {
              width: 70%;
              font-size: 70px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/posts/?fields=author,ID,title,date,slug&number=6`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data
    },
  }
}
