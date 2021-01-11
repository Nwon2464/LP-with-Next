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

  .author {
    color: var(--color-text-light);
    font-size: 1.1rem;
    a {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    .LeftRight {
      display: block !important;
      width: 100%;
      max-width: 270px;
      margin: 0px auto;
      color: var(--color-text-light);
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        margin: 0px;
        list-style: none;
        & li {
          padding: 0.9rem;
        }

        li > a {
          transition: all 0.25s var(--transition);
        }
        li > a:hover,
        li > a:active {
          color: var(--color-text-secondary);
          transform: translateY(-3px);
          transition: all 0.25s var(--transition);
        }
        & li a svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }
      }
    }
  }
  .LeftRight {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div className="LeftRight">
        <ul className="LeftRightSideUl">
          {social.map(({ url, name, icon }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
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
