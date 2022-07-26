const textdata = {
  navbar: {
    home: {
      en: "Home",
      pt: "Início",
    },

    about: {
      en: "About Us",
      pt: "Sobre Nós",
    },

    services: {
      en: "Skills",
      pt: "Serviços",
    },

    contact: {
      en: "Contact",
      pt: "Contato",
    },
  },

  home: {
    banner: {
      en: "Our expertise is to exceed your expectations",
      pt: "Especialista em atender suas necessidades de TI",
    },
  },

  about: {
    title: {
      en: "Why ACDCIT?",
      pt: "Por que a ACDCIT?",
    },

    text_p1: {
      en: "ACDCIT consultants are certainly prepared to offer clients adapted structures for the challenges of digital transformation. Since they meet functional and non-functonal requirements, they make both system expansion and maintenance easier, and optimize costs.",

      pt: "Certamente os consultores da ACDCIT estão preparados para oferecer aos clientes estruturas adaptadas para os desafios da transformação digital. Uma vez que atendem aos requisitos funcionais e não funcionais, eles facilitam tanto a expansão quanto a manutenção do sistema e otimizam os custos.",
    },

    text_p2: {
      en: "Consequently, our consultants in systems architecture are ideal solutions for companies with performance problems and that need high-skill architects.",

      pt: "Por consequência, nossos consultores em arquitetura de sistemas oferecem soluções ideais para empresas com problemas de performance e que necessitem de arquitetos com altos skills.viços",
    },
  },

  services: {
    title: {
      en: "Skills",
      pt: "Serviços",
    },

    benefits: {
      en: "Benefits",
      pt: "Vantagens",
    },

    s1title: {
      en: "Architecture",
      pt: "Arquitetura",
    },

    s1text_p1: {
      en: "Systems architecture consultants study the differences between languages, operating systems, and cloud computing environments. Therefore, they are able to guide companies on the best way to integrate any technology.",

      pt: "Consultores de arquitetura de sistemas estudam as diferenças entre linguagens, sistemas operacionais e ambientes de computação em nuvem. Dessa forma, eles conseguem orientar as companhias sobre a melhor forma de integrar qualquer tecnologia.",
    },

    s1text_p2: {
      en: "Our systems architects design adaptable solutions, optimize the work of designers and developers, so that they can focus on developing applications with the best standards for its operation and maintenance.",

      pt: "Nossos arquitetos de sistemas desenham soluções adaptáveis, otimizam o trabalho dos designers e desenvolvedores, para que possam focar no desenvolvimento de aplicações com os melhores padrões para funcionamento e manutenção deste.",
    },

    s1list_item1: {
      en: "Business risk reduction;",
      pt: "Redução de riscos ao negócio;",
    },

    s1list_item2: {
      en: "Alignment of expectations between the company's sectors;",
      pt: "Alinhamento de expectativas entre os setores da empresa;",
    },

    s1list_item3: {
      en: "Construction of flexible and high-quality applications;",
      pt: "Construção de aplicações flexíveis e de qualidade;",
    },

    s1list_item4: {
      en: "Integration with different languages ans systems;",
      pt: "Integração com diferentes linguagens e sistemas;",
    },

    s1list_item5: {
      en: "Application security.",
      pt: "Segurança das aplicações.",
    },

    s2title: {
      en: "Outsourcing",
      pt: "Outsourcing",
    },

    s2text_p1: {
      en: "We offer the ideal conditions to unburden organizations, allowing the directioning of the central focus towards the strategic business actions that really matter.",
      pt: "Oferecemos as condições ideais para desafogar as organizações. permitindo o direcionamento do foco central para as ações estratégicas de negócios que realmente importam. ",
    },

    s2text_p2: {
      en: " Our IT Outsourcing services also respond to the need to reduce funding and maintenance costs of a highly qualified team.",
      pt: "Nosso serviços de Outsourcing de TI também respondem à necessidade de reduzir custos da captação e manutenção de um time altamente qualificado.",
    },

    s2list_item1: {
      en: "Precise management of the amount of work in progress;",
      pt: "Gerenciamento preciso da quantidade de trabalho em andamento;",
    },

    s2list_item2: {
      en: "Availability of professionals with differentiated skills;",
      pt: "Disponibilidade de profissionais com capacidades diferenciada;",
    },

    s2list_item3: {
      en: "Guaranteed access to technologies.",
      pt: "Acesso garantido a tecnologias.",
    },
  },

  contact:{
    en:"Get in Touch",
    pt:"Contato"
  }
};

function translate(lang) {
  $("#nav-home").text(textdata["navbar"]["home"][lang]);
  $("#nav-about").text(textdata["navbar"]["about"][lang]);
  $("#nav-services").text(textdata["navbar"]["services"][lang]);
  $("#nav-contact").text(textdata["navbar"]["contact"][lang]);

  $("#banner-text").text(textdata["home"]["banner"][lang]);

  $("#title-about-us").text(textdata["about"]["title"][lang]);
  $("#text-p1-about-us").text(textdata["about"]["text_p1"][lang]);
  $("#text-p2-about-us").text(textdata["about"]["text_p2"][lang]);

  $("#title-services").text(textdata["services"]["title"][lang]);
  $("#s1title").text(textdata["services"]["s1title"][lang]);
  $("#s1text-p1").text(textdata["services"]["s1text_p1"][lang]);
  $("#s1text-p2").text(textdata["services"]["s1text_p2"][lang]);
  $("#benefits1").text(textdata["services"]["benefits"][lang]);

  $("#s1list-item1").text(textdata["services"]["s1list_item1"][lang]);
  $("#s1list-item2").text(textdata["services"]["s1list_item2"][lang]);
  $("#s1list-item3").text(textdata["services"]["s1list_item3"][lang]);
  $("#s1list-item4").text(textdata["services"]["s1list_item4"][lang]);
  $("#s1list-item5").text(textdata["services"]["s1list_item5"][lang]);

  $("#s2title").text(textdata["services"]["s2title"][lang]);
  $("#s2text-p1").text(textdata["services"]["s2text_p1"][lang]);
  $("#s2text-p2").text(textdata["services"]["s2text_p2"][lang]);
  $("#benefits2").text(textdata["services"]["benefits"][lang]);

  $("#s2list-item1").text(textdata["services"]["s2list_item1"][lang]);
  $("#s2list-item2").text(textdata["services"]["s2list_item2"][lang]);
  $("#s2list-item3").text(textdata["services"]["s2list_item3"][lang]);

  $("#contact-title").text(textdata["contact"][lang]);
}

let language = "en";

translate(language);



checkbox = document.getElementById('langToggler');

checkbox.addEventListener('change', e => {
  console.log(e.target.checked)

    if(e.target.checked){
        console.log(e.target.checked)
        translate('en');
    }else{
      translate("pt");
    }

});


let checkboxMobile = document.getElementById('langToggler-mobile');

checkboxMobile.addEventListener('change', e => {
  console.log(e.target.checked)

    if(e.target.checked){
        console.log(e.target.checked)
        translate('en');
    }else{
      translate("pt");
    }

});
