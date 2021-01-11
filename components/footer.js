export default function Footer(){
    let year =  new Date().getFullYear();
    return (
        <>
            <footer>
                <p>FOCUS</p>
                <p>© {year}. Todos los derechos reservados</p>
            </footer>

            <style jsx>
                {`
                    footer {
                        margin-top: 83px;
                        text-align: center;
                    }
                    @media (min-width: 600px) {
                        footer {
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    footer p {
                        font-size: 14px;
                        color: var(--color-gray);
                    }
                `}
            </style>
        </>
    )
}