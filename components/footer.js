export default function Footer(){
    let year =  new Date().getFullYear();
    return (
        <>
            <footer>
                <p>© {year} focus</p>
                {/* <p>© {year}. Todos los derechos reservados</p> */}
            </footer>

            <style jsx>
                {`
                    footer {
                        // margin-top: 83px;
                        margin-top: 72px;
                        text-align: center;
                    }
                    @media (min-width: 600px) {
                        footer {
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    footer p {
                        font-size: 1.2ch;
                        color: var(--color-medium);
                    }
                    @media (prefers-color-scheme: dark){
                        footer p {
                            color: var(--color-softmedium);
                            opacity: 0.4;
                        }
                    }
                `}
            </style>
        </>
    )
}