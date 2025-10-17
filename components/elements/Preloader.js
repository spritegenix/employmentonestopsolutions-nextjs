
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close"><i className="icon-27"></i></div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="E" className="letters-loading">
                                E
                            </span>
                            <span data-text-preloader="m" className="letters-loading">
                                m
                            </span>
                            <span data-text-preloader="p" className="letters-loading">
                                p
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                l
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="y" className="letters-loading">
                                y
                            </span>
                            <span data-text-preloader="m" className="letters-loading">
                                m
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                        </div>
                        <div className="txt-loading">
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader=" " className="letters-loading">
                                {" "}
                            </span>
                            <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="p" className="letters-loading">
                                p
                            </span>
                          
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
