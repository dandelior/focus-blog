import Head from "next/head";
import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";
import API_URL from "../client";
import getAllPosts from "../services/getAllPosts"

import { motion, AnimatePresence } from "framer-motion"

const NOTION_BLOG_ID = '6bcf8a5fe0be4de48afa863f65f8047a?v=4467232d03384b35b0db263443ac2688'

export default function Home({posts}){

  const easing = [0.25, 1, 0.5, 1]
  
  return (
    <Layout>
      <Head>
        <title>FOCUS — Un blog de @bydandelior</title>
      </Head>

      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} exit={{ opacity: 0 }}>        
          {/* <motion.div className="intro" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease: easing, duration: 1 }}>
            <h1>
              Un <span>espacio</span> para enfocarme y escribir.
            </h1>
          </motion.div> */}
          
          <PostsGrid nextPageOnIndex={true} posts={posts} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)
  const posts = await res.json()

  if (!posts) {
    return { notFound: true }
  }

  return {
    props: { posts }
  };
}
