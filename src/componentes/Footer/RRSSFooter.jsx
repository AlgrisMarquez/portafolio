import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import '../../assets/styles/components/Footer.scss'; 
// npm install --save-dev @iconify/react @iconify/icons-ei  para github
import scGithub from '@iconify/icons-ei/sc-github';
// npm install --save-dev @iconify/react @iconify/icons-ei  para linkerdin
import scLinkedin from '@iconify/icons-ei/sc-linkedin';

const RRSSFooter = () => {
  return (
    <Fragment>
      <div className="BoxContainerRRSS-footer">
        <div className="containerRRSS-Footer">
          <a href="https://github.com/AlgrisMarquez/">
            <Icon icon={scGithub} color="#173e43" />
          </a>
        </div>
        <div className="containerRRSS-Footer">
          <a href="www.linkedin.com/in/algris-márquez-lameda">
          <Icon icon={scLinkedin} color="#173e43" />
          </a>
        </div>
    </div>
    </Fragment>
  );
};

export default RRSSFooter;