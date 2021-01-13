import Head from "next/head";
import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Página no encontrada — FOCUS</title>
            </Head>
            <div className="error">
                <h1>
                    404
                </h1>
                <p>
                    Por alguna razón la dirección a la que accediste no existe. Por favor, comprueba que el link esté escrito correctamente o
                </p>
            </div>

            <style jsx>
                {`
                    .error {
                        width: 100%;
                        min-height: 70vh;
                        display: grid;
                        text-align: center;
                        justify-content: center;
                        align-content: center;
                        padding: 0 10vw;
                        /* place-items: center; */
                    }
                    .error h1 {
                        margin-bottom: 12px;
                    }
                    .error p {}
                    /* .error p {
                        align-self: start
                    } */
                `}
            </style>
        </Layout>
    )
  }