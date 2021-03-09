<style jsx>
.the-article {
    margin-top: 11ch;
}
@media (min-width: 600px) {
    .the-article {
        /* margin-top: 10ch;
        margin-top: 12ch; */
        margin-top: 13ch;
        margin-top: 15ch;
    }
}
.the-article .article-header {
    text-align: center;
    // margin-bottom: 4.5ch;
    margin-bottom: 5.2ch;
    margin-bottom: 6.7ch;
}
@media (min-width: 600px) {
    .the-article .article-header {
        margin-left: auto;
        margin-right: auto;
        max-width: 80vw;
        margin-bottom: 6ch;
        margin-bottom: 6.5ch;
        margin-bottom: 7.5ch;
    }
}
@media (min-width: 900px) {
    .the-article .article-header {
        max-width: 70ch;
        /* margin-bottom: 8ch; */
    }
}
.the-article .article-header h1 {
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.08rem;
    /* font-weight: 600; */
    font-weight: 620;
    margin-bottom: 1.4ch;
    margin-bottom: 0.8ch;
}
@media (min-width: 600px) {
    .the-article .article-header h1 {
        font-size: 50px;
    }
}
@media (min-width: 900px) {
    .the-article .article-header h1 {
        /*font-size: 56px;*/
        // letter-spacing: -0.09rem;
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
        max-width: 72ch;
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
i
{
    font-family: 'Source Serif Pro', serif;
    font-weight: 400;
}

b
{
    font-weight: 620;
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
    margin-bottom: 1.8rem;
}

/* @media (min-width: 900px) {
    .the-article .article-body p {
        margin-bottom: 2.4rem;
    }
} */

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
    margin-top: 1.5ch;
    margin-bottom: 1ch;
    font-weight: 620;
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

/* @media (min-width: 900px) {
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
} */

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
</style>