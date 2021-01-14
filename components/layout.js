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

                /* Variables CSS */
                :root {
                    --color-primary: #081923;
                    --color-secondary: #0F222E;
                    --color-medium: #B5B6B7;
                    --color-softmedium: #CCCFD2;
                    --color-light: #EBEAEA;
                    --color-bg: #ffffff;
                }

                @media (prefers-color-scheme: dark) {
                    :root {
                        --color-primary: #EBEAEA;
                        --color-secondary: #EBEAEA;
                        --color-medium: #CCCFD2;
                        --color-softmedium: #B5B6B7;
                        --color-mediumlight: #414D54;
                        --color-light: #0F222E;
                        --color-bg: #081923;
                    }
                }

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
                  color: var(--color-primary);
                }

                html,
                body {
                    font-family: Inter, sans-serif;
                    background-color: var(--color-bg)
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
                    /* padding: 0.2rem 0.3rem; */
                }

                pre {
                    /* border: 0.1rem solid #dcd7ca; */
                    background-color: var(--color-secondary);
                    color: var(--color-softmedium);
                    line-height: 1.5;
                    margin: 2rem 0;
                    overflow: auto;
                    padding: 1.3rem 1.4rem;
                    text-align: left;
                    font-size: 14px;
                }

                @media (prefers-color-scheme: dark) {
                    pre {
                        background-color: var(--color-medium);
                        color: var(--color-light);
                    }
                }

                pre.wp-block-preformatted {
                    background: transparent;
                    color: var(--color-primary);
                    padding: 0.5rem 0;
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

                h1, h2, h3, h4, h5, h6 {
                    font-weight: 600;
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
                    margin: 0 0 2rem 0;
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
                    /* margin: 1rem 0 0 2rem; */
                    margin: 0 0 1rem 2rem;
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

                /* Basics */
                body {
                    padding: 4.5ch 3.2ch;
                }

                @media (min-width: 600px) {
                  body {
                    padding: 6ch 5ch;
                    
                  }
                }

                @media (min-width: 900px) {
                  body {
                    padding: 6ch 6.6ch;
                    
                  }
                }

                @media (min-width: 1200px) {
                  body {
                    padding: 6ch 8.4ch;
                  }
                }

                @media (min-width: 1400px) {
                  body {
                    padding: 6ch 0;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 1220px;
                  }
                }

                a {
                    border-bottom: solid 1px var(--color-medium);
                    transition: all ease 0.3s
                }

                @media (prefers-color-scheme: dark) {
                    a {
                        border-bottom: var(--color-softmedium) solid 1px;
                    }
                }

                a:hover {
                    border-bottom: var(--color-softmedium) solid 1px;
                }

                @media (prefers-color-scheme: dark) {
                    a:hover {
                        border-bottom: var(--color-mediumlight) solid 1px;
                    }
                }

                /* THE ARTICLE */
                .the-article {
                    margin-top: 9ch;
                }
                @media (min-width: 600px) {
                    .the-article {
                        margin-top: 10ch;
                        margin-top: 12ch;
                    }
                }
                .the-article .article-header {
                    text-align: center;
                    margin-bottom: 4.5ch;
                    margin-bottom: 5.2ch;
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
                    line-height: 120%;
                    letter-spacing: -0.08rem;
                    font-weight: 600;
                    font-weight: 700;
                    margin-bottom: 1.4ch;
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
                    letter-spacing: -0.03em;
                    color: var(--color-medium);
                }
                @media (prefers-color-scheme: dark) {
                    .the-article .article-header p {
                        color: var(--color-mediumlight);
                    }
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
                        max-width: 66ch;
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
                    /* font-size: 18px; */
                    font-size: 19px;
                }

                @media (min-width: 600px) {
                    .the-article .article-body p, li  {
                        font-size: 20px;
                    }
                }

                @media (min-width: 900px) {
                    .the-article .article-body p, li  {
                        font-size: 21px;
                        line-height: 1.6;
                    }
                }

                .the-article .article-body p {
                    margin-bottom: 2rem;
                }

                @media (min-width: 900px) {
                    .the-article .article-body p {
                        margin-bottom: 2.4rem;
                    }
                }

                .the-article .article-body blockquote {}

                @media (min-width: 900px) {
                    .the-article .article-body ul,
                    .the-article .article-body ol {
                        margin-bottom: 2.4rem;
                    }
                }

                .the-article .article-body pre {}

                .the-article .article-body h1,
                .the-article .article-body h2,
                .the-article .article-body h3,
                .the-article .article-body h4,
                .the-article .article-body h5,
                .the-article .article-body h6 {
                    line-height: 1.4;
                    margin-bottom: 1ch;
                    font-weight: 700;
                    letter-spacing: -0.01rem;
                }

                .the-article .article-body h1 {
                    font-size: 34px;
                }
                .the-article .article-body h2 {
                    font-size: 26px;
                }
                .the-article .article-body h3 {
                    font-size: 22px;
                }
                .the-article .article-body h4 {
                    font-size: 19px;
                }
                .the-article .article-body h5 {
                    font-size: 16px;
                }
                .the-article .article-body h6 {
                    font-size: 14px;
                }

                @media (min-width: 900px) {
                    .the-article .article-body h1 {
                        margin-top: 2ch;
                        font-size: 38px;
                    }
                    .the-article .article-body h2 {
                        margin-top: 2ch;
                        font-size: 30px;
                    }
                    .the-article .article-body h3 {
                        margin-top: 2ch;
                        font-size: 25px;
                    }
                    .the-article .article-body h4 {
                        margin-top: 2ch;
                        font-size: 22px;
                    }
                    .the-article .article-body h5 {
                        margin-top: 2ch;
                        font-size: 20px;
                    }
                    .the-article .article-body h6 {
                        margin-top: 2ch;
                        font-size: 17px;
                    }
                }

                .the-article figure {
                    margin-bottom: 2rem;
                }

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