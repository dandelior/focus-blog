import Link from 'next/link'

export default function Header(){
    return (
        <header>
            <div className="brand">
                <Link href="/">
                    <a>FOCUS</a>
                </Link>
                <p>Un blog de @bydandelior</p>
            </div>
            <nav className="menu">
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <a href="https://juanberrios.com">Portafolio</a>
            </nav>

            <style jsx>
                {`
                    header {
                        color: var(--color-primary);
                    }
                    @media (min-width: 600px) {
                        header {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-start;
                        }
                    }
                    header .brand {
                        line-height: 140%
                    }
                    header .brand a {
                        font-size: 18px;
                        font-weight: 700;
                        border: none;
                    }
                    @media (min-width: 600px) {
                        header .brand a {
                            font-size: 20px;
                        }
                    }
                    header .brand p {
                        font-size: 14px;
                        color: var(--color-medium);
                    }

                    header .menu {
                        display: none;
                    }
                    @media (min-width: 600px) {
                        header .menu {
                            display: inherit;
                        }
                    }
                    @media (min-width: 600px) {
                        header .menu a {
                            margin-left: 4ch;
                            font-size: 17px;
                        }
                    }
                `}
            </style>
        </header>
    )
}