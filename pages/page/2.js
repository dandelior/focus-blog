import Layout from "../../components/layout";
import PostsGrid from "../../components/postsGrid";
import API_URL from "../../client"

export default function PageOfPagination({posts}) {
    return (
        <>
            <Layout>
                <div className="page-of-pagination-wrapper">
                    <p className="page">Página 2</p>
                    <PostsGrid posts={posts} showPagination={true} />
                </div>

                <style jsx>{`
                    .page-of-pagination-wrapper {
                        margin-top: 9ch;
                    }
                    @media (min-width: 600px) {
                        .page-of-pagination-wrapper {
                            margin-top: 10ch;
                        }
                    }
                    .page-of-pagination-wrapper .page {
                        margin-bottom: 4.5ch; 
                    }
                    @media (min-width: 600px) {
                        .page-of-pagination-wrapper .page {
                            margin-bottom: 5.5ch; 
                        }
                    }
                `}</style>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/posts/?fields=author,ID,title,date,slug&number=6`)
    // const res = await fetch(`${API_URL}/posts/?fields=author,ID,title,date,slug&after=`)
    const data = await res.json()

    if (!data) {
      return {
        notFound: false,
      }
    }
  
    return {
      props: {
        posts: data.posts
      },
    }
  }
  