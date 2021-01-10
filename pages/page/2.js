import Layout from "../../components/layout";
import PostsGrid from "../../components/postsGrid";

export default function PageOfPagination() {
    return (
        <>
            <Layout>
                <div className="page-of-pagination-wrapper">
                    <p className="page">Página 2</p>
                    <PostsGrid showPagination={true} />
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