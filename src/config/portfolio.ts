export type ProjectCategory =
  | "Backend"
  | "Full Stack"
  | "Automação / Dados"
  | "Produto Web"
  | "Desktop / Ferramentas"
  | "Estudos Técnicos";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectReadme {
  source: string;
  imageBase?: string;
  linkBase?: string;
  imageMap?: Partial<Record<string, string>>;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  contribution: string;
  images?: ProjectImage[];
  tech: string[];
  features: string[];
  architecture: string[];
  github: string;
  live?: string;
  links?: ProjectLink[];
  readme?: ProjectReadme;
  category: ProjectCategory;
  featured: boolean;
  status: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
  description: string;
}

export const portfolio = {
  name: "Jefferson Tadeu dos Santos",
  firstName: "Jefferson Tadeu",
  initials: "JT",
  role: "Desenvolvedor Backend / Full Stack Júnior",
  location: "Recife, PE",
  email: "tadeu.santos7148@gmail.com",
  phone: "(81) 99284-4840",
  whatsapp: "https://wa.me/5581992844840",
  github: "https://github.com/auhauhbr",
  linkedin:
    "https://www.linkedin.com/in/jefferson-tadeu-dos-santos-0ab133380",
  portfolioUrl: "https://jeffersontadeu.vercel.app",
  avatar: "/images/jefferson.jpg",
  resume: "/documents/jefferson_curriculo_atualizado.pdf",
  available: true,
  headline:
    "Construo sistemas que transformam problemas reais em soluções claras.",
  shortBio:
    "Desenvolvedor Full Stack em formação, com foco em backend, automação, APIs REST, banco de dados, integrações, pagamentos, webhooks e aplicações full stack. Tenho projetos com PHP/Laravel, Python/FastAPI, Node.js/Express, React, TypeScript, PostgreSQL, MySQL/MariaDB, Redis, Docker e deploy, buscando criar soluções práticas para problemas reais.",
  bio:
    "Sou desenvolvedor full stack em formação, Técnico em Desenvolvimento de Sistemas e estudante de Análise e Desenvolvimento de Sistemas. Construo aplicações completas, passando por interface, regras de negócio, banco de dados, autenticação, integrações, pagamentos, testes, documentação e deploy.",
  about: [
    "No front-end, trabalho com React, TypeScript, JavaScript, HTML, CSS, Vite e Tailwind CSS para criar interfaces responsivas, organizadas e conectadas às regras de negócio.",
    "No back-end, desenvolvo APIs e integrações com PHP, Laravel, Python, FastAPI, Node.js e Express. Tenho prática com autenticação, validações, filas, workers, processamento assíncrono, webhooks, logs, testes e automações.",
    "Também venho aprofundando fluxos comuns de sistemas reais, como catálogos, carrinho, checkout, pedidos, controle de estoque, painel administrativo, consulta de CEP, integração com pagamento, confirmação por webhook, idempotência e atualização de status de transações.",
    "Utilizo PostgreSQL, MySQL/MariaDB, SQLite, Redis, Prisma e SQLAlchemy para modelagem e persistência, além de Docker, GitHub Actions, Railway, Render, Vercel e GitHub Pages para organizar o ciclo completo das aplicações.",
    "Busco oportunidades como estagiário ou desenvolvedor júnior em front-end, back-end ou full stack, onde eu possa contribuir com responsabilidade, evoluir com profissionais experientes e construir soluções úteis para problemas reais.",
  ],

  skills: {
    Backend: [
      "PHP",
      "Laravel",
      "Python",
      "FastAPI",
      "Celery",
      "Node.js",
      "Express",
      "API REST",
      "JWT",
      "Laravel Sanctum",
      "SQLAlchemy",
      "Zod",
      "Socket.io",
      "Pydantic",
      "Workers",
      "Filas",
      "Webhooks",
    ],
    Frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Axios",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Banco de dados": [
      "PostgreSQL",
      "MySQL/MariaDB",
      "SQLite",
      "Redis",
      "Prisma ORM",
      "SQLAlchemy",
      "Modelagem relacional",
      "Migrations",
      "SQL",
    ],
    "Integrações e automações": [
      "Mercado Pago",
      "ViaCEP",
      "GraphQL",
      "Lighthouse",
      "Webhooks",
      "Filas em banco",
      "Processamento assíncrono",
      "Requests",
      "BeautifulSoup",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "SMTP",
      "OpenAQ API",
    ],
    Ferramentas: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Railway",
      "Render",
      "Vercel",
      "GitHub Pages",
      "Nginx",
      "Ruff",
      "Pytest",
    ],
    "Estudos técnicos": [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "JDBC",
      "C#/.NET 9",
      "WPF",
      "C++17",
      "POO",
      "STL",
      "CMake",
      "unittest",
      "Algoritmos",
      "Estruturas de dados",
    ],
    "Tecnologias estudadas em cursos": [
      "Django",
      "PySide6",
      "Selenium",
      "jQuery",
      "WordPress",
      "CodeIgniter",
      "Slim Framework",
      "Sass",
      "Ionic",
      "Next.js",
      "JavaFX",
      "MongoDB",
      "CouchDB",
      "Firebase",
      "Oracle",
      "SQL Server",
      "T-SQL",
      "PL/SQL",
      "PDO",
      "AJAX",
      "MVC",
      "Weka",
      "PHPMyAdmin",
      "Godot",
      "GDScript",
      "Unity",
    ],
  },

  techStack: [
    { name: "Python", icon: "/tech/python.svg" },
    { name: "PHP", icon: "/tech/php.svg" },
    { name: "Laravel", icon: "/tech/laravel.svg" },
    { name: "FastAPI", icon: "/tech/fastapi.svg" },
    { name: "Celery", icon: "/tech/celery.svg" },
    { name: "Redis", icon: "/tech/redis.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MySQL/MariaDB", icon: "/tech/mysql.svg" },
    { name: "Mercado Pago" },
    { name: "Railway" },
    { name: "GraphQL/Lighthouse" },
    { name: "ViaCEP" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "Socket.io", icon: "/tech/socketio.svg" },
    { name: "Prisma", icon: "/tech/prisma.svg" },
    { name: "Vite", icon: "/tech/vite.svg" },
    { name: "Streamlit", icon: "/tech/streamlit.svg" },
    { name: "C#", icon: "/tech/csharp.svg" },
    { name: "C++", icon: "/tech/cplusplus.svg" },
    { name: ".NET", icon: "/tech/dotnet.svg" },
    { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
    { name: "JavaScript", icon: "/tech/javascript.svg" },
    { name: "HTML5", icon: "/tech/html5.svg" },
    { name: "CSS3", icon: "/tech/css3.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
    { name: "SQLite", icon: "/tech/sqlite.svg" },
    { name: "Pandas", icon: "/tech/pandas.svg" },
    { name: "Plotly", icon: "/tech/plotly.svg" },
    { name: "SQLAlchemy", icon: "/tech/sqlalchemy.svg" },
    { name: "Git", icon: "/tech/git.svg" },
    { name: "GitHub Actions", icon: "/tech/githubactions.svg" },
    { name: "Pytest", icon: "/tech/pytest.svg" },
    { name: "CMake", icon: "/tech/cmake.svg" },
    { name: "Java", icon: "/tech/java.svg" },
    { name: "Nginx", icon: "/tech/nginx.svg" },
    { name: "Render", icon: "/tech/render.svg" },
    { name: "Neon", icon: "/tech/neon.svg" },
    { name: "Resend", icon: "/tech/resend.svg" },
    { name: "JWT", icon: "/tech/jwt.svg" },
    { name: "Zod", icon: "/tech/zod.svg" },
    { name: "React Router", icon: "/tech/reactrouter.svg" },
    { name: "Lucide React", icon: "/tech/lucide.svg" },
    { name: "TanStack Query", icon: "/tech/tanstackquery.svg" },
    { name: "Axios", icon: "/tech/axios.svg" },
    { name: "Django", icon: "/tech/django.svg" },
    { name: "PySide6", icon: "/tech/qt.svg" },
    { name: "Selenium", icon: "/tech/selenium.svg" },
    { name: "jQuery", icon: "/tech/jquery.svg" },
    { name: "WordPress", icon: "/tech/wordpress.svg" },
    { name: "CodeIgniter", icon: "/tech/codeigniter.svg" },
    { name: "Slim Framework" },
    { name: "Sass", icon: "/tech/sass.svg" },
    { name: "Ionic", icon: "/tech/ionic.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "Spring Boot", icon: "/tech/springboot.svg" },
    { name: "Hibernate", icon: "/tech/hibernate.svg" },
    { name: "JPA" },
    { name: "JDBC" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "CouchDB", icon: "/tech/couchdb.svg" },
    { name: "Firebase", icon: "/tech/firebase.svg" },
    { name: "PHPMyAdmin", icon: "/tech/phpmyadmin.svg" },
    { name: "Godot", icon: "/tech/godot.svg" },
    { name: "GDScript", icon: "/tech/gds.svg" },
    { name: "Unity", icon: "/tech/unity.svg" },
    { name: "WPF" },
    { name: "Docker Compose" },
    { name: "BeautifulSoup" },
    { name: "Requests" },
    { name: "OpenAQ API" },
    { name: "LocalStorage" },
    { name: "JavaFX" },
    { name: "Oracle" },
    { name: "SQL Server" },
    { name: "T-SQL" },
    { name: "PL/SQL" },
    { name: "PDO" },
    { name: "AJAX" },
    { name: "MVC" },
    { name: "Weka" },
  ],

  projects: [
    {
      id: 10,
      title: "Lumora",
      summary:
        "E-commerce fullstack com catálogo, carrinho, checkout, painel administrativo, pagamentos e deploy em produção.",
      description:
        "O Lumora é um e-commerce fullstack voltado para produtos de tecnologia. O projeto foi desenvolvido para praticar uma aplicação mais próxima de um cenário real, com catálogo, carrinho, checkout, autenticação, painel administrativo, estoque, pagamentos e deploy. O frontend em React/TypeScript consome rotas da API Laravel, enquanto o backend concentra regras de negócio de carrinho, pedidos, estoque, pagamento, webhook e permissões administrativas.",
      contribution:
        "Desenvolvi o backend Laravel com rotas, controladores, validações, serviços e regras de negócio, integrado ao frontend React com TypeScript e Vite. Implementei autenticação com Sanctum, consulta de CEP, Checkout Pro do Mercado Pago, webhook idempotente, baixa de estoque após aprovação, painel administrativo, GraphQL com Lighthouse e a estrutura de deploy no Railway. O produto está publicado e segue em evolução.",
      images: [
        {
          src: "/images/projects/lumora/lumora-banner.jpg",
          alt: "Identidade visual do e-commerce Lumora",
          caption: "Lumora — e-commerce de tecnologia em evolução e publicado no Railway.",
        },
        {
          src: "/images/projects/lumora/lumora-catalogo.png",
          alt: "Catálogo do Lumora com filtros e produtos",
          caption: "Catálogo responsivo com busca, filtros, paginação e alternância de visualização.",
        },
        {
          src: "/images/projects/lumora/lumora-produto.png",
          alt: "Página de detalhes de produto do Lumora",
          caption: "Detalhes do produto com galeria, preço, estoque e ações de compra.",
        },
        {
          src: "/images/projects/lumora/lumora-area-cliente.png",
          alt: "Área do cliente do Lumora",
          caption: "Área autenticada para acompanhar pedidos, endereços e dados do cliente.",
        },
      ],
      tech: [
        "Laravel",
        "PHP",
        "React",
        "TypeScript",
        "Vite",
        "MySQL/MariaDB",
        "Laravel Sanctum",
        "GraphQL",
        "Lighthouse",
        "Mercado Pago",
        "ViaCEP",
        "Railway",
        "API REST",
        "Webhook",
        "Queue database",
        "CSS",
      ],
      features: [
        "Catálogo com busca, filtros e paginação",
        "Página de produto com preço, estoque e compra",
        "Carrinho lateral conectado à API",
        "Checkout em etapas",
        "Cadastro, login e autenticação com Laravel Sanctum",
        "Consulta de CEP e preenchimento de endereço com ViaCEP",
        "Criação e acompanhamento de pedidos",
        "Mercado Pago Checkout Pro e webhook idempotente",
        "Baixa de estoque somente após pagamento aprovado",
        "Painel administrativo com dashboard",
        "Gestão de produtos, marcas, categorias, pedidos e estoque",
        "Endpoint GraphQL com Lighthouse",
        "Deploy no Railway com MySQL/MariaDB e fila em banco",
      ],
      architecture: [
        "Cliente React/Vite",
        "API Laravel",
        "MySQL/MariaDB",
        "Mercado Pago",
        "Webhook Laravel",
        "Pedido + Estoque",
      ],
      github:
        "https://github.com/auhauhbr/lumora-eccomerce-em-laravel-react",
      live: "https://lumora-eccomerce-em-laravel-react-production.up.railway.app",
      readme: {
        source: "/readmes/lumora.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/lumora-eccomerce-em-laravel-react/main/",
        linkBase:
          "https://github.com/auhauhbr/lumora-eccomerce-em-laravel-react/blob/main/",
        imageMap: {
          "public/imagens/marca/lumora-banner.jpg":
            "/images/projects/lumora/lumora-banner.jpg",
          "docs/screenshots/catalogo-usuario.png":
            "/images/projects/lumora/lumora-catalogo.png",
          "docs/screenshots/produto-detalhe.png":
            "/images/projects/lumora/lumora-produto.png",
          "docs/screenshots/perfil-cliente.png":
            "/images/projects/lumora/lumora-area-cliente.png",
        },
      },
      category: "Full Stack",
      featured: true,
      status: "Publicado · Em evolução",
    },
    {
      id: 1,
      title: "Orquestrador Assíncrono",
      summary: "API para distribuir e monitorar tarefas em segundo plano.",
      description:
        "Central de tarefas distribuídas que recebe trabalhos por HTTP, persiste cada solicitação e encaminha a execução para workers especializados. A API devolve um identificador imediatamente, enquanto o processamento continua de forma independente e observável.",
      contribution:
        "Implementei filas high, default e low, processamento paralelo, retries com backoff exponencial, fila de tarefas mortas, reprocessamento, cancelamento, métricas, logs JSON e tarefas periódicas. O projeto também executa envio de e-mail, redimensionamento de imagens e geração de relatórios CSV.",
      images: [
        {
          src: "/images/projects/orquestrador-arquitetura.jpg",
          alt: "Diagrama completo da arquitetura do Orquestrador Assíncrono",
          caption:
            "Arquitetura completa com FastAPI, Redis, workers Celery por prioridade, PostgreSQL, Beat, Flower e Resend.",
        },
        {
          src: "/images/projects/orquestrador-swagger.png",
          alt: "Documentação Swagger do Orquestrador Assíncrono",
          caption: "API REST documentada e testável pelo Swagger.",
        },
        {
          src: "/images/projects/orquestrador-flower.png",
          alt: "Monitoramento de workers no Flower",
          caption: "Workers, filas e tarefas acompanhados no Flower.",
        },
      ],
      tech: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "SQLAlchemy",
        "Pydantic",
        "Flower",
        "Celery Beat",
        "Pillow",
        "Resend",
        "Docker",
        "Docker Compose",
        "Pytest",
        "Ruff",
        "Uvicorn",
      ],
      features: [
        "Filas por prioridade e workers dedicados",
        "Retry automático com backoff exponencial",
        "Dead-letter queue e reprocessamento",
        "Métricas agregadas e logs estruturados",
        "Tarefas agendadas com Celery Beat",
        "E-mail, imagens e relatórios CSV",
      ],
      architecture: [
        "Cliente HTTP",
        "FastAPI",
        "PostgreSQL + Redis",
        "Workers Celery",
        "Flower + Beat",
      ],
      github: "https://github.com/auhauhbr/orquestrador-assincrono-API",
      readme: {
        source: "/readmes/orquestrador.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/orquestrador-assincrono-API/main/",
        linkBase:
          "https://github.com/auhauhbr/orquestrador-assincrono-API/blob/main/",
        imageMap: {
          "docs/imagens/arquitetura-orquestrador-assincrono.jpg":
            "/images/projects/orquestrador-arquitetura.jpg",
        },
      },
      category: "Backend",
      featured: true,
      status: "Projeto autoral",
    },
    {
      id: 2,
      title: "Nexo Kanban",
      summary: "Gestão Kanban full stack, em tempo real e publicada.",
      description:
        "Aplicação completa para organizar projetos em quadros, listas e cartões. Combina uma interface responsiva com API REST, autenticação, banco relacional e eventos em tempo real, mantendo regras de autorização e ordenação no backend.",
      contribution:
        "Construí autenticação JWT, drag and drop, capas, etiquetas, checklists, prazos, comentários, histórico, anexos por link, arquivamento e limite WIP. A versão pública separa frontend, API e banco entre GitHub Pages, Render e Neon, com validação automatizada pelo GitHub Actions.",
      images: [
        {
          src: "/images/projects/nexo/login.png",
          alt: "Tela de login do Nexo",
          caption: "Login integrado à identidade visual do produto.",
        },
        {
          src: "/images/projects/nexo/cadastro.png",
          alt: "Tela de cadastro do Nexo",
          caption: "Cadastro com confirmação e validação de senha.",
        },
        {
          src: "/images/projects/nexo/quadros.png",
          alt: "Painel de quadros do Nexo",
          caption: "Área autenticada para criação e acesso aos quadros.",
        },
        {
          src: "/images/projects/nexo/cartao-detalhes.png",
          alt: "Modal de detalhes de cartão do Nexo",
          caption: "Edição de cartão, comentários, anexos, prazo e capa.",
        },
        {
          src: "/images/projects/nexo/cartao-recursos.png",
          alt: "Etiquetas e checklists no Nexo",
          caption: "Etiquetas, checklists e histórico de atividades.",
        },
        {
          src: "/images/projects/nexo/arquivados.png",
          alt: "Central de arquivados do Nexo",
          caption: "Restauração de listas e cartões arquivados.",
        },
      ],
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "TanStack Query",
        "Axios",
        "React Router",
        "Lucide React",
        "Node.js",
        "Express",
        "Zod",
        "JWT",
        "bcryptjs",
        "Socket.io",
        "PostgreSQL",
        "Prisma ORM",
        "Docker",
        "Docker Compose",
        "Nginx",
        "GitHub Actions",
        "GitHub Pages",
        "Render",
        "Neon",
      ],
      features: [
        "Autenticação e rotas privadas com JWT",
        "Quadros, listas e cartões com drag and drop",
        "Atualização em tempo real por sala privada",
        "Histórico, comentários, etiquetas e checklists",
        "Arquivamento separado da exclusão",
        "WIP limit e alertas de prazo",
        "Testes de integração, tipos e CI",
      ],
      architecture: [
        "React no GitHub Pages",
        "API Express no Render",
        "Socket.io",
        "Prisma ORM",
        "PostgreSQL no Neon",
      ],
      github: "https://github.com/auhauhbr/nexo-kanban",
      live: "https://auhauhbr.github.io/nexo-kanban/",
      links: [
        {
          label: "Status da API",
          href: "https://nexo-kanban.onrender.com/health",
        },
      ],
      readme: {
        source: "/readmes/nexo.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/nexo-kanban/main/",
        linkBase: "https://github.com/auhauhbr/nexo-kanban/blob/main/",
      },
      category: "Full Stack",
      featured: true,
      status: "Publicado",
    },
    {
      id: 3,
      title: "Rastreador de Preços",
      summary: "Automação de coleta, histórico e análise de ofertas.",
      description:
        "Plataforma local para acompanhar produtos escolhidos pelo usuário. Cada oferta é cadastrada com sua URL e seletor CSS, permitindo coletar preços em lote, comparar lojas e manter um histórico detalhado em SQLite.",
      contribution:
        "Modelei catálogo, ofertas e leituras; criei coleta tolerante a falhas, análise de média de 30 dias, menores preços de 30 e 90 dias, índice de preço e alertas com cooldown. O dashboard Streamlit separa visualização da coleta e oferece filtros, gráficos e comparação entre lojas.",
      tech: [
        "Python",
        "Requests",
        "BeautifulSoup",
        "SQLite",
        "Pandas",
        "Streamlit",
        "SMTP",
        "python-dotenv",
        "JSON",
        "unittest",
      ],
      features: [
        "Catálogo de categorias, lojas, produtos e ofertas",
        "Coleta em lote com intervalo controlado",
        "Histórico por produto e loja",
        "Índice de preço e classificação de promoções",
        "Alertas de preço com cooldown",
        "Dashboard com filtros e gráficos",
      ],
      architecture: [
        "Catálogo JSON",
        "Coletor Requests + BeautifulSoup",
        "Serviço de análise",
        "SQLite",
        "Dashboard Streamlit + alertas SMTP",
      ],
      github: "https://github.com/auhauhbr/rastreador-precos",
      readme: {
        source: "/readmes/rastreador.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/rastreador-precos/main/",
        linkBase:
          "https://github.com/auhauhbr/rastreador-precos/blob/main/",
      },
      category: "Automação / Dados",
      featured: true,
      status: "Projeto autoral",
    },
    {
      id: 4,
      title: "AirVision",
      summary: "Dashboard analítico para dados globais de qualidade do ar.",
      description:
        "Aplicação web publicada que transforma dados reais da OpenAQ em indicadores e visualizações interativas. O usuário escolhe país, cidade, poluente e período; o backend localiza sensores, processa os registros e entrega dados prontos para análise.",
      contribution:
        "Implementei séries temporais, médias móveis de 7 e 14 dias, anomalias, dias críticos, conformidade OMS, tendência anual, heatmap e exportação CSV. A arquitetura mantém a chave OpenAQ exclusivamente no backend e usa cache SQLite e modo demonstrativo quando não há cobertura recente.",
      images: [
        {
          src: "/images/projects/airvision/dashboard.png",
          alt: "Dashboard completo do AirVision",
          caption: "Visão geral com filtros, indicadores, gráficos e dias críticos.",
        },
        {
          src: "/images/projects/airvision/media-movel.png",
          alt: "Média móvel no AirVision",
          caption: "Série temporal com SMA de 7 dias e tooltip interativo.",
        },
        {
          src: "/images/projects/airvision/anomalias.png",
          alt: "Detecção de anomalias no AirVision",
          caption: "Modo de análise focado em anomalias e limite da OMS.",
        },
      ],
      tech: [
        "React",
        "Vite",
        "Plotly",
        "FastAPI",
        "Pandas",
        "NumPy",
        "Pydantic",
        "Requests",
        "SQLite",
        "OpenAQ v3",
        "Pytest",
        "Playwright",
        "GitHub Actions",
        "GitHub Pages",
        "Render",
      ],
      features: [
        "PM2.5, PM10, NO₂, O₃, CO e SO₂",
        "Médias móveis e detecção de anomalias",
        "Conformidade OMS e tendência anual",
        "Heatmap por hora e dia da semana",
        "Cache SQLite e fallback demonstrativo",
        "Exportação dos dados filtrados em CSV",
      ],
      architecture: [
        "Usuário",
        "React no GitHub Pages",
        "FastAPI no Render",
        "OpenAQ v3",
        "Cache SQLite",
      ],
      github: "https://github.com/auhauhbr/AirVision-qualidade-do-ar",
      live: "https://auhauhbr.github.io/AirVision-qualidade-do-ar/",
      links: [
        {
          label: "Saúde da API",
          href: "https://airvision-api.onrender.com/api/health",
        },
      ],
      readme: {
        source: "/readmes/airvision.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/AirVision-qualidade-do-ar/main/",
        linkBase:
          "https://github.com/auhauhbr/AirVision-qualidade-do-ar/blob/main/",
        imageMap: {
          "docs/images/dashboard-visao-geral.png":
            "/images/projects/airvision/dashboard-repo.png",
          "docs/images/grafico-media-movel.png":
            "/images/projects/airvision/media-movel.png",
          "docs/images/grafico-anomalias.png":
            "/images/projects/airvision/anomalias.png",
        },
      },
      category: "Automação / Dados",
      featured: true,
      status: "Publicado",
    },
    {
      id: 5,
      title: "Trilum Conecta",
      summary: "Plataforma de transição de carreira apresentada no Coday.",
      description:
        "MVP de produto que conecta aprendizado, construção de evidências e oportunidades em tecnologia. O sistema atende alunos e empresas em jornadas integradas, com recomendações explicáveis e apoio contextual durante cada etapa.",
      contribution:
        "Atuei no motor de regras e pesos que transforma respostas subjetivas em trilhas, cursos e vagas coerentes. Também trabalhei radar de prontidão, currículo exportável, mentor contextual, Raio-X da vaga, dossiê do candidato e feedback assistido. Fui reconhecido como membro destaque no Coday 2026.1.",
      images: [
        {
          src: "/images/projects/trilum/landing.png",
          alt: "Landing page publicada do Trilum Conecta",
          caption: "Landing page da plataforma publicada no GitHub Pages.",
        },
        {
          src: "/images/projects/trilum/equipe.png",
          alt: "Equipe do Trilum Conecta",
          caption: "Integrantes do squad apresentados na landing page.",
        },
        {
          src: "/images/projects/trilum/coday.png",
          alt: "Página do Coday 2026.1 do Trilum Conecta",
          caption: "Página especial com demo, materiais e contas de apresentação.",
        },
      ],
      tech: [
        "React",
        "Vite",
        "React Router",
        "JavaScript",
        "CSS",
        "LocalStorage",
        "Lucide React",
        "React Icons",
        "GitHub Actions",
        "GitHub Pages",
        "Ollama opcional",
        "Motor de regras",
      ],
      features: [
        "Wizard de diagnóstico e recomendações explicáveis",
        "Trilhas, cursos, módulos e progresso",
        "Mentor contextual e radar de prontidão",
        "Perfil público e currículo exportável",
        "Vagas, candidaturas e feedback profissional",
        "Raio-X de vagas e dossiê de compatibilidade",
        "Demo integrada para aluno e empresa",
      ],
      architecture: [
        "React + HashRouter",
        "Motor de regras local",
        "LocalStorage",
        "Ollama opcional",
        "GitHub Pages",
      ],
      github: "https://github.com/auhauhbr/Trilum-Conecta",
      live: "https://auhauhbr.github.io/Trilum-Conecta/#/",
      links: [
        {
          label: "Página do Coday",
          href: "https://auhauhbr.github.io/Trilum-Conecta/#/coday",
        },
      ],
      readme: {
        source: "/readmes/trilum.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/Trilum-Conecta/main/",
        linkBase: "https://github.com/auhauhbr/Trilum-Conecta/blob/main/",
      },
      category: "Produto Web",
      featured: true,
      status: "Coday 2026.1",
    },
    {
      id: 6,
      title: "GameLegenda",
      summary: "Protótipo Windows de OCR, tradução e overlay para jogos.",
      description:
        "Protótipo desktop para capturar texto exibido em uma janela de jogo, reconhecer o conteúdo localmente e mostrar a tradução como overlay transparente próximo à posição original, sem substituir a interface do jogo.",
      contribution:
        "A versão atual valida seleção de janela, captura, OCR nativo do Windows com fallback PowerShell, glossário, cache e provedores plugáveis. Os atalhos F8, F9 e F10 controlam captura, visibilidade e posição do overlay.",
      images: [
        {
          src: "/images/projects/gamelegenda/painel.png",
          alt: "Painel principal do GameLegenda",
          caption: "Seleção de janela, provedores e controle da captura.",
        },
        {
          src: "/images/projects/gamelegenda/janela-teste.png",
          alt: "Janela de teste do GameLegenda",
          caption: "Cenário usado para validar OCR e posicionamento do overlay.",
        },
      ],
      tech: [
        "C#",
        ".NET 9",
        "WPF",
        "Windows.Media.Ocr",
        "PowerShell",
        "DeepL API",
        "LibreTranslate",
        "Cache local",
        "Glossário",
        "Testes",
      ],
      features: [
        "Captura de janela no Windows",
        "OCR local com fallback",
        "Overlay transparente e always-on-top",
        "Tradução próxima ao texto original",
        "Glossário e cache de traduções",
        "Provedores plugáveis de tradução",
      ],
      architecture: [
        "Captura da janela",
        "OCR do Windows",
        "Cache + glossário",
        "DeepL / LibreTranslate",
        "Overlay WPF",
      ],
      github: "https://github.com/auhauhbr/Projeto-Gamet---GameLegenda",
      readme: {
        source: "/readmes/gamelegenda.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/Projeto-Gamet---GameLegenda/main/",
        linkBase:
          "https://github.com/auhauhbr/Projeto-Gamet---GameLegenda/blob/main/",
      },
      category: "Desktop / Ferramentas",
      featured: false,
      status: "Protótipo experimental",
    },
    {
      id: 7,
      title: "Termu RPG",
      summary: "RPG de terminal criado para consolidar fundamentos em C++17.",
      description:
        "Jogo de combate por turnos executado no terminal, com quatro classes, monstros, progressão, habilidades, inventário, equipamentos, loja e efeitos de status. O projeto transforma conteúdos de estudo em um programa completo e modular.",
      contribution:
        "Separei regras, catálogos, entrada, aleatoriedade e fluxo do jogo. O código exercita classes abstratas, herança, polimorfismo, STL, ponteiros inteligentes, validação de entrada e números aleatórios reproduzíveis.",
      tech: [
        "C++17",
        "POO",
        "STL",
        "CMake",
        "std::unique_ptr",
        "std::mt19937",
        "Testes automatizados",
        "Algoritmos",
        "Estruturas de dados",
      ],
      features: [
        "Quatro classes jogáveis e cinco monstros",
        "Combate com iniciativa e afinidades elementais",
        "Inventário, equipamentos e loja",
        "Progressão e evolução de habilidades",
        "Validação robusta de entradas",
        "Testes de regras e combate simulado",
      ],
      architecture: [
        "Entrada",
        "Jogo",
        "Motor de combate",
        "Personagem + Monstros",
        "Regras + Catálogos",
      ],
      github: "https://github.com/auhauhbr/Termu-RPG-de-terminal-em-C-",
      readme: {
        source: "/readmes/termu.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/Termu-RPG-de-terminal-em-C-/main/",
        linkBase:
          "https://github.com/auhauhbr/Termu-RPG-de-terminal-em-C-/blob/main/",
      },
      category: "Estudos Técnicos",
      featured: false,
      status: "Estudo aprofundado",
    },
    {
      id: 8,
      title: "Exercícios de Programação em Python",
      summary: "Registro organizado de estudos sobre POO e banco de dados.",
      description:
        "Soluções documentadas dos capítulos de Classes e Objetos e Banco de Dados do livro Introdução à Programação com Python. Cada exercício possui contexto e demonstração executável para facilitar estudo e revisão.",
      contribution:
        "A prática cobre composição, herança, especialização de métodos, coleções, contas bancárias, SQLite, consultas parametrizadas, inserções e atualizações.",
      tech: [
        "Python",
        "POO",
        "SQLite",
        "UserList",
        "SQL parametrizado",
        "Lógica",
        "Documentação",
      ],
      features: [
        "Exercícios independentes e executáveis",
        "Classes, composição e herança",
        "Especialização de métodos",
        "Criação e consulta de banco SQLite",
        "Atualizações SQL parametrizadas",
        "README por capítulo",
      ],
      architecture: [
        "Enunciado",
        "Contexto",
        "Implementação",
        "Demonstração",
        "Documentação",
      ],
      github: "https://github.com/auhauhbr/intro-programacao-python-exercicios",
      readme: {
        source: "/readmes/python-exercicios.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/intro-programacao-python-exercicios/main/",
        linkBase:
          "https://github.com/auhauhbr/intro-programacao-python-exercicios/blob/main/",
      },
      category: "Estudos Técnicos",
      featured: false,
      status: "Estudo contínuo",
    },
    {
      id: 9,
      title: "Portfólio — Jefferson Tadeu",
      summary:
        "Portfólio profissional com projetos, trajetória, certificados e documentação técnica.",
      description:
        "Aplicação web responsiva criada para apresentar meu perfil profissional de forma organizada e verificável. O site reúne projetos autorais e acadêmicos, tecnologias, formação, certificados, marcos da trajetória, currículo e canais de contato em uma experiência única.",
      contribution:
        "Parti de um template público e reformulei conteúdo, estrutura e experiência para representar meu perfil. Implementei filtros por área e tecnologia, galerias de projetos, detalhes em modal, renderização expansível de READMEs, catálogo de cursos e certificados, trajetória profissional, tema claro e escuro, currículo para download e deploy contínuo na Vercel.",
      images: [
        {
          src: "/images/projects/portfolio/home.webp",
          alt: "Página inicial do portfólio de Jefferson Tadeu",
          caption:
            "Página inicial com apresentação profissional, currículo, certificados e canais de contato.",
        },
        {
          src: "/images/projects/portfolio/projetos.webp",
          alt: "Página de projetos com filtros por área e tecnologia",
          caption:
            "Catálogo de projetos com filtros combináveis por categoria e tecnologia.",
        },
        {
          src: "/images/projects/portfolio/sobre.webp",
          alt: "Página Sobre com habilidades e trajetória",
          caption:
            "Perfil, habilidades, formação, conquistas, cursos e certificados organizados em camadas.",
        },
        {
          src: "/images/projects/portfolio/contato.webp",
          alt: "Página de contato do portfólio",
          caption:
            "Canais diretos para oportunidades, colaborações e contato profissional.",
        },
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
        "Lucide React",
        "React Markdown",
        "Remark GFM",
        "next-themes",
        "Vercel",
        "Git",
        "GitHub",
      ],
      features: [
        "Página inicial com projetos selecionados",
        "Projetos filtrados por área e tecnologia",
        "Galerias e detalhes completos em modal",
        "READMEs expansíveis dentro do próprio site",
        "Trajetória, formação, cursos e certificados",
        "Currículo para download e contatos diretos",
        "Tema claro e escuro e layout responsivo",
        "Deploy contínuo na Vercel",
      ],
      architecture: [
        "Next.js App Router",
        "Componentes React",
        "Configuração TypeScript",
        "Conteúdo e imagens locais",
        "Deploy na Vercel",
      ],
      github: "https://github.com/auhauhbr/portfolio-jefferson-tadeu",
      live: "https://jeffersontadeu.vercel.app/",
      readme: {
        source: "/readmes/portfolio.md",
        imageBase:
          "https://raw.githubusercontent.com/auhauhbr/portfolio-jefferson-tadeu/main/",
        linkBase:
          "https://github.com/auhauhbr/portfolio-jefferson-tadeu/blob/main/",
      },
      category: "Produto Web",
      featured: false,
      status: "Publicado",
    },
  ] satisfies Project[],

  education: [
    {
      institution: "Universidade Tiradentes (Unit)",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "ago/2025 — dez/2027",
      status: "Em andamento · turno da noite",
      description:
        "Graduação tecnológica com aprofundamento em desenvolvimento de software, análise de requisitos, bancos de dados e construção de produtos digitais.",
    },
    {
      institution: "ETE Advogado José David Gil Rodrigues",
      degree: "Técnico em Desenvolvimento de Sistemas",
      period: "2020 — 2023",
      status: "Concluído",
      description:
        "Formação técnica que iniciou minha trajetória em programação, lógica, desenvolvimento de sistemas e organização de projetos.",
    },
  ] satisfies Education[],

  certifications: [
    {
      group: "Fundação Bradesco",
      items: [
        "Projetos de Sistemas de TI — 100% (abr/2026)",
        "Trilha Banco de Dados — 38h, 97%",
        "Administrando Banco de Dados — 15h, 100%",
        "Implementando Banco de Dados — 15h, 100%",
        "Modelagem de Dados — 8h, 90%",
        "Linguagem de Programação Python — Básico, 90%",
      ],
    },
    {
      group: "Udemy · Desenvolvimento",
      items: [
        "Python 3 do básico ao avançado",
        "Java completo: POO e projetos",
        "Java moderno, Spring Boot e IA",
        "HTML, CSS, JavaScript, TypeScript, React e Next",
        "Desenvolvimento Web com projetos",
        "Banco de Dados SQL e NoSQL",
      ],
    },
    {
      group: "Estudos complementares",
      items: [
        "Godot 4.6+ — RPG completo",
        "Unity e C# — jogos 2D",
        "Leitura contínua de documentação técnica em inglês",
      ],
    },
  ],

  milestones: [
    {
      title: "Lumora: e-commerce fullstack em produção",
      date: "Junho de 2026",
      description:
        "Projeto autoral desenvolvido para praticar uma aplicação fullstack mais próxima de um cenário real, com Laravel, React, TypeScript, MySQL/MariaDB, autenticação, painel administrativo, integração com Mercado Pago e deploy no Railway. O Lumora está publicado e segue em desenvolvimento contínuo.",
      image: "/images/projects/lumora/lumora-banner.jpg",
      href: "https://lumora-eccomerce-em-laravel-react-production.up.railway.app",
      linkLabel: "Abrir projeto publicado",
    },
    {
      title: "AirVision: projeto finalizado e em produção",
      date: "Junho de 2026",
      description:
        "Depois de concluir e documentar o AirVision no GitHub, evoluí o projeto para uma aplicação realmente pública: frontend React no GitHub Pages e API FastAPI no Render. A separação protege a chave da OpenAQ no servidor e disponibiliza endpoints para cidades, poluentes, séries históricas, médias móveis, anomalias, limites da OMS, heatmaps e exportação CSV.",
      image: "/images/airvision-capa.png",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7474601171165315072/",
      linkLabel: "Ver publicação no LinkedIn",
    },
    {
      title: "Coday 2026.1 — membro destaque",
      date: "16 de junho de 2026",
      description:
        "Apresentei o Trilum Conecta no Porto Digital após um ciclo de desenvolvimento entre março e junho. O reconhecimento como membro destaque marcou minha evolução em produto, comunicação e trabalho em equipe.",
      image: "/images/trilum-coday.jpg",
      href: "https://www.linkedin.com/posts/jefferson-tadeu-dos-santos-0ab133380_coday2026-portodigital-residenciatecnologica-ugcPost-7472854239489331200-GSap/",
      linkLabel: "Ver relato no LinkedIn",
    },
    {
      title: "Nexo Kanban publicado",
      date: "Junho de 2026",
      description:
        "Compartilhei a publicação da primeira aplicação full stack do portfólio com autenticação, banco relacional, comunicação em tempo real, testes, Docker, CI e deploy em serviços separados.",
      image: "/images/nexo-preview.png",
      href: "https://www.linkedin.com/posts/jefferson-tadeu-dos-santos-0ab133380_react-typescript-nodejs-ugcPost-7471378526131281920-eclW/",
      linkLabel: "Ver publicação no LinkedIn",
    },
  ],

  categories: [
    "Todos",
    "Backend",
    "Full Stack",
    "Automação / Dados",
    "Produto Web",
    "Desktop / Ferramentas",
    "Estudos Técnicos",
  ],
} as const;
