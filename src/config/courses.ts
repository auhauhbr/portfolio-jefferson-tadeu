export interface Course {
  title: string;
  provider: "Fundação Bradesco" | "Udemy";
  instructor?: string;
  duration?: string;
  structure?: string;
  completion?: string;
  grade?: string;
  summary: string;
  topics: string[];
  href?: string;
}

export interface CourseGroup {
  title: string;
  courses: Course[];
}

export const portoDigitalRecognition = {
  title: "Certificado de Membro Destaque — RISE UP 2026.1",
  author: "Presidente do Porto Digital",
  signer: "Pierre Lucena",
  certificateText:
    "Conferimos a JEFFERSON TADEU DOS SANTOS este certificado em reconhecimento ao seu desempenho destacado durante o RISE UP da Residência Tecnológica, demonstrando comprometimento, evolução e participação exemplar no semestre 2026.1.",
  context:
    "O reconhecimento foi concedido durante o ciclo 2026.1 da Residência Tecnológica. No Coday, apresentei com meu squad o Trilum Conecta, uma plataforma voltada à transição de carreira em tecnologia, conectando diagnóstico, trilhas de aprendizagem, projetos, vagas e prontidão profissional.",
  project:
    "No Trilum Conecta, atuei especialmente no motor de regras e pesos responsável por transformar respostas do diagnóstico em recomendações explicáveis de trilhas, cursos e vagas. O projeto também inclui mentor contextual, radar de prontidão, currículo exportável, Raio-X de vagas e dossiê de compatibilidade.",
  links: [
    {
      label: "Reportagem do Jornal Digital sobre o Coday",
      href: "https://jornaldigital.recife.br/2026/06/18/coday-reune-estudantes-empresas-e-especialistas-em-um-dia-de-conexoes-entre-educacao-tecnologia-e-mercado/",
    },
    {
      label: "Publicação do Porto Digital sobre o Coday",
      href: "https://www.linkedin.com/posts/portodigital_portodigital-educaaexaeto-activity-7473385211615973378-yJqo",
    },
    {
      label: "Meu relato e agradecimento no LinkedIn",
      href: "https://www.linkedin.com/posts/jefferson-tadeu-dos-santos-0ab133380_coday2026-portodigital-residenciatecnologica-ugcPost-7472854239489331200-GSap/",
    },
    {
      label: "Conhecer o projeto Trilum Conecta",
      href: "https://auhauhbr.github.io/Trilum-Conecta/#/coday",
    },
  ],
} as const;

const udemyLinks: Record<string, string> = {
  "Desenvolvimento Web Compacto e Completo":
    "https://www.udemy.com/course/desenvolvimento-web-compacto-e-completo/",
  "Curso Web Frontend Fundamentos HTML CSS JS + de 10 Projetos":
    "https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/",
  "Web Frontend Completo: HTML, CSS, JS, TS, React e Next 2026":
    "https://www.udemy.com/course/web-frontend-completo-html-css-javascript-typescript-react-next/",
  "Desenvolvimento Web Completo — 20 cursos + 20 projetos":
    "https://www.udemy.com/course/web-completo/",
  "Curso de Python 3 do básico ao avançado — com projetos reais":
    "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
  "Java COMPLETO Programação Orientada a Objetos + Projetos":
    "https://www.udemy.com/course/java-curso-completo/",
  "Java Moderno e Fácil de Seguir: Spring Boot, IA e Projetos":
    "https://www.udemy.com/course/curso-de-java-para-iniciantes-com-projetos/",
  "O curso completo de Banco de Dados e SQL, sem mistérios!":
    "https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/",
  "Introdução a Bancos de Dados e Linguagem SQL":
    "https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/",
  "Aprendendo SQL do zero":
    "https://www.udemy.com/course/aprendendosqldozero/",
  "O Mínimo que você precisa saber sobre Banco de Dados e SQL":
    "https://www.udemy.com/course/o-minimo-que-voce-precisa-saber-sobre-banco-de-dados-e-sql/",
  "Introdução a banco de dados com MySQL & PHPMyAdmin":
    "https://www.udemy.com/course/mysql_phpmyadmin/",
  "Bancos de Dados SQL e NoSQL do básico ao avançado":
    "https://www.udemy.com/course/curso-de-banco-de-dados-do-basico-ao-avancado/",
  "Godot 4.6+: Crie um RPG completo do zero com um projeto real":
    "https://www.udemy.com/course/aprenda-desenvolvimento-de-jogos/",
  "Crie Jogos 2D na Unity com C#: Do Zero ao Avançado":
    "https://www.udemy.com/course/desenvolvimento-de-jogos-2d-para-android-com-unity-5/",
};

const udemyCourse = (
  course: Omit<Course, "provider" | "href">
): Course => ({
  ...course,
  provider: "Udemy",
  href: udemyLinks[course.title],
});

export const bradescoCourses: Course[] = [
  {
    title: "Projetos de Sistemas de TI",
    provider: "Fundação Bradesco",
    grade: "100%",
    summary:
      "Formação sobre processos de desenvolvimento de sistemas, engenharia de software, levantamento de requisitos e planejamento de projetos de tecnologia.",
    topics: [
      "Processos de desenvolvimento de sistemas de informação",
      "Engenharia de software",
      "Requisitos, métodos e estudos de caso",
      "Planejamento e desenho de soluções antes da implementação",
    ],
  },
  {
    title: "Trilha Banco de Dados",
    provider: "Fundação Bradesco",
    duration: "38 horas",
    grade: "97%",
    summary:
      "Trilha formada pelos cursos de modelagem, implementação e administração de bancos de dados, cobrindo do projeto relacional à manutenção do ambiente.",
    topics: [
      "Modelagem conceitual, lógica e física",
      "SQL e implementação de bancos relacionais",
      "Administração, manutenção e arquitetura de SGBDs",
      "Integridade, normalização e cardinalidade",
    ],
  },
  {
    title: "Administrando Banco de Dados",
    provider: "Fundação Bradesco",
    duration: "15 horas",
    grade: "100%",
    summary:
      "Introdução às responsabilidades de administração, arquitetura de SGBDs e procedimentos de manutenção de bancos de dados.",
    topics: [
      "Papel do DBA",
      "Arquitetura de SGBDs",
      "Gerenciamento e manutenção",
      "Procedimentos administrativos",
    ],
  },
  {
    title: "Implementando Banco de Dados",
    provider: "Fundação Bradesco",
    duration: "15 horas",
    grade: "100%",
    summary:
      "Curso voltado à configuração e implementação de bancos relacionais, com modelagem e práticas usando SQL Server.",
    topics: [
      "Fundamentos do SQL Server",
      "Configuração de banco de dados",
      "Projeto conceitual, lógico e físico",
      "Implementação de modelos relacionais",
    ],
  },
  {
    title: "Modelagem de Dados",
    provider: "Fundação Bradesco",
    duration: "8 horas",
    grade: "90%",
    summary:
      "Fundamentos para representar domínios reais em modelos de dados consistentes, normalizados e com regras de integridade.",
    topics: [
      "Entidades, atributos e relacionamentos",
      "Cardinalidade e integridade",
      "Teoria relacional e normalização",
      "Minimundo e níveis de abstração",
    ],
  },
  {
    title: "Linguagem de Programação Python — Básico",
    provider: "Fundação Bradesco",
    grade: "90%",
    summary:
      "Introdução à lógica de programação e à linguagem Python, com construção de programas de console e uso das estruturas fundamentais.",
    topics: [
      "Lógica de programação",
      "Variáveis e tipos de dados",
      "Estruturas condicionais e de repetição",
      "Funções e recursos básicos da linguagem",
    ],
  },
];

export const udemyCourseGroups: CourseGroup[] = [
  {
    title: "Desenvolvimento Web e Front-end",
    courses: [
      udemyCourse({
        title: "Desenvolvimento Web Compacto e Completo",
        instructor: "João Ribeiro",
        duration: "94h35min",
        structure: "24 seções · 779 aulas",
        summary:
          "Formação ampla em desenvolvimento web, da estrutura visual ao backend, banco de dados, APIs e publicação.",
        topics: [
          "HTML5, CSS3 e JavaScript",
          "Bootstrap 5",
          "PHP 8 e orientação a objetos",
          "MySQL, SQL, APIs REST e AJAX",
          "Git, GitHub, MVC, Laravel e CodeIgniter",
        ],
      }),
      udemyCourse({
        title: "Curso Web Frontend Fundamentos HTML CSS JS + de 10 Projetos",
        instructor: "Daniel Tapias Morales e Serliv Cursos",
        duration: "132h23min",
        structure: "60 seções · 780 aulas",
        summary:
          "Curso aprofundado de fundamentos do front-end, responsividade, layouts modernos e prática com diversos projetos.",
        topics: [
          "HTML e CSS do básico ao avançado",
          "Box model, seletores e responsividade",
          "Flexbox e CSS Grid",
          "Lógica, JavaScript e DOM",
          "Exercícios e projetos práticos",
        ],
      }),
      udemyCourse({
        title: "Web Frontend Completo: HTML, CSS, JS, TS, React e Next 2026",
        instructor: "Jamilton Damasceno e Jorge Sant’Ana",
        duration: "75h35min",
        structure: "35 seções · 411 aulas",
        summary:
          "Trilha moderna de front-end com fundamentos, TypeScript, React, Next, Tailwind e fluxo de criação de interfaces.",
        topics: [
          "HTML, CSS e JavaScript",
          "TypeScript",
          "React e Next.js",
          "Tailwind CSS e Figma",
          "Dez projetos práticos",
        ],
      }),
      udemyCourse({
        title: "Desenvolvimento Web Completo — 20 cursos + 20 projetos",
        instructor: "Jorge Sant’Ana e Jamilton Damasceno",
        duration: "126h19min",
        structure: "36 seções · 661 aulas",
        summary:
          "Formação full stack que reúne tecnologias de interface, servidor, banco de dados, arquitetura e aplicações híbridas.",
        topics: [
          "HTML, CSS, Bootstrap e JavaScript",
          "PHP, MySQL e PDO",
          "AJAX e jQuery",
          "MVC, Slim, WordPress e Sass",
          "Ionic e projetos completos",
        ],
      }),
    ],
  },
  {
    title: "Python, Java e Banco de Dados",
    courses: [
      udemyCourse({
        title: "Curso de Python 3 do básico ao avançado — com projetos reais",
        instructor: "Luiz Otávio Miranda e Tales Calogi Malaquias",
        duration: "141h16min",
        structure: "23 seções · 751 aulas",
        summary:
          "Formação extensa em Python, indo da lógica aos recursos avançados, aplicações web, desktop, testes e bancos de dados.",
        topics: [
          "Python básico e avançado",
          "POO, programação funcional e módulos",
          "Django, Selenium e PySide6",
          "Testes, TDD e design patterns",
          "Bancos de dados, SQL e expressões regulares",
        ],
      }),
      udemyCourse({
        title: "Java COMPLETO Programação Orientada a Objetos + Projetos",
        instructor: "Nelio Alves",
        duration: "54h09min",
        structure: "26 seções · 408 aulas",
        summary:
          "Formação em Java e orientação a objetos com aplicações desktop, web e acesso a bancos relacionais e NoSQL.",
        topics: [
          "Java e orientação a objetos",
          "UML e JDBC",
          "JavaFX",
          "Spring Boot, JPA e Hibernate",
          "MySQL e MongoDB",
        ],
      }),
      udemyCourse({
        title: "Java Moderno e Fácil de Seguir: Spring Boot, IA e Projetos",
        instructor: "Arnaldo Sousa",
        duration: "42h06min",
        structure: "81 seções · 612 aulas",
        summary:
          "Curso de Java moderno com fundamentos, interfaces, APIs, persistência, programação funcional e introdução à IA.",
        topics: [
          "Java, POO e JavaFX",
          "Spring Boot e APIs REST",
          "Hibernate e JPA",
          "Programação funcional",
          "IA e machine learning com Weka",
        ],
      }),
      udemyCourse({
        title: "O curso completo de Banco de Dados e SQL, sem mistérios!",
        instructor: "Felipe Mafra",
        duration: "58h18min",
        structure: "35 seções · 313 aulas",
        summary:
          "Formação completa em modelagem, SQL e administração, com prática em diferentes sistemas gerenciadores.",
        topics: [
          "Modelagem e normalização",
          "MySQL, Oracle e SQL Server",
          "T-SQL e PL/SQL",
          "Procedures, functions, views e triggers",
          "Restrições, backup e administração",
        ],
      }),
      udemyCourse({
        title: "Introdução a Bancos de Dados e Linguagem SQL",
        instructor: "Fernando Amaral",
        duration: "1h58min",
        structure: "6 seções · 15 aulas",
        summary:
          "Introdução objetiva aos conceitos de bancos relacionais e aos principais comandos da linguagem SQL.",
        topics: ["Bancos relacionais", "Consultas SQL", "Filtros e ordenação", "Operações fundamentais"],
      }),
      udemyCourse({
        title: "Aprendendo SQL do zero",
        instructor: "Gustavo Alexandre Sampaio Valle",
        duration: "1h58min",
        structure: "4 seções · 15 aulas",
        summary:
          "Curso introdutório de SQL usando SQLite, com criação, consulta e combinação de dados.",
        topics: ["CRUD", "SELECT", "JOIN e subconsultas", "ORDER BY, GROUP BY e HAVING"],
      }),
      udemyCourse({
        title: "O Mínimo que você precisa saber sobre Banco de Dados e SQL",
        instructor: "Tiago Ribeiro",
        duration: "50min",
        structure: "5 seções · 24 aulas",
        summary:
          "Visão inicial de modelagem relacional e SQL para quem está começando a trabalhar com bancos de dados.",
        topics: ["Modelo relacional", "Fundamentos de SQL", "SQLite", "Estrutura de tabelas"],
      }),
      udemyCourse({
        title: "Introdução a banco de dados com MySQL & PHPMyAdmin",
        instructor: "Diego Mariano, Ph.D.",
        duration: "46min",
        structure: "1 seção · 28 aulas",
        summary:
          "Introdução prática à criação e manipulação de bancos MySQL por meio do PHPMyAdmin.",
        topics: ["MySQL", "PHPMyAdmin", "Tabelas e registros", "Consultas básicas"],
      }),
      udemyCourse({
        title: "Bancos de Dados SQL e NoSQL do básico ao avançado",
        instructor: "Geek University",
        duration: "51h50min",
        structure: "18 seções · 184 aulas",
        summary:
          "Panorama amplo de bancos SQL e NoSQL, com modelagem, consultas e integração por diferentes linguagens.",
        topics: [
          "MySQL, PostgreSQL e SQLite",
          "MongoDB, CouchDB, Redis e Firebase",
          "Modelagem e normalização",
          "CRUD com Python e Java",
        ],
      }),
    ],
  },
  {
    title: "Jogos e Projetos Complementares",
    courses: [
      udemyCourse({
        title: "Godot 4.6+: Crie um RPG completo do zero com um projeto real",
        instructor: "Davi Bandeira",
        duration: "36h38min",
        structure: "17 seções · 272 aulas",
        summary:
          "Desenvolvimento de um RPG completo em Godot, aplicando organização de cenas, scripts e sistemas de jogo.",
        topics: ["Godot 4.6+", "GDScript", "Sistemas de RPG", "Projeto completo"],
      }),
      udemyCourse({
        title: "Crie Jogos 2D na Unity com C#: Do Zero ao Avançado",
        instructor: "Wiliam Nascimento",
        duration: "95h48min",
        structure: "22 seções · 586 aulas",
        summary:
          "Formação extensa para desenvolvimento de jogos 2D com Unity e C#, do primeiro projeto a sistemas avançados.",
        topics: ["Unity", "C#", "Jogos 2D", "Mecânicas e projetos avançados"],
      }),
    ],
  },
];
