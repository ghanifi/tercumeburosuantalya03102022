import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from './styles/bootstrap.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} /> 
          <Jobs when={data.isAwsmJobOpenings} />
          <Page when={data.isPage} />
                  <Post when={data.isPostType} />
                  <Page when={data.isDiller} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer/>
          </FooterContainer>

        
          <div className="mobilbar">
              <ul id="altbar">
                  <li className="phone">
                      <a href="tel:+902426060647" id="simdiara_amp">
                          <i className="fa fa-phone" /> ŞİMDİ ARA
      </a>
                  </li>
                  <li className="whatsapp">
                      <a
                          href="https://wa.me/905321514767/?text=TERCÜME%20BÜROSU%20ANTALYA"
                          id="whatsapp_amp"
                      >
                          <i className="fa fa-whatsapp" /> WHATSAPP
      </a>
                  </li>
              </ul>
          </div>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #365c6e;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }
  body {
    margin: 0;
    color:var(--bodycolor);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
  }
  html {
    height: -webkit-fill-available;
  },
  a,
  a:visited {  
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color:var(--black);
  }
  p {
    line-height:24px;
    font-size:18px;
  }
  // #root {
  //   display:flex;
  //   flex-direction: column;
  //   height: auto;
  // }
  .container {
    max-width: 1200px;
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section{
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
div.mobilbar {
    z-index: 99999999999;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    height: 60px;
    width: 100%;
    -webkit-box-shadow: 0 1px 15px rgb(0 0 0 / 35%);
    -moz-box-shadow: 0 1px 15px rgba(0,0,0,.35);
    -ms-box-shadow: 0 1px 15px rgba(0,0,0,.35);
    -o-box-shadow: 0 1px 15px rgba(0,0,0,.35);
    box-shadow: 0 1px 15px rgb(0 0 0 / 35%);
    border-collapse: separate;
}
ul#altbar {
    border: 0;
    margin: 0;
    display: inline-block;
    width: 100%;
    padding-left: 0;
}
ul#altbar li.phone {
    background-color: tomato;
}
ul#altbar li.whatsapp {
    background-color: #25d366;
}

ul#altbar li {
    float: left;
    width: 50%;
    display: table;
    color: #fff;
    /* padding: 10px; */
    margin: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    list-style-type: none;
    height: 60px;
}
ul#altbar li a {
    display: block;
    color: #fff;
    font-size: 14px;
    padding: 10px;
    padding-top: 15px;
    letter-spacing: 1px;
    font-weight: 800;
}

i.fa-phone {
    color: #fff;
    background: url(https://cdn.tercumeburosuantalya.com.tr/2022/10/phone-call-1.png);
    float: left;
    width: 32px;
    height: 32px;

    margin-left: 5px;
  
}
i.fa-whatsapp {
    color: #fff;
    background: url(https://cdn.tercumeburosuantalya.com.tr/2022/10/whatsapp-1.png);
    float: left;
    width: 32px;
    height: 32px;

    margin-left: 5px;
  
}





`;

const HeadContainer = styled.div`
  display: flex;
  width:100%;
  max-width:1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2.75rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom:6.25rem;
`;
const FooterContainer = styled.div`
  width:100%;
  background:var(--brand);
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
