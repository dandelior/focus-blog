import Link from 'next/link'

export default function Header(){
    return (
        <header>
            <div className="brand">
                <Link href="/">
                    <a>
                        {/* <img src="/focus.svg" className="rotating" /> */}
                        <span>focus</span>
                    </a>
                </Link>
                <p>
                    por Juan Berrios
                </p>
            </div>
            {/* <nav className="menu">
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <a href="https://juanberrios.com">Portafolio</a>
            </nav> */}

            <style jsx>
                {`
                    header {
                        color: var(--color-primary);
                        margin-bottom: 26vh;
                        margin-bottom: 22vh;
                    }
                    @media (min-width: 1200px) {
                        header {
                            margin-bottom: 22ch;
                        }
                    }
                    header .brand {
                        line-height: 140%
                    }
                    header .brand a {
                        display: flex;
                        align-items: center;
                        font-size: 18px;
                        font-weight: 400;
                        border: none;
                        letter-spacing: -0.03rem;
                        margin-bottom: 1px;
                        transition: all ease 0.2s;
                    }
                    header .brand a span {
                        color: var(--color-medium);
                    }
                    /* @media (min-width: 600px) {
                        header .brand a {
                            font-size: 19px;
                        }
                    } */
                    // header .brand a img {
                    //     width: 18px;
                    //     height: 18px;
                    //     margin-bottom: 2px;
                    // }
                    header .brand a span {
                        // margin-left: 5px;
                        color: var(--color-primary);
                    }
                    header .brand p {
                        font-size: 14px;
                        color: var(--color-medium);
                    }
                    @media (prefers-color-scheme: dark) {
                        header .brand p {
                            color: var(--color-mediumlight);
                        }
                    }
                    // header .menu {
                    //     display: inherit;
                    // }
                    // header .menu a {
                    //     display: inline-block;
                    //     font-size: 0;
                    //     margin-left: 20px
                    // }
                    // header .menu a:first-letter {
                    //     font-size: 17px;
                    // }
                    // @media (min-width: 600px) {
                    //     header .menu a {
                    //         margin-left: 6.4ch;
                    //         font-size: 17px;
                    //     }
                    // }
                `}
            </style>
        </header>
    )
}