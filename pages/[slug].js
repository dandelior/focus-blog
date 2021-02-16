
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
                <NotionRenderer blockMap={blocks} />
              </div>
          </div>

          {/* <div className="similar-posts">
              <h2>Te Podría Interesar</h2>
              <PostsGrid posts={relativePosts} />
          </div> */}
        </motion.div>
      </AnimatePresence>

      <style jsx>
        {`
          /* Styles in —» components/layout */
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
  