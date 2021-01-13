import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`

/* This global CSS goes to pages/_app.js. Other than that, it goes to wherever you want inside pages folder 
or if you want your css styles to be at specific components, you have to add [name].module.css and import it as "import styles from "..." ! important   */
/* ------------- */
/* Global Styles */
/* ------------- */
:root {
  --color-text-primary: #fff;
  --color-text-light: #a8b2d1;
  --color-text-lightest:#a8b2ff;
  --color-text-secondary: #2e9cca;
  --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  --font-18: 18px;
  --border-radius-5:5px;
  --transition: cubic-bezier(0.645, 0.045, 0.355, 1);
  --color-background-primary-default: #25274d;
  --color-background-primary-lighter: #333566;
 --font-base:  'Montserrat', sans-serif;   
  --color-text-button-secondary: #0e0e10;
  --color-background-button-secondary-default: rgba(0, 0, 0, 0.05);
  --z-index-below: -1;
  --z-index-default: 1;
  --color-icon-main: #00b5ad;
  --color-header-background: #ffffff;
  --color-header-input-button-background: #f2f2f2;
  --color-header-input-find-button-background: rgba(0, 0, 0, 0.03);
  --color-text-alt: #1f1f23;
  --color-text-base: #0e0e10;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;

}
body {
  font-family: var(--font-base);
  font-size:62.5%;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  color: var(--color-text-primary);
  background: var(--color-background-primary-default);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  
  cursor: pointer;
}
button {    
    background: 0 0;
    border-radius: 0;
    color: inherit;
    font: inherit;
    font-size:inherit;
    text-align: inherit;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}





/* background-image: linear-gradient(to top, #003973, #e5e5be); */
/* Fade Up enter */
.fadeup-enter {
  opacity: 0.02;
  transform: translateY(20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadeup-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadeup-enter-done {
  transform: translateY(0px);
}


/*  */


/*  */
/* Fade Down Enter */
.fadedown-enter {
  opacity: 0.01;
  transform: translateY(20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadedown-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadedown-enter-done {
  transform: translateY(0px);
}

/* Fade down appear*/
.fadedown-appear {
  opacity: 0.01;
  transform: translateY(-20px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadedown-appear-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 500ms var(--easing), transform 500ms var(--easing);
}
.fadedown-appear-done {
  transform: translateY(0px);
}

/* Fade */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms var(--easing);
}
.fade-enter-done {
  opacity: 1;
}



@media (max-width: 1080px) {
  .main{
    padding: 0 100px !important;
     }
}
@media (max-width: 768px) {

  .main {
      padding: 0 50px !important;
    }


 .LeftSide {
  display: none;
 }
 .RightSide{
  display: none;
 }
 }
  @media (max-width: 480px) {
  .main{
    padding: 0 25px !important;
  }
    }


@media only screen and (max-width: 1250px) {
   
  
  .LeftSide{
left:1.5rem;
}
.RightSide{
 right:1.5rem;
}
    .slide {
      width: 700px !important;
    }
    .slide .imgSlide {
      width: 500px !important;
    }
    .slide .image__card {
      width: 200px !important;
    }
  }
  @media only screen and (max-width: 1080px) {
    .slide {
      width: 600px !important;
      transform: none !important;
    }
    .slide .imgSlide {
      width: 400px !important;
    }
    .slide .image__card {
      width: 200px !important;
    }
  }
  @media only screen and (max-width: 900px) {
    .slide {
      width: 500px !important;
    }
    .slide .imgSlide {
      width: 500px !important;
    }
    .image__card {
      display: none;
    }
 
  }




  ${
    "" /* @media (max-width: 768px){
.main {
    padding: 0px 50px !important;
}
  } */
  }

.head-number{
    font-size: clamp(25px,5vw,30px);
    filter: brightness(1.3);
    color: var(--color-text-lightest);
 
}

.head-number::before {
  font-size:clamp(20px,5vw,25px);

    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-size: clamp(20px, 5vw, 25px);
    color: var(--color-text-secondary);
  }








.app-align-center {
  align-items: center !important;
}
.app-border-spacing-0 {
  border-spacing: 0 !important;
}


.app-table-layout-fixed {
  table-layout: fixed !important;
}

.app-flex-basis-10{
  flex-basis: 10.5rem !important;
}
.app-max-width-10{
  max-width: 10.5rem !important;
}
.app-mg-l-1{
  margin-left: 1rem !important;
}
.app-min-width-0{
  min-width: 0 !important;
}

.app-flex-basis-20{
  
  flex-basis: 20rem !important;
}
.app-max-width-20 {
  max-width: 20rem !important;
}
.app-mg-l-25 {
  margin-left: 2.5rem !important;
}

.app-flex-1-1 {
  flex: 1 1 30rem !important;
}


.app-flex-basis-6 {
  flex-basis: 6rem !important;
}
.app-max-width-6 {
  max-width: 6rem !important;
}
.app-justify-content-start {
  justify-content: flex-start !important;
}
${
  "" /* app-flex-basis-6 app-max-width-6 app-justify-content-start app-mg-l-1 app-mg-r-05 */
}


.app-min-height-100 {
  min-height: 100vh;
}
.app-header-10 {
  height: 10rem;
}


/* ------------ */
/* Title Screen */
/* ------------ */


.app-top-nav {
  z-index: 1000;
}
.app-top-nav-search-container {
  flex-basis: 40rem !important;
  position: relative;
}
.app-top-nav-search-max-width {
  max-width: 40rem !important;
}
.app-height-5 {
  height: 5rem !important;
}


.app-absolute {
  position: absolute !important;
}
.app-fixed {
  position: fixed !important;
}
.app-relative {
  position: relative !important;
}
.app-block {
  display: block !important;
}
.app-inline-block {
  display: inline-block !important;
}
.app-flex {
  display: flex !important;
}
.app-flex-order-1 {
  order: 1 !important;
}
.app-flex-order-2 {
  order: 2 !important;
}
.app-list-style-none {
  list-style: none !important;
}
.app-align-items-start {
  align-items: flex-start !important;
}
.app-align-items-stretch {
  align-items: stretch !important;
}
.app-align-items-center {
  align-items: center !important;
}
.app-align-self-center {
  align-self: center !important;
}
.app-align-items-baseline {
  align-items: baseline !important;
}

.app-align-items-end {
  align-items: flex-end !important;
}

.app-inline-flex {
  display: inline-flex !important;
}
.app-flex-column {
  flex-direction: column !important;
}
.app-flex-row {
  flex-direction: row !important;
}
.app-flex-nowrap {
  flex-wrap: nowrap !important;
}
.app-flex-wrap {
  flex-wrap: wrap !important;
}

.app-bottom-0 {
  bottom: 0 !important;
}
.app-left-0 {
  left: 0 !important;
}
.app-right-0 {
  right: 0 !important;
}
.app-top-0 {
  top: 0 !important;
}
.app-align-middle {
  vertical-align: middle !important;
}
.app-overflow-hidden {
  overflow: hidden !important;
}
.app-overflow-scroll {
  overflow: scroll !important;
}
/* FULL WIDTH OR HEIGHT */
.app-full-height {
  height: 100% !important;
}

.app-full-width {
  width: 100% !important;
}
/* FLEX_GROW OR SHRINK */
.app-flex-grow-1 {
  flex-grow: 1 !important;
}
.app-flex-shrink-1 {
  flex-shrink: 1 !important;
}

.app-flex-grow-0 {
  flex-grow: 0 !important;
}
.app-flex-shrink-0 {
  flex-shrink: 0 !important;
}


/* JUSTIFY-CONTENT */
.app-justify-content-start {
  justify-content: flex-start !important;
}
.app-justify-content-center {
  justify-content: center !important;
}
.app-justify-content-end {
  justify-content: flex-end !important;
}
.app-justify-content-between {
  justify-content: space-between !important;
}
/* MARGIN-PADDING X OR Y  */
.app-mg-x-1 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
.app-mg-x-2 {
  margin-left: 2rem !important;
  margin-right: 2rem !important;
}
.app-mg-l-05 {
  margin-left: 0.5rem !important;
}
.app-mg-l-13 {
  margin-left: 1.3rem !important;
}
.app-mg-l-15 {
  margin-left: 1.5rem !important;
}
.app-mg-t-1 {
  margin-top: 1rem !important;
}
.app-mg-1 {
  margin: 1rem !important;
}
.app-mg-b-03 {
  margin-bottom: 0.3rem !important;
}
.app-mg-b-1 {
  margin-bottom: 1rem !important;
}

.app-mg-x-05 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}
.app-mg-y-05 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.app-mg-r-1 {
  margin-right: 1rem !important;
}
.app-mg-r-05 {
  margin-right: 0.5rem !important;
}
.app-mg-r-2 {
  margin-right: 2rem !important;
}
.app-mg-l-1 {
  margin-left: 1rem !important;
}
.app-pd-t-05 {
  padding-top: 0.5rem !important;
}
.app-pd-b-1 {
  padding-bottom: 1rem !important;
}
.app-pd-t-1 {
  padding-top: 1rem !important;
}
.app-pd-y-1 {
  padding-bottom: 1rem !important;
  padding-top: 1rem !important;
}
.app-pd-y-05 {
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
}
.app-pd-y-06 {
  padding-bottom: 0.6rem !important;
  padding-top: 0.6rem !important;
}

.app-pd-y-03 {
  padding-bottom: 0.3rem !important;
  padding-top: 0.3rem !important;
}
.app-pd-x-1 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.app-pd-x-14 {
  padding-left: 1.4rem !important;
  padding-right: 1.4rem !important;
}
.app-pd-x-17 {
  padding-left: 1.7rem !important;
  padding-right: 1.7rem !important;
}
.app-pd-x-15 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}
.app-xl-pd-x-2 {
  /* MEDIAQUERY MIN-WIDTH 1440px .app-xl-pd-x-1 */
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
.app-xl-pd-x-1 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.app-pd-x-05 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.app-pd-x-03 {
  padding-left: 0.3rem !important;
  padding-right: 0.3rem !important;
}
.app-mg-t-03 {
  margin-top: 0.3rem !important;
}
.app-pd-r-1 {
  padding-right: 1rem !important;
}
.app-pd-r-2 {
  padding-right: 2rem !important;
}

.app-pd-r-02 {
  padding-right: 0.2rem !important;
}
.app-pd-l-02 {
  padding-left: 0.2rem !important;
}

.app-pd-l-1 {
  padding-left: 1rem !important;
}
.app-pd-l-05 {
  padding-left: 0.5rem !important;
}
.app-pd-l-02 {
  padding-left: 0.2rem !important;
}
.app-pd-l-2 {
  padding-left: 2rem !important;
}
.app-pd-05 {
  padding: 0.5rem !important;
}
.app-pd-15 {
  padding: 1.5rem !important;
}
.app-pd-20 {
  padding: 2rem !important;
}

`;

export default GlobalStyle;
