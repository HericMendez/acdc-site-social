const languages = {
  portuguese: {
    navbar: {
      about: "Sobre nós",
      services: "Serviços",
      product: "Produto",
      contact: "Contato",
      language: "Idioma: ",

      button: '<img src="img/brasil-32x32.png">&nbsp PORTUGUÊS</a>',
    },

    header: {
      text: "Especialista em atender suas necessidades de TI",
    },

    body: {
      about_us: {
        title: "Por que a ACDCIT?",
        text: "Certamente os consultores da ACDCIT estão preparados para oferecer aos clientes estruturas adaptadas para os desafios da transformação digital. Uma vez que atendem aos requisitos funcionais e não funcionais, eles facilitam tanto a expansão quanto a manutenção do sistema e otimizam os custos. <br /><br />Por consequência, nossos consultores em arquitetura de sistemas oferecem soluções ideais para empresas com problemas de performance e que necessitem de arquitetos com altos skills.",
      },

      skills: {
        title: "Skills",
        text1:
          "Com experiencia de mercado em soluções críticas e de <br>alta disponibilidade temos a solução ideal para sua empresa.",
      },

      services: {
        title: "Serviços",

        s1title: "Arquitetura",
        s1text:
          " Consultores de arquitetura de sistemas estudam as diferenças entre linguagens, sistemas operacionais e ambientes de computação em nuvem. Dessa forma, eles conseguem orientar as companhias sobre a melhor forma de integrar qualquer tecnologia. <br /><br />Nossos arquitetos de sistemas desenham soluções adaptáveis, otimizam o trabalho dos designers e desenvolvedores, para que possam focar no desenvolvimento de aplicações com os melhores padrões para funcionamento e manutenção deste.",

        s1list:
          '<h4 class="box-title mb-20">Vantagens:</h4> <ul class="lista"><li>Redução de riscos ao negócio;</li><li>Alinhamento de expectativas entre os setores da empresa;</li><li>Construção de aplicações flexíveis e de qualidade;</li><li>Integração com diferentes linguagens e sistemas;</li><li>Segurança das aplicações.</li></ul><br />',

        s2title: "Outsourcing",

        s2text:
          "Oferecemos as condições ideais para desafogar as organizações. permitindo o direcionamento do foco central para as ações estratégicas de negócios que realmente importam. <br /> <br /> Nosso serviços de Outsourcing de TI também respondem à necessidade de reduzir custos da captação e manutenção de um time altamente qualificado.",

        s2list:
          '<h4 class="box-title mb-20">Vantagens:</h4><ul class="lista"><li>Gerenciamento preciso da quantidade de trabalho em andamento;</li><li>Disponibilidade de profissionais com capacidades diferenciada;</li><li>Acesso garantido a tecnologias.</li></ul><br />',
      },

      products: {
        title: "Produto",
        text: "Agendador de tarefas dinâmico para orquestrar seus serviços.<br />Adicione inteligência em seu negócio.",
      },
    },

    contact: {
      title: "Contato",
      phone: "Telefone / Whatsapp:",
      email: "E-mail",
    },

    form: {
      name: '<input id="form_name" class="form-control"  type="text" name="name"  placeholder="Nome *" required="required" data-error="Nome é requerido"/>',

      email:
        '<input id="form_email" class="form-control" type="email" name="email" placeholder="Email *" required="required" "data-error="Necessário um e-mail válido"/>',

      subject:
        '<input id="form_subject" class="form-control" type="text" name="subject" placeholder="Assunto" />',

      message:
        ' <textarea id="form_message" name="text" class="form-control" placeholder="Digite sua mensagem aqui..." required="required" data-error="Deixe sua mensagem" ></textarea>',

      button: "Enviar Mensagem",
    },
  },

  english: {
    navbar: {
      about: "About Us",
      services: "Services",
      product: "Product",
      contact: "Contact",
      language: "Language",

      button: '<img src="img/eua-32x32.png">&nbsp ENGLISH</a>',
    },

    header: {
      text: "Specialist in meeting your IT needs",
    },

    body: {
      about_us: {
        title: "Why ACDCIT?",
        text: "ACDCIT consultants are certainly prepared to offer clients adapted structures for the challenges of digital transformation. Since they meet functional and non-functonal requirements, they make both system expansion and maintenance easier, and optimize costs. <br /> <br /> Consequently, our consultants in systems architecture are ideal solutions for companies with performance problems and that need high-skill architects.",
      },

      skills: {
        title: "Skills",
        text1:
          "With market experience in critical and high availability solutions, we have the ideal solution for your company.",
      },
      services: {
        title: "Services",

        s1title: "Architecture",
        s1text:
          "Systems architecture consultants study the differences between languages, operating systems, and cloud computing environments. Therefore, they are able to guide companies on the best way to integrate any technology. <br /><br />Our systems architects design adaptable solutions, optimize the work of designers and developers, so that they can focus on developing applications with the best standards for its operation and maintenance.",

        s1list:
          '<h4 class="box-title mb-20">Benefits:</h4><ul class="lista"><li>Business risk reduction;</li><li>Alignment of expectations between the company\'s sectors;</li><li>Construction of flexible and high-quality applications;</li><li>Integration with different languages ans systems;</li><li>Application security.</li></ul><br />',

        s2title: "Outsourcing",

        s2text:
          "We offer the ideal conditions to unburden organizations, allowing the directioning of the central focus towards the strategic business actions that really matter.<br /><br /> Our IT Outsourcing services also respond to the need to reduce funding and maintenance costs of a highly qualified team.",

        s2list:
          '<h4 class="box-title mb-20">Benefits:</h4><ul class="lista"><li>Precise management of the amount of work in progress;</li><li>Availability of professionals with differentiated skills;</li><li>Guaranteed access to technologies.</li></ul><br />',
      },
      products: {
        title: "Product",
        text: "Dynamic task scheduler to orchestrate your services.<br />Make your business smarter!",
      },
    },

    contact: {
      title: "Get in Touch",
      phone: "Phone/Whatsapp",
      email: "E-mail",
    },

    form: {
      name: '<input id="form_name" class="form-control"  type="text" name="name"  placeholder="Name *" required="required" data-error="Name is required"/>',

      email:
        '<input id="form_email" class="form-control" type="email" name="email" placeholder="Email *" required="required" "data-error="A valid e-mail is required"/>',

      subject:
        '<input id="form_subject" class="form-control" type="text" name="subject" placeholder="Subject" />',

      message:
        ' <textarea id="form_message" name="text" class="form-control" placeholder="Type your message here..." required="required" data-error="Leave your message" ></textarea>',

      button: "Send Message",
    },
  },
};

/*
const lang = document.getElementById("lang-select").value;

console.log(lang)
*/
const changeLanguage = (e) => {
  switch (e) {
    case "pt-br":
      //navbar
      document.getElementById("nav-item-about").innerHTML =
        languages.portuguese.navbar.about;
      document.getElementById("nav-item-services").innerHTML =
        languages.portuguese.navbar.services;

      //document.getElementById("nav-item-products").innerHTML =
      //languages.portuguese.navbar.product;

      document.getElementById("nav-item-contact").innerHTML =
        languages.portuguese.navbar.contact;
      document.getElementById("langBtn").innerHTML =
        languages.portuguese.navbar.button;

      //header
      document.getElementById("header-main-text").innerHTML =
        languages.portuguese.header.text;

      //body

      //body section: about us
      document.getElementById("body-title-about-us").innerHTML =
        languages.portuguese.body.about_us.title;
      document.getElementById("body-text-about-us").innerHTML =
        languages.portuguese.body.about_us.text;

      //body section: skills
      //document.getElementById("body-skills-text").innerHTML =
      //languages.portuguese.body.skills.text;

      //body section: services
      document.getElementById("body-title-services").innerHTML =
        languages.portuguese.body.services.title;

      document.getElementById("body-title-services-architecture").innerHTML =
        languages.portuguese.body.services.s1title;
      document.getElementById("body-text-services-architecture").innerHTML =
        languages.portuguese.body.services.s1text;
      document.getElementById("body-list-services-architecture").innerHTML =
        languages.portuguese.body.services.s1list;

      document.getElementById("body-title-services-outsourcing").innerHTML =
        languages.portuguese.body.services.s2title;
      document.getElementById("body-text-services-outsourcing").innerHTML =
        languages.portuguese.body.services.s2text;
      document.getElementById("body-list-services-outsourcing").innerHTML =
        languages.portuguese.body.services.s2list;
      /*
        document.getElementById("body-title-product").innerHTML =
        languages.portuguese.body.products.title;
      document.getElementById("body-text-product").innerHTML =
        languages.portuguese.body.products.text;
*/
      //contact section
      document.getElementById("contact-title").innerHTML =
        languages.portuguese.contact.title;
      document.getElementById("contact-phone").innerHTML =
        languages.portuguese.contact.phone;
      document.getElementById("contact-email").innerHTML =
        languages.portuguese.contact.email;

      //form control section
      document.getElementById("form-control-name").innerHTML =
        languages.portuguese.form.name;
      document.getElementById("form-control-email").innerHTML =
        languages.portuguese.form.email;
      document.getElementById("form-control-subject").innerHTML =
        languages.portuguese.form.subject;
      document.getElementById("form-control-message").innerHTML =
        languages.portuguese.form.message;
      document.getElementById("form-control-button").innerHTML =
        languages.portuguese.form.button;

      break;

    case "eng":
      //navbar
      document.getElementById("nav-item-about").innerHTML =
        languages.english.navbar.about;
      document.getElementById("nav-item-services").innerHTML =
        languages.english.navbar.services;
      //document.getElementById("nav-item-products").innerHTML =
      //languages.english.navbar.product;
      document.getElementById("nav-item-contact").innerHTML =
        languages.english.navbar.contact;
      document.getElementById("langBtn").innerHTML =
        languages.english.navbar.button;

      //header
      document.getElementById("header-main-text").innerHTML =
        languages.english.header.text;

      //body

      //body section: about us
      document.getElementById("body-title-about-us").innerHTML =
        languages.english.body.about_us.title;
      document.getElementById("body-text-about-us").innerHTML =
        languages.english.body.about_us.text;

      //body section: skills
      // document.getElementById("body-skills-text").innerHTML =
      // languages.english.body.skills.text;

      //body section: services
      document.getElementById("body-title-services").innerHTML =
        languages.english.body.services.title;

      document.getElementById("body-title-services-architecture").innerHTML =
        languages.english.body.services.s1title;
      document.getElementById("body-text-services-architecture").innerHTML =
        languages.english.body.services.s1text;
      document.getElementById("body-list-services-architecture").innerHTML =
        languages.english.body.services.s1list;

      document.getElementById("body-title-services-outsourcing").innerHTML =
        languages.english.body.services.s2title;
      document.getElementById("body-text-services-outsourcing").innerHTML =
        languages.english.body.services.s2text;
      document.getElementById("body-list-services-outsourcing").innerHTML =
        languages.english.body.services.s2list;
      /*
      //body section: product
      document.getElementById("body-title-product").innerHTML =
        languages.english.body.products.title;
      document.getElementById("body-text-product").innerHTML =
        languages.english.body.products.text;
*/
      //contact section
      document.getElementById("contact-title").innerHTML =
        languages.english.contact.title;
      document.getElementById("contact-phone").innerHTML =
        languages.english.contact.phone;
      document.getElementById("contact-email").innerHTML =
        languages.english.contact.email;

      //form control section
      document.getElementById("form-control-name").innerHTML =
        languages.english.form.name;
      document.getElementById("form-control-email").innerHTML =
        languages.english.form.email;
      document.getElementById("form-control-subject").innerHTML =
        languages.english.form.subject;
      document.getElementById("form-control-message").innerHTML =
        languages.english.form.message;
      document.getElementById("form-control-button").innerHTML =
        languages.english.form.button;

      break;
  }
};

//changeLanguage(lang);
document
  .getElementById("pt-br")
  .addEventListener("click", () => changeLanguage("pt-br"));
document
  .getElementById("eng")
  .addEventListener("click", () => changeLanguage("eng"));
