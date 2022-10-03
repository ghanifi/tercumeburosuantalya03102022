import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
          <Container>
              <div className="row">
                  <div className="col-12 col-lg-6 footer-widget widget-one">
                      <h6 className="widget-title">Tercüme Bürosu Antalya Hakkında</h6>
                      <p>Tercüme bürosu Antalya, ödüllü 200 dili aşkın çalışan profesyonel çevirmenler ve tercümanlardan oluşan küresel bir ağ ile uluslararası çeviri hizmetleri şirketidir.
</p> <p>Tıbbi, Medikal, Mühendislik, Finans, Sigortacılık, Gayrimenkul, Hukuk gibi özel alanlarda mesleki bilgi sahibi tercümanlar tarafından yapılan çeviriler ile işimize kalite kazandırıyoruz. İngilizce, Almanca, Rusça, Fransızca, İtalyanca, İbranice, Arapça, Latince, dilleri basta olmak üzere toplamda 54 farklı yabancı dilde tercüme hizmeti gerçekleştirebilmekteyiz.</p>
                  </div>
                  <div className="col-12 col-md-4 col-lg-2 footer-widget widget-two">
                      <h6 className="widget-title">LONDONOS</h6>
                      <ul className="widget-list">
                          <li><Link className="widget-list-link" link="/hakkimizda/">Hakkımızda</Link></li>
                          <li><Link className="widget-list-link" link="/hizmetlerimiz/">Tercüme Hizmetleri</Link></li>
                          <li><Link className="widget-list-link" link="/jobs/">Kariyer</Link></li>
                          <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
                          <li><Link className="widget-list-link" link="/iletisim/">İletişim</Link></li>
                      </ul>
                  </div>
                  <div className="col-12 col-md-4 col-lg-2 footer-widget widget-three">
                      <h6 className="widget-title">Tercüme Antalya</h6>
                      <ul className="widget-list">
                          <li><Link className="widget-list-link" link="/diller/">Diller</Link></li>
                          <li><Link className="widget-list-link" link="/hizmetlerimiz/">Çeviri Hizmetleri</Link></li>
                          <li><Link className="widget-list-link" link="/jobs/">İş İlanları</Link></li>
                          <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
                          <li><Link className="widget-list-link" link="/iletisim/">İletişim</Link></li>
                      </ul>
                  </div>
                  <div className="col-12 col-md-4 col-lg-2 footer-widget widget-four">
                      <h6 className="widget-title">Sosyal Medya</h6>
                      <ul className="widget-list">
                          <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com/GGGTercume/">Facebook</Link></li>
                          <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com/gggtercume">Twitter</Link></li>
                          <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/gggtercume/">Instagram</Link></li>
                          <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://translation.londonos.uk">London Branch</Link></li>
                      </ul>
                  </div>
              </div>
              <div id="wab_cont" class="wab-cont ui-draggable wab-bottom-rectangle ui-draggable-handle">
     <a id="whatsAppButton" href="https://wa.me/905321514767/?text=Merhabalar%2C%0D%0ATercume%20edilecek%20dosyalarinizi%20bize%20whatsapp%20ile%20gondererek%20hemen%20fiyat%20ve%20sure%20hakkinda%20bilgi%20alabilirsiniz." target="_blank">
                      <span class="">Hemen Whatsapp ile fiyat teklifi alin.</span></a>
              </div>
          </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
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
