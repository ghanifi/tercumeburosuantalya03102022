const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://www.tercumeburosuantalya.com.tr",
      "title": "Antalya Tercüme Bürosu - Yeminli ve Noter Onaylı Tercüme - LONDONOS",
      "description": "Antalya Tercüme Bürosu Uzman Tercümanları İle Size En Kaliyeti Tercüme Hizmetini Sunuyor! Antalya Tercüme Büroları Arasında En Uygun Fiyata Tercüme Hizmeti Almak İçin Arayın! 7/24"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Hakkımızda", "/hakkimizda/"],
            ["Hizmetlerimiz", "/hizmetlerimiz/"],
                ["Diller", "/category/tercume/"],            
            ["Kariyer", "/jobs/"],
                ["Blog", "/blog/"],
                ["İletişim", "/iletisim/"],
               
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "all"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://www.tercumeburosuantalya.com.tr/wp-json/",
          url: "https://www.tercumeburosuantalya.com.tr",
          "homepage": "/home",
              "postsPage": "/blog",
          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    // "frontity-contact-form-7",
      "@awsmin/frontity-wp-job-openings",
      "@aamodtgroup/frontity-contact-form-7",
   "@frontity/yoast",
  ]
};

export default settings;
