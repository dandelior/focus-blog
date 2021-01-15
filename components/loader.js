const Loader = ({show}) => {
    return (
        <>
            <div className={`${show ? 'show' : ''} loader`}>
                <div className="wrapper">
                    <img src="/focus.svg" className="rotating" />
                    <h1>FOCUS</h1>
                </div>
            </div>

            <style jsx>
            {`
                .loader {
                    position: fixed;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100vw;
                    height: 0vh;
                    background: var(--color-primary);
                    z-index: 2;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.45, 0, 0.55, 1);
                }

                .loader.show {
                    height: 100vh;
                }

                .loader .wrapper {
                    display: flex;
                    align-items: center;
                }

                .loader .wrapper img {
                    width: 18px;
                    height: 18px;
                    margin-bottom: 2px;
                }

                .loader .wrapper h1 {
                    margin-left: 5px;
                    color: white;
                    font-size: 18px;
                }
            `}
            </style>
        </>
    )
}

export default Loader;