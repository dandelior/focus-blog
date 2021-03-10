
import Head from "next/head";
import { NotionRenderer } from "react-notion";
import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";
import formatDate from "../formatDate";
import API_URL from "../client"
import getAllPosts from "../services/getAllPosts"

import { motion, AnimatePresence } from "framer-motion"

export default function Post({
  relativePosts, 
  post,
  blocks
}){

  if (!post) return null;
  return (
    <Layout>
      <Head>
        <title>{post.title} — FOCUS</title>
      </Head>
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="the-article">
              <div className="article-header">
                  <h1>
                      {post.title}
                  </h1>
                  <p>
                    {formatDate(post.date)}
                  </p>
              </div>
              <div className="article-body">
                <NotionRenderer blockMap={blocks}  />
              </div>
          </div>

          {/* <div className="similar-posts">
              <h2>Te Podría Interesar</h2>
              <PostsGrid posts={relativePosts} />
          </div> */}
        </motion.div>
      </AnimatePresence>

      <style jsx global>
        {`
          .article-header {
            /* margin-bottom: 42px; */
            // margin-bottom: 52px;
            margin-bottom: 8ch;
          }

          @media (min-width: 1200px) {
            .article-header {
              margin-bottom: 8.5ch;
            }
          }

          .article-header h1 {
            font-weight: 420;
            font-size: 3.5ch;
            line-height: 130%;
            letter-spacing: -0.02ch;
            /* margin-bottom: 14px; */
            margin-bottom: 12px;
          }

          @media (min-width: 1200px) {
            .article-header h1 {
              // font-size: 3.8ch;
              font-size: 4ch;
            }
          }

          @media (min-width: 1400px) {
            .article-header h1 {
              font-size: 4.5ch;
            }
          }

          .article-header p {
            font-weight: 300;
            opacity: 0.3;
            font-size: 1.4ch;
            letter-spacing: -0.02ch;
          }

          .article-body {
            // font-family: 'Inter';
            font-family: 'Source Serif Pro';
            font-weight: 350;
            max-width: 70ch;
          }

          .article-body h1,
          .article-body h2,
          .article-body h3,
          .article-body h4,
          .article-body h5,
          .article-body h6 {
            font-family: 'Inter';
            line-height: 130%;
            font-weight: 400;
            letter-spacing: -0.02ch;
          }

          .article-body h1,
          .article-body h2 {
            font-size: 3.1ch;
            line-height: 140%;
            margin-top: 1.8ch;
            margin-bottom: 0.9ch;
          }

          @media (min-width: 1200px) {
            .article-body h1,
            .article-body h2 {
              font-size: 3.4ch;
              margin-bottom: 1ch;
              /* margin-top: 1.8ch; */
              /*margin-bottom: 0.9ch; */
            }
          }

          @media (min-width: 1400px) {
            .article-body h1,
            .article-body h2 {
              font-size: 3.6ch;
              // margin-bottom: 1ch;
            }
          }

          .article-body p {
            margin-bottom: 2ch;
            line-height: 160%;
          }

          @media (min-width: 1200px) {
            .article-body p {
              font-size: 2.1ch;
            }
          }

          @media (min-width: 1400px) {
            .article-body p {
              font-size: 2.2ch;
            }
          }

          .article-body ul {
            margin-bottom: 2ch;
            margin-bottom: 1.7ch;
          }

          .article-body ul li {}

        `}
      </style>
    </Layout>
  )
}

export async function getStaticProps({ params: {slug} }) {
  const posts = await getAllPosts();
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return { props: { blocks, post, } }
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  };
}
  