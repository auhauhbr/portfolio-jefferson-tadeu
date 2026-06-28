from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    FrameBreak,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "curriculo-jefferson-tadeu-1-pagina.pdf"
PUBLIC = ROOT / "public" / "documents" / "jefferson_curriculo_atualizado.pdf"

NAVY = colors.HexColor("#07182C")
BLUE = colors.HexColor("#087CBF")
TEXT = colors.HexColor("#172033")
MUTED = colors.HexColor("#536174")
LIGHT = colors.HexColor("#DCE8F2")
SOFT = colors.HexColor("#F3F7FA")


def register_fonts():
    regular = Path("C:/Windows/Fonts/arial.ttf")
    bold = Path("C:/Windows/Fonts/arialbd.ttf")
    pdfmetrics.registerFont(TTFont("Arial", str(regular)))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(bold)))


register_fonts()

styles = {
    "name": ParagraphStyle(
        "name",
        fontName="Arial-Bold",
        fontSize=21,
        leading=22,
        textColor=colors.white,
        spaceAfter=2,
    ),
    "role": ParagraphStyle(
        "role",
        fontName="Arial-Bold",
        fontSize=9.4,
        leading=11,
        textColor=colors.HexColor("#BCE9FF"),
        spaceAfter=5,
    ),
    "contact": ParagraphStyle(
        "contact",
        fontName="Arial",
        fontSize=7.4,
        leading=9.2,
        textColor=colors.white,
    ),
    "section": ParagraphStyle(
        "section",
        fontName="Arial-Bold",
        fontSize=8.1,
        leading=9.5,
        textColor=BLUE,
        spaceBefore=5,
        spaceAfter=3,
        borderWidth=0,
        borderPadding=0,
    ),
    "body": ParagraphStyle(
        "body",
        fontName="Arial",
        fontSize=7.65,
        leading=10,
        textColor=TEXT,
        spaceAfter=3,
        alignment=TA_LEFT,
    ),
    "small": ParagraphStyle(
        "small",
        fontName="Arial",
        fontSize=6.8,
        leading=8.5,
        textColor=TEXT,
        spaceAfter=2.5,
    ),
    "tiny": ParagraphStyle(
        "tiny",
        fontName="Arial",
        fontSize=6.2,
        leading=7.6,
        textColor=TEXT,
        spaceAfter=2,
    ),
    "project_title": ParagraphStyle(
        "project_title",
        fontName="Arial-Bold",
        fontSize=7.9,
        leading=9.5,
        textColor=NAVY,
        spaceAfter=1,
    ),
    "project_body": ParagraphStyle(
        "project_body",
        fontName="Arial",
        fontSize=7.1,
        leading=9,
        textColor=TEXT,
        leftIndent=7,
        firstLineIndent=-7,
        bulletIndent=0,
        spaceAfter=1.5,
    ),
    "sidebar": ParagraphStyle(
        "sidebar",
        fontName="Arial",
        fontSize=6.65,
        leading=8.3,
        textColor=TEXT,
        spaceAfter=3,
    ),
    "sidebar_heading": ParagraphStyle(
        "sidebar_heading",
        fontName="Arial-Bold",
        fontSize=7,
        leading=8.4,
        textColor=NAVY,
        spaceAfter=1.5,
    ),
}


def section(title):
    return Paragraph(title.upper(), styles["section"])


def project(name, stack, text, link):
    return KeepTogether(
        [
            Paragraph(
                f'<link href="{link}" color="#07182C"><u>{name}</u></link> '
                f'<font color="#536174">| {stack}</font>',
                styles["project_title"],
            ),
            Paragraph(f"• {text}", styles["project_body"]),
            Spacer(1, 2),
        ]
    )


def header(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 33 * mm, width, 33 * mm, fill=1, stroke=0)

    x = 12 * mm
    y = height - 10 * mm
    p = Paragraph("Jefferson Tadeu dos Santos", styles["name"])
    _, h = p.wrap(width - 24 * mm, 20 * mm)
    p.drawOn(canvas, x, y - h)

    p = Paragraph(
        "Desenvolvedor Full Stack Júnior | Backend | Front-end | Estágio em Desenvolvimento",
        styles["role"],
    )
    _, h2 = p.wrap(width - 24 * mm, 15 * mm)
    p.drawOn(canvas, x, y - h - h2 - 1)

    contact = (
        "Recife, PE  |  (81) 99284-4840<br/>"
        '<link href="mailto:tadeu.santos7148@gmail.com" color="#FFFFFF"><u>E-mail</u></link>'
        "  •  "
        '<link href="https://github.com/auhauhbr" color="#FFFFFF"><u>GitHub - auhauhbr</u></link>'
        "  •  "
        '<link href="https://www.linkedin.com/in/jefferson-tadeu-dos-santos-0ab133380" color="#FFFFFF">'
        "<u>LinkedIn - Jefferson Tadeu</u></link>"
        "  •  "
        '<link href="https://wa.me/5581992844840" color="#FFFFFF"><u>WhatsApp</u></link>'
        "  •  "
        '<link href="https://jeffersontadeu.vercel.app" color="#FFFFFF"><u>Portfólio</u></link>'
    )
    p = Paragraph(contact, styles["contact"])
    _, h3 = p.wrap(width - 24 * mm, 14 * mm)
    p.drawOn(canvas, x, y - h - h2 - h3 - 4)

    canvas.setStrokeColor(LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(12 * mm, 10 * mm, width - 12 * mm, 10 * mm)
    canvas.setFont("Arial", 6.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(
        12 * mm,
        6.6 * mm,
        "Projetos, documentação e demonstrações: jeffersontadeu.vercel.app",
    )
    canvas.restoreState()


def build_story():
    left = [
        section("Perfil profissional"),
        Paragraph(
            "Desenvolvedor full stack em formação, Técnico em Desenvolvimento de Sistemas e estudante de Análise e Desenvolvimento de Sistemas. Experiência prática na construção de APIs, aplicações web, automações e dashboards com integração entre front-end, back-end, banco de dados, testes, Docker e deploy.",
            styles["body"],
        ),
        Paragraph(
            "<b>Objetivo:</b> estágio ou vaga júnior em desenvolvimento front-end, back-end ou full stack, contribuindo com APIs, interfaces, dados, automação e soluções orientadas a produto.",
            styles["body"],
        ),
        section("Competências técnicas"),
        Paragraph(
            "<b>Front-end:</b> React, TypeScript, JavaScript, Vite, React Router, TanStack Query, Axios, HTML, CSS, Tailwind CSS e Bootstrap.",
            styles["small"],
        ),
        Paragraph(
            "<b>Back-end:</b> Python, FastAPI, Celery, Node.js, Express, APIs REST, JWT, Zod, Socket.io, workers, filas e processamento assíncrono.",
            styles["small"],
        ),
        Paragraph(
            "<b>Dados:</b> PostgreSQL, Redis, Prisma ORM, SQLite, MySQL, SQLAlchemy, modelagem relacional, migrações e consultas SQL.",
            styles["small"],
        ),
        Paragraph(
            "<b>Infraestrutura e qualidade:</b> Docker, Docker Compose, GitHub Actions, Pytest, Ruff, logs, métricas, Git e GitHub.",
            styles["small"],
        ),
        section("Projetos selecionados"),
        project(
            "Orquestrador Assíncrono",
            "Python, FastAPI, Celery, Redis, PostgreSQL, Docker",
            "API distribuída com prioridades, workers paralelos, retries com backoff, tarefas mortas, reprocessamento, métricas, Flower, Beat, e-mails, imagens, relatórios CSV e 16 testes.",
            "https://github.com/auhauhbr/orquestrador-assincrono-API",
        ),
        project(
            "Nexo Kanban",
            "React, TypeScript, Node.js, Prisma, Socket.io",
            "Aplicação full stack publicada com autenticação JWT, quadros, listas, cartões, histórico, WIP limit, arquivamento, atualizações em tempo real, testes, CI e deploy distribuído.",
            "https://github.com/auhauhbr/nexo-kanban",
        ),
        project(
            "AirVision",
            "React, FastAPI, Pandas, Plotly, SQLite, OpenAQ",
            "Dashboard publicado de qualidade do ar com médias móveis, anomalias, tendência anual, conformidade OMS, heatmap, cache e exportação CSV.",
            "https://github.com/auhauhbr/AirVision-qualidade-do-ar",
        ),
        project(
            "Trilum Conecta - Coday 2026.1",
            "React, Vite, JavaScript, regras locais",
            "Plataforma de transição de carreira com diagnóstico, recomendações explicáveis, radar de prontidão, currículo, vagas e dossiê. Membro destaque do evento.",
            "https://github.com/auhauhbr/Trilum-Conecta",
        ),
        project(
            "Rastreador de Preços",
            "Python, BeautifulSoup, SQLite, Pandas, Streamlit",
            "Automação para cadastrar produtos, coletar preços, manter histórico, comparar lojas, classificar promoções, enviar alertas e visualizar dados em dashboard.",
            "https://github.com/auhauhbr/rastreador-precos",
        ),
        project(
            "GameLegenda",
            "C#, .NET 9, WPF, OCR local do Windows",
            "Protótipo desktop que captura textos de jogos, reconhece por OCR, utiliza cache e glossário e exibe traduções em overlay transparente.",
            "https://github.com/auhauhbr/Projeto-Gamet---GameLegenda",
        ),
        section("Formação"),
        Paragraph(
            "<b>Análise e Desenvolvimento de Sistemas</b> - Universidade Tiradentes (Unit)<br/>ago/2025 a dez/2027 - cursando, turno da noite",
            styles["small"],
        ),
        Paragraph(
            "<b>Técnico em Desenvolvimento de Sistemas</b> - ETE Advogado José David Gil Rodrigues<br/>2020 a 2023 - concluído",
            styles["small"],
        ),
        section("Idiomas"),
        Paragraph(
            "<b>Português:</b> nativo.  <b>Inglês:</b> básico, com leitura de documentação técnica por contexto e apoio de ferramentas.",
            styles["small"],
        ),
    ]

    right = [
        section("Destaques"),
        Paragraph(
            "<b>Coday 2026.1:</b> apresentação do Trilum Conecta no Porto Digital e reconhecimento como membro destaque.",
            styles["sidebar"],
        ),
        Paragraph(
            "<b>Estudos técnicos:</b> Termu RPG em C++17 e exercícios de orientação a objetos e SQLite em Python.",
            styles["sidebar"],
        ),
        section("Reconhecimento - Porto Digital"),
        Paragraph(
            "<b>Membro Destaque - RISE UP 2026.1</b><br/>"
            "Certificado concedido em reconhecimento ao comprometimento, evolução e participação exemplar durante a Residência Tecnológica. Assinado por Pierre Lucena, Presidente do Porto Digital.",
            styles["sidebar"],
        ),
        section("Certificados - Fundação Bradesco"),
        Paragraph(
            "<b>Escola Virtual</b><br/>"
            "• Projetos de Sistemas de TI<br/>"
            "• Trilha Banco de Dados - 38h<br/>"
            "• Administrando Banco de Dados - 15h<br/>"
            "• Implementando Banco de Dados - 15h<br/>"
            "• Modelagem de Dados - 8h<br/>"
            "• Linguagem de Programação Python - Básico",
            styles["sidebar"],
        ),
        section("Cursos - Udemy"),
        Paragraph("DESENVOLVIMENTO WEB E FRONT-END", styles["sidebar_heading"]),
        Paragraph(
            "• Desenvolvimento Web Compacto e Completo<br/>"
            "• Web Frontend: HTML, CSS e JavaScript + projetos<br/>"
            "• Frontend Completo: HTML, CSS, JS, TS, React e Next<br/>"
            "• Desenvolvimento Web Completo - 20 cursos + projetos",
            styles["sidebar"],
        ),
        Paragraph("PYTHON, JAVA E BANCO DE DADOS", styles["sidebar_heading"]),
        Paragraph(
            "• Python 3 do básico ao avançado<br/>"
            "• Java COMPLETO: POO + projetos<br/>"
            "• Java Moderno: Spring Boot, IA e projetos<br/>"
            "• Banco de Dados e SQL completo<br/>"
            "• Introdução a Banco de Dados e SQL<br/>"
            "• Aprendendo SQL do zero<br/>"
            "• Fundamentos de Banco de Dados e SQL<br/>"
            "• MySQL e PHPMyAdmin<br/>"
            "• Bancos SQL e NoSQL do básico ao avançado",
            styles["sidebar"],
        ),
        Paragraph("JOGOS E PROJETOS COMPLEMENTARES", styles["sidebar_heading"]),
        Paragraph(
            "• Godot 4.6+: RPG completo<br/>"
            "• Jogos 2D na Unity com C#",
            styles["sidebar"],
        ),
        section("Conhecimentos complementares"),
        Paragraph(
            "C#/.NET/WPF, C++17, Java, PHP básico, Django, PySide6, Selenium, jQuery, WordPress, Laravel, Spring Boot, Hibernate, MongoDB, Godot e Unity.",
            styles["sidebar"],
        ),
    ]
    return left, right


def generate():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)

    width, height = A4
    margin = 12 * mm
    top = height - 36 * mm
    bottom = 12 * mm
    gap = 7 * mm
    sidebar_width = 60 * mm
    left_width = width - (2 * margin) - gap - sidebar_width

    left_frame = Frame(
        margin,
        bottom,
        left_width,
        top - bottom,
        leftPadding=0,
        rightPadding=2 * mm,
        topPadding=0,
        bottomPadding=0,
        id="left",
    )
    right_frame = Frame(
        margin + left_width + gap,
        bottom,
        sidebar_width,
        top - bottom,
        leftPadding=4 * mm,
        rightPadding=1 * mm,
        topPadding=0,
        bottomPadding=0,
        id="right",
        showBoundary=0,
    )

    def page_background(canvas, doc):
        header(canvas, doc)
        canvas.saveState()
        canvas.setFillColor(SOFT)
        canvas.rect(
            margin + left_width + gap - 2 * mm,
            bottom,
            sidebar_width + 3 * mm,
            top - bottom,
            fill=1,
            stroke=0,
        )
        canvas.restoreState()

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=36 * mm,
        bottomMargin=12 * mm,
        title="Currículo - Jefferson Tadeu dos Santos",
        author="Jefferson Tadeu dos Santos",
        subject="Desenvolvedor Full Stack Júnior",
    )
    doc.addPageTemplates(
        [
            PageTemplate(
                id="resume",
                frames=[left_frame, right_frame],
                onPage=page_background,
            )
        ]
    )

    left, right = build_story()
    story = left + [FrameBreak()] + right
    doc.build(story)
    PUBLIC.write_bytes(OUTPUT.read_bytes())


if __name__ == "__main__":
    generate()
