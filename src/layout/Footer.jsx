import React from "react";

const Footer = () => {
    return (
        <footer className="page-footer blue lighten-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Kairat's React movies</h5>
                        <p className="grey-text text-lighten-4">
                            You can see sourse code by click repo
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Kairat Jumanov
                    <a className="grey-text text-lighten-4 right" href="#!">
                        Soure code
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
