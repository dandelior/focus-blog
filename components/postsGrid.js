import Link from 'next/link';
import formatDate from '../formatDate';

export default function PostsGrid({posts, showPagination}){
    return (
        <>
            <div className="grid-container">
                {/* Grilla de posts */}
                <div className="posts-grid">
                    {
                        posts &&
                        posts.map((post) => (
                            <Link href={`/${post.slug}`} key={post.ID}>
                                <a className="grid-item">
                                    <h3>{post.title}</h3>
                                    <p>
                                        {formatDate(post.date)}
                                    </p>
                                </a>
                            </Link>
                        ))
                    }
                </div>
                {/* Pagination */}
                {showPagination && (
                    <div className="post-grid-pagination">
                        <Link href="/page/2">
                            <a className="prev">« Nuevos</a>
                        </Link>
                        <Link href="/page/2">
                            <a className="next">Anteriores »</a>
                        </Link>
                    </div>
                )}
            </div>

            <style jsx>
                {`
                    .grid-container {}
                    .grid-container .posts-grid {}
                    @media (min-width: 600px) {
                        .grid-container .posts-grid {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-column-gap: 4ch;
                        }
                    }
                    @media (min-width: 1200px) {
                        .grid-container .posts-grid {
                            grid-column-gap: 6ch;
                        }
                    }
                    .grid-container .posts-grid .grid-item {
                        padding-top: 23px;
                        border-top: solid var(--color-softGray) 2px;
                        margin-top: 5ch;
                        border-bottom: none;
                        display: grid;
                        grid-template-rows: auto 30px;
                        align-items: stretch;
                    }
                    @media (min-width: 600px) {
                        .grid-container .posts-grid .grid-item {
                            margin-top: 0;
                            margin-bottom: 7ch;
                            padding-right: 1ch;
                        }
                    }
                    @media (min-width: 1200px) {
                        .grid-container .posts-grid .grid-item {
                            margin-bottom: 8ch;
                            padding-right: 1ch;
                        }
                    }
                    .grid-container .posts-grid .grid-item:first-child {
                        margin-top: 0;
                    }
                    .grid-container .posts-grid .grid-item h3 {
                        font-size: 24px;
                        line-height: 135%;
                        letter-spacing: -0.04rem;
                        letter-spacing: -0.03rem;
                        margin-bottom: 20px;
                    }
                    @media (min-width: 1200px) {
                        .grid-container .posts-grid .grid-item h3 {
                            font-size: 26px;
                            margin-bottom: 22px;
                        }
                    }
                    .grid-container .posts-grid .grid-item p {
                        color: gray;
                        font-size: 14px;
                        line-height: 140%;
                        letter-spacing: -0.03em;
                        color: var(--color-gray);
                    }
                    @media (min-width: 1200px) {
                        .grid-container .posts-grid .grid-item p {
                            font-size: 16px;
                        }
                    }
                    .grid-container .post-grid-pagination {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        border-top: solid 2px var(--color-softGray);
                        margin-top: 5.5ch;
                        padding-top: 2ch;
                    }
                    @media (min-width: 600px) {
                        .grid-container .post-grid-pagination {
                            margin-top: 2ch;
                        }
                    }
                    .grid-container .post-grid-pagination .next,
                    .grid-container .post-grid-pagination .prev {
                        font-weight: 600;
                        border: none;
                    }
                    .grid-container .post-grid-pagination .next {
                        text-align: right;
                    }
                    .grid-container .post-grid-pagination .prev {
                        text-align: left;
                    }
                `}
            </style>
        </>
    )
}