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
                  <Dil when={data.isDil} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer/>
          </FooterContainer>      

          <div id="wab_cont" class="wab-cont ui-draggable wab-bottom-rectangle ui-draggable-handle">
              <a id="whatsAppButton" href="https://wa.me/905321514767/?text=Merhabalar%2C%0D%0ATercume%20edilecek%20dosyalarinizi%20bize%20whatsapp%20ile%20gondererek%20hemen%20fiyat%20ve%20sure%20hakkinda%20bilgi%20alabilirsiniz." target="_blank">
                  <span class="">Hemen Whatsapp ile fiyat teklifi alin.</span></a>
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
.wab-bottom-rectangle.wab-cont {
    position: fixed;
    bottom: 0;
    z-index: 99999;
    width: 100%;
    -webkit-transition: All .5s ease;
    -moz-transition: All .5s ease;
    -o-transition: All .5s ease;
    -ms-transition: All .5s ease;
    transition: All .5s ease;
}
.wab-bottom-rectangle #whatsAppButton {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    direction: ltr;
    z-index: 9999;
    cursor: pointer;
    color: #fff;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    margin: 0 auto 0 auto;
    background: #20b038;
    -webkit-transition: All .5s ease;
    -moz-transition: All .5s ease;
    -o-transition: All .5s ease;
    -ms-transition: All .5s ease;
    transition: All .5s ease;
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
