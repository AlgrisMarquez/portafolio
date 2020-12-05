import React, { Fragment } from "react";
import RRSSFooter from "./RRSSFooter";

import "../../assets/styles/components/Footer.scss";

const Footer = () => {
    return (
        <Fragment>
            <div className="fatherFooter">
               <div className="main-footer">
                    <div className="container-footer">
                        <div className="row">
                            <div className="col"></div>
                        </div>
                        <div className="RRSS-footer">
                            <RRSSFooter />
                        </div>
                        <div className="develop">
                            <p className="col-info">
                                @ AM Developer Front-End, 2020. Desarrollado por Algris Márquez
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;