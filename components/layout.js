import Footer from "./footer";
import Header from "./header";
// import Loader from "./loader";

export default function Layout({ children }) {

    return (
        <>
            {/* <Loader show={false} /> */}
            <Header />
              {children}
            <Footer />

            <style jsx global>
            {`

                /* Variables CSS */
                :root {
                    --color-primary: #07151F;
                    /* --color-secondary: #0F222E; */
                    --color-secondary: #122A39;
                    --color-medium: #B5B6B7;
                    --color-softmedium: #CCCFD2;
                    --color-light: #F7F7F7;
                    --color-bg: #FCFCFC;
                }

                @media (prefers-color-scheme: dark) {
                    :root {
                        --color-primary: #EBEAEA;
                        --color-secondary: #EBEAEA;
                        --color-medium: #CCCFD2;
                        --color-softmedium: #B5B6B7;
                        --color-mediumlight: #414D54;
                        --color-light: #0D1C26;
                        --color-bg: #07151F;
                    }
                }

                @keyframes rotating {
                    from {
                        -ms-transform: rotate(0deg);
                        -moz-transform: rotate(0deg);
                        -webkit-transform: rotate(0deg);
                        -o-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    to {
                        -ms-transform: rotate(360deg);
                        -moz-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        -o-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }

                .rotating {
                    -webkit-animation: rotating 2s linear infinite;
                    -moz-animation: rotating 2s linear infinite;
                    -ms-animation: rotating 2s linear infinite;
                    -o-animation: rotating 2s linear infinite;
                    animation: rotating 2s linear infinite;
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
                  font-weight: 320;
                }
                
                /* Remove list styles on ul, ol elements with a class attribute */
                ul[class],
                ol[class] {
                    padding-left: 1.4em;
                  /* list-style: none; */
                  margin-bottom: 1.5em;
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
                    padding: 13ch 4ch 3.5ch;
                }

                @media (min-width: 600px) {
                  body {
                    padding: 13ch 6.5ch;
                    
                  }
                }

                // @media (min-width: 900px) {
                //   body {
                //     padding: 8ch 6.6ch;
                    
                //   }
                // }

                @media (min-width: 1200px) {
                  body {
                    padding: 13ch 8.4ch;
                  }
                }

                @media (min-width: 1400px) {
                  body {
                    padding: 13ch 0 8ch;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 1230px;
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
                
            `}
            </style>
        </>
    )
}