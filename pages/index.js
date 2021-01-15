import Head from "next/head";
import Layout from "../components/layout";
import PostsGrid from "../components/postsGrid";
import API_URL from "../client";

import { motion, AnimatePresence } from "framer-motion"

export default function Home({posts}){

  // const easing = [0.930, 1, 0.230, 0.895]
  const easing = [0.25, 1, 0.5, 1]
  
  return (
    <Layout>
      <Head>
        <title>FOCUS — Un blog de @bydandelior</title>
      </Head>

      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} exit={{ opacity: 0 }}>        
          <motion.div className="intro" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease: easing, duration: 1 }}>
            <h1>
              Un <span style={{ color: 'var(--color-medium)' }}>espacio</span> para enfocarme y escribir.
            </h1>
          </motion.div>
          
          <PostsGrid nextPageOnIndex={true} posts={posts.posts} />
        </motion.div>
      </AnimatePresence>

      <style>
        {`
          .intro {
            margin-top: 18ch;
            margin-bottom: 7ch;
          }
          @media (min-width: 600px) {
            .intro {
              margin-top: 22ch;
              margin-bottom: 9ch;
            }
          }
          @media (min-width: 900px) {
            .intro {
              margin-top: 24ch;
              margin-bottom: 9.5ch;
            }
          }
          @media (min-width: 1200px) {
            .intro {
              /* margin-top: 24ch; */
              margin-bottom: 9ch;
            }
          }
          .intro h1 {
            width: 92%;
            font-size: 40px;
            line-height: 125%;
            font-weight: 600;
            font-weight: 700;
            color: var(--color-primary);
            letter-spacing: -0.1rem;
            letter-spacing: -0.13rem;
          }
          @media (min-width: 600px) {
            .intro h1 {
              font-size: 54px;
            }
          }
          @media (min-width: 900px) {
            .intro h1 {
              width: 74%;
              line-height: 120%;
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
