import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import PostsGrid from "../../components/postsGrid";
import API_URL from "../../client"

export default function PageOfPagination({posts}) {

    const router = useRouter();
    let actualPage = router.query.slug;

    return (
        <>
            <Layout>
                <div className="page-of-pagination-wrapper">
                    <p className="page">Página {actualPage}</p>
                    <PostsGrid posts={posts.posts} showPagination={true} />
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

export async function getStaticPaths() {
    // const res = await fetch(`${API_URL}/posts/?fields=slug`)
    // const posts = await res.json()
  
    // const paths = posts.posts.map((post) => ({
    //   params: { slug: post.slug },
    // }))
  
    return { 
        paths: [
            { params: { slug: '1' } },
            { params: { slug: '2' } },
            { params: { slug: '3' } },
            { params: { slug: '4' } },
            { params: { slug: '5' } }
        ],
        fallback: false
    }
  }

export async function getStaticProps({params}) {
    const res = await fetch(`${API_URL}/posts/?fields=author,ID,title,date,slug&number=6&page=${params.slug}&pretty=true`)
    const data = await res.json()

    if (!data) {
      return {
        notFound: false,
      }
    }
  
    return {
      props: {
        posts: data
      },
    }
  }
  