import React from "react";
import { social } from "../../data/data";
import styled from "styled-components";
const FooterDiv = styled.footer`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;

  .LeftSideElement{
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
  }
    .author{
        color: var(--color-text-light);
        font-size: 1.1rem;
    }
}
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div className="LeftSideElement">
        {social.map(({ url, name, icon }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              {icon}
            </a>
          </li>
        ))}
      </div>
      <div className="author">
        <a href="https://github.com/dnjsskarb7/LP-with-Next">
          <div>Designed & Built by Namkyu Won</div>
        </a>
      </div>
    </FooterDiv>
  );
};

export default Footer;
