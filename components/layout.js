import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {

    return (
        <>
            <Header />
              {children}
            <Footer />

            <style jsx global>
            {`
                *,
                *::before,
                *::after {
                  box-sizing: border-box;
                }
                
                /* Remove default padding */
                ul[class],
                ol[class] {
                  padding: 0;
                }
                
                /* Remove default margin */
                body,
                h1,
                h2,
                h3,
                h4,
                p,
                ul[class],
                ol[class],
                li,
                figure,
                figcaption,
                blockquote,
                dl,
                dd {
                  margin: 0;
                }

                html,
                body {
                    font-family: Inter, sans-serif;
                }
                
                /* Set core body defaults */
                body {
                  min-height: 100vh;
                  box-sizing: border-box;
                  scroll-behavior: smooth;
                  text-rendering: antialized;
                  line-height: 1.5;
                }
                
                /* Remove list styles on ul, ol elements with a class attribute */
                ul[class],
                ol[class] {
                  list-style: none;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }
                
                /* A elements that don't have a class get default styles */
                a:not([class]) {
                  text-decoration-skip-ink: auto;
                }

                code,
                kbd,
                pre,
                samp {
                    font-family: monospace;
                    font-size: 0.9em;
                    padding: 0.2rem 0.3rem;
                }

                pre {
                    border: 0.1rem solid #dcd7ca;
                    line-height: 1.5;
                    margin: 2rem 0;
                    overflow: auto;
                    padding: 1.5rem 1rem;
                    text-align: left;
                }
                
                /* Make images easier to work with */
                img {
                  max-width: 100%;
                  display: block;
                }
                
                /* Natural flow and rhythm in articles by default */
                article > * + * {
                  margin-top: 1em;
                }
                
                /* Inherit fonts for inputs and buttons */
                input,
                button,
                textarea,
                select {
                  font: inherit;
                }

                figure {
                    display: block;
                    margin: 0;
                }

                iframe {
                    display: block;
                    max-width: 100%;
                }

                video {
                    display: block;
                }

                svg,
                img,
                embed,
                object {
                    display: block;
                    height: auto;
                    max-width: 100%;
                }

                ul,
                ol {
                    margin: 1rem 0;
                }

                ul {
                    list-style: disc;
                }

                ul ul {
                    list-style: circle;
                }

                ul ul ul {
                    list-style: square;
                }

                ol {
                    list-style: decimal;
                }

                ol ol {
                    list-style: lower-alpha;
                }

                ol ol ol {
                    list-style: lower-roman;
                }

                li {
                    line-height: 1.5;
                    /* margin: 0.5rem 0 0 2rem; */
                }

                li > ul,
                li > ol {
                    margin: 1rem 0 0 2rem;
                }


                
                /* Remove all animations and transitions for people that prefer not to see them */
                @media (prefers-reduced-motion: reduce) {
                  * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                  }
                }

                /* Variables CSS */
                :root {
                  --color-dark: black;
                  --color-gray: #888888;
                  --color-softGray: #F0F0F0;
                }

                /* Basics */
                body {
                    padding: 4.5ch 3.2ch;
                }

                @media (min-width: 600px) {
                  body {
                    padding: 6.5ch 5.6ch;
                    
                  }
                }

                @media (min-width: 900px) {
                  body {
                    padding: 6.5ch 7ch;
                    
                  }
                }

                @media (min-width: 1200px) {
                  body {
                    padding: 6.5ch 8.4ch;
                  }
                }

                @media (min-width: 1400px) {
                  body {
                    padding: 6.5ch 0;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 1220px;
                  }
                }

                a {
                    border-bottom: solid 1px black;
                }

                /* THE ARTICLE */
                .the-article {
                    margin-top: 9ch;
                }
                @media (min-width: 600px) {
                    .the-article {
                        margin-top: 10ch
                    }
                }
                .the-article .article-header {
                    text-align: center;
                    margin-bottom: 4.5ch;
                }
                @media (min-width: 600px) {
                    .the-article .article-header {
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 80vw;
                        margin-bottom: 6ch;
                    }
                }
                @media (min-width: 900px) {
                    .the-article .article-header {
                        max-width: 70ch;
                    }
                }
                .the-article .article-header h1 {
                    font-size: 40px;
                    line-height: 125%;
                    letter-spacing: -0.07rem;
                    margin-bottom: 1ch;
                }
                @media (min-width: 600px) {
                    .the-article .article-header h1 {
                        font-size: 50px;
                    }
                }
                @media (min-width: 900px) {
                    .the-article .article-header h1 {
                        font-size: 56px;
                    }
                }
                .the-article .article-header p {
                    color: gray;
                    font-size: 16px;
                    color: var(--color-gray);
                }
                .the-article .article-body {
                    margin-left: auto;
                    margin-right: auto;
                }
                @media (min-width: 600px) {
                    .the-article .article-body {
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 56ch;
                    }
                }
                @media (min-width: 1200px) {
                    .the-article .article-body {
                        max-width: 62ch;
                    }
                }
                /* Content article styles */
                
                .the-article .article-body 
                p, 
                li, 
                blockquote,
                mark,
                ins,
                del,
                sup,
                small,
                i,
                b
                {
                    font-family: 'Source Serif Pro', serif;
                }

                .the-article .article-body p, li  {
                    font-size: 18px;
                }

                .the-article .article-body p {
                    margin-bottom: 2rem;
                }

                .the-article .article-body blockquote {

                }
                .the-article .article-body pre {}




                .similar-posts {
                    margin-top: 46px;
                }
                .similar-posts h2 {
                    font-size: 32px;
                    letter-spacing: -0.01rem;
                    margin-bottom: 1ch;
                }
                @media (min-width: 600px) {
                    .similar-posts {
                        margin-top: 70px;
                    }
                }
                @media (min-width: 900px) {
                    .similar-posts {
                        margin-top: 90px;
                    }
                }
                @media (min-width: 1200px) {
                    .similar-posts {
                        margin-top: 100px;
                    }
                }
            `}
            </style>
        </>
    )
}