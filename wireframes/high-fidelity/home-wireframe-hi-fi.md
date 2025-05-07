# Wireframe de Alta Fidelidade: Página Inicial Focol

**Data:** 7 de maio de 2025  
**Status:** Em desenvolvimento

## Visão Geral

Este documento apresenta o wireframe de alta fidelidade para a página inicial do novo site da Focol, com especificações detalhadas para implementação. O design segue o guia de estilo definido e os princípios estabelecidos na estratégia de redesign.

## Layout Desktop (1440px)

### 1. Header/Navegação
- **Altura:** 80px
- **Background:** #FFFFFF
- **Sombra:** 0px 2px 10px rgba(0, 0, 0, 0.05)
- **Comportamento:** Fixo no topo com transição para versão condensada ao rolar
- **Elementos:**
  - Logo Focol (SVG, 140px x 40px)
  - Menu principal com espaçamento de 32px entre itens
  - Itens do menu: Montserrat Medium, 16px, #0A0A0A
  - Hover nos itens: Underline com 2px #5E17EB
  - Seletor de idioma: Toggle com opções PT/ES/EN (32px x 80px)

### 2. Hero Section
- **Altura:** 640px
- **Background:** Gradiente sutil de #FFFFFF para #F8F8F8
- **Layout:** Duas colunas (55% texto, 45% imagem) em desktop
- **Elementos:**
  - **Título:** "Unifique. Automatize. Escale." (Montserrat Bold, 56px, #0A0A0A)
  - **Subtítulo:** "Centralize todos os canais em uma única plataforma e transforme atendimentos em vendas" (Inter Regular, 20px, #606060), máximo de 2 linhas
  - **Descrição:** Parágrafo curto (Inter Regular, 16px, #606060), máximo de 3 linhas
  - **CTAs:**
    - Primário: "Agende uma demonstração" (Botão Primário, 180px x 48px)
    - Secundário: "Teste grátis por 14 dias" (Botão Secundário, 180px x 48px)
  - **Ilustração:** Animação lottie mostrando a convergência de canais, com transições suaves

### 3. Seção de Benefícios
- **Padding:** 96px 64px
- **Background:** #FFFFFF
- **Layout:** Grid de 4 cards (2x2 em tablet, 1x4 em mobile)
- **Título da seção:** "Principais Benefícios" (Montserrat Bold, 36px, centralizado)
- **Cards:**
  - **Dimensões:** 280px x 320px
  - **Espaçamento:** 24px entre cards
  - **Estrutura:** Ícone (64px x 64px), título (Montserrat Bold, 20px), descrição (Inter Regular, 16px), CTA "Saiba mais" (Inter Medium, 16px, #5E17EB)
  - **Background:** #FFFFFF
  - **Borda:** 1px solid #E0E0E0
  - **Border-radius:** 12px
  - **Sombra:** 0px 8px 24px rgba(0, 0, 0, 0.06)
  - **Hover:** Elevação (aumenta sombra para rgba(0, 0, 0, 0.1))

### 4. Seção Como Funciona
- **Padding:** 96px 64px
- **Background:** #F8F8F8
- **Layout:** Ilustração central com três blocos de passos abaixo
- **Título da seção:** "Como Funciona" (Montserrat Bold, 36px, centralizado)
- **Ilustração principal:** Interface da plataforma em mockup de laptop (max-width: 800px)
- **Passos:**
  - Layout de 3 colunas (1 coluna em mobile)
  - Numeração destacada (Montserrat Bold, 24px, #5E17EB)
  - Título do passo (Montserrat Bold, 20px)
  - Descrição curta (Inter Regular, 16px)
  - Transição: Leve animação ao entrar no viewport

### 5. Seção Para Quem
- **Padding:** 96px 64px
- **Background:** #FFFFFF
- **Layout:** 3 cards em desktop (flex para responsividade)
- **Título da seção:** "Para Quem é a Focol" (Montserrat Bold, 36px, centralizado)
- **Cards:**
  - **Dimensões:** 360px x 320px 
  - **Espaçamento:** 24px entre cards
  - **Estrutura:** Ícone (80px x 80px), título (Montserrat Bold, 24px), descrição (Inter Regular, 16px), CTA "Saiba mais" (Botão Terciário)
  - **Background:** #FFFFFF
  - **Borda:** 1px solid #E0E0E0
  - **Border-radius:** 12px
  - **Sombra:** 0px 8px 24px rgba(0, 0, 0, 0.06)

### 6. Seção Prova Social
- **Padding:** 96px 64px
- **Background:** #F8F8F8
- **Layout:** 2 depoimentos + logos de clientes
- **Título da seção:** "Clientes Satisfeitos" (Montserrat Bold, 36px, centralizado)
- **Depoimentos:**
  - **Dimensões:** 460px x 240px
  - **Estrutura:** Foto (80px x 80px, circular), aspas (ícone SVG), citação (Inter Italic, 18px), nome (Montserrat Bold, 16px), cargo/empresa (Inter Regular, 14px)
  - **Background:** #FFFFFF
  - **Border-radius:** 12px
  - **Sombra:** 0px 8px 24px rgba(0, 0, 0, 0.06)
- **Logos de clientes:**
  - Grid de 4 logos (2x2)
  - Logos em escala de cinza com hover colorido
  - Dimensões uniformes: 120px x 60px
- **CTA:** "Ver casos de sucesso" (Botão Terciário, centralizado)

### 7. CTA Final
- **Padding:** 96px 64px
- **Background:** Gradiente de #0A0A0A para #121212
- **Layout:** Texto centralizado com CTAs abaixo
- **Título:** "Transforme seu atendimento hoje" (Montserrat Bold, 36px, #FFFFFF)
- **Subtítulo:** "Implementação rápida, equipe de suporte dedicada e resultados desde o primeiro dia." (Inter Regular, 18px, #E0E0E0)
- **Botões:**
  - Primário: "Agende uma demonstração" (Botão Primário Invertido, 220px x 48px)
  - Secundário: "Teste grátis por 14 dias" (Botão Secundário Invertido, 220px x 48px)

### 8. Footer
- **Padding:** 64px 64px 32px
- **Background:** #FFFFFF
- **Borda superior:** 1px solid #E0E0E0
- **Layout:** Logo + 3 colunas de links + copyright
- **Elementos:**
  - Logo Focol (SVG, 140px x 40px)
  - Títulos das colunas (Montserrat Bold, 16px)
  - Links (Inter Regular, 14px, #606060)
  - Ícones de redes sociais (24px x 24px)
  - Copyright e disclaimers (Inter Light, 12px, #B0B0B0)
  - Links de políticas (Inter Regular, 12px, #606060, com underline no hover)

## Layout Mobile (375px)

### Adaptações para Responsividade
- **Header:** Menu hamburger para navegação em tela pequena
- **Hero Section:** Uma coluna, texto acima da imagem
- **Seção de Benefícios:** Cards empilhados em uma coluna
- **Como Funciona:** Passos empilhados em uma coluna
- **Para Quem:** Cards em uma coluna
- **Prova Social:** Slider para depoimentos, logos em grid 2x2
- **CTA Final:** Botões empilhados
- **Footer:** Seções empilhadas com acordeão para as categorias

## Micro-interações e Animações

1. **Scrolling:**
   - Elementos entram com fade-in e leve movimento de baixo para cima
   - Parallax sutil na Hero Section

2. **Hover States:**
   - Botões: Scale(1.05) com transição de 0.2s
   - Cards: Elevação suave (aumento da sombra)
   - Links: Underline com cor primária (#5E17EB)

3. **Animações de Página:**
   - Pré-carregador minimalista com logo Focol
   - Transições entre elementos com easing: cubic-bezier(0.25, 0.1, 0.25, 1)

## Especificações Técnicas

- **Framework:** Next.js
- **Animações:** Framer Motion
- **Responsividade:** Breakpoints em 1440px, 1024px, 768px, 375px
- **Lazy Loading:** Imagens e componentes pesados
- **Acessibilidade:** Labels apropriados, estrutura semântica HTML5, suporte a teclado

## Próximos Passos

1. Aprovação do wireframe de alta fidelidade
2. Criação de protótipo interativo no Figma
3. Desenvolvimento dos assets gráficos (ilustrações, ícones)
4. Implementação da estrutura de componentes em React

---

*Este wireframe de alta fidelidade expande o wireframe de baixa fidelidade anterior, adicionando especificações precisas de design para a implementação.*