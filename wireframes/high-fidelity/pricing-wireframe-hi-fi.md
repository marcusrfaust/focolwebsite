# Wireframe de Alta Fidelidade: Página de Preços Focol

**Data:** 7 de maio de 2025  
**Status:** Em desenvolvimento

## Visão Geral

Este documento apresenta o wireframe de alta fidelidade para a página de Preços do novo site da Focol, com especificações detalhadas para implementação. O design segue a linguagem visual estabelecida nos outros wireframes de alta fidelidade.

## Layout Desktop (1440px)

### 1. Header/Navegação
- **Especificações:** Idênticas ao wireframe de alta fidelidade da página inicial
- **Estado ativo:** Item "Preços" com indicador ativo (underline #5E17EB 2px)

### 2. Título da Página e Toggle de Preços
- **Padding:** 96px 64px 64px
- **Background:** Gradiente sutil de #FFFFFF para #F8F8F8
- **Layout:** Texto centralizado com toggle abaixo
- **Elementos:**
  - **Título:** "Planos e Preços" (Montserrat Bold, 48px, #0A0A0A)
  - **Subtítulo:** "Escolha o plano ideal para sua necessidade e comece a transformar seu atendimento hoje mesmo" (Inter Regular, 20px, #606060), máximo de 2 linhas
  - **Toggle de pagamento:**
    - Dimensões: 240px x 48px
    - Background: #F8F8F8
    - Border: 1px solid #E0E0E0
    - Border-radius: 24px
    - Opções: "Mensal | Anual (Economize 20%)"
    - Estado ativo: Background #5E17EB, texto #FFFFFF
    - Transição: 0.3s ease-in-out

### 3. Tabela de Planos Principais
- **Padding:** 0 64px 64px
- **Layout:** 3 colunas com larguras iguais (380px), espaçamento de 24px
- **Planos:**
  
  #### Plano Básico
  - **Dimensões:** 380px x 640px
  - **Background:** #FFFFFF
  - **Borda:** 1px solid #E0E0E0
  - **Border-radius:** 12px
  - **Sombra:** 0px 8px 24px rgba(0, 0, 0, 0.06)
  - **Padding interno:** 32px
  - **Elementos:**
    - **Título:** "Básico" (Montserrat Bold, 24px, #0A0A0A)
    - **Descrição:** "Ideal para pequenos negócios começando a unificar canais" (Inter Regular, 16px, #606060)
    - **Preço:** "R$ 149/mês" (Montserrat Bold, 36px, #0A0A0A)
    - **Preço anual:** "ou R$ 1.429/ano" (Inter Regular, 16px, #606060)
    - **CTA:** "Escolher Plano Básico" (Botão Secundário, width 100%, height 48px)
    - **Lista de recursos:** 8-10 itens com ícones de verificação (✓)
    - **Recursos não incluídos:** 3-4 itens com ícone diferenciado (×)
  
  #### Plano Pro (Destacado)
  - **Dimensões:** 380px x 680px (ligeiramente mais alto que os outros)
  - **Background:** #FFFFFF
  - **Borda:** 2px solid #5E17EB
  - **Border-radius:** 12px
  - **Sombra:** 0px 12px 32px rgba(94, 23, 235, 0.1)
  - **Badge:** "Mais Popular" (posicionado no topo)
  - **Padding interno:** 32px
  - **Elementos:**
    - **Título:** "Pro" (Montserrat Bold, 24px, #0A0A0A)
    - **Descrição:** "Para empresas em crescimento que buscam automação avançada" (Inter Regular, 16px, #606060)
    - **Preço:** "R$ 299/mês" (Montserrat Bold, 36px, #0A0A0A)
    - **Preço anual:** "ou R$ 2.869/ano" (Inter Regular, 16px, #606060)
    - **CTA:** "Escolher Plano Pro" (Botão Primário, width 100%, height 48px)
    - **Lista de recursos:** Todos os do plano Básico + 6-8 recursos adicionais

  #### Plano Enterprise
  - **Dimensões:** 380px x 640px
  - **Background:** #FFFFFF
  - **Borda:** 1px solid #E0E0E0
  - **Border-radius:** 12px
  - **Sombra:** 0px 8px 24px rgba(0, 0, 0, 0.06)
  - **Padding interno:** 32px
  - **Elementos:**
    - **Título:** "Enterprise" (Montserrat Bold, 24px, #0A0A0A)
    - **Descrição:** "Soluções sob medida para grandes operações" (Inter Regular, 16px, #606060)
    - **Preço:** "Entre em contato" (Montserrat Bold, 28px, #0A0A0A)
    - **Preço anual:** "para precificação personalizada" (Inter Regular, 16px, #606060)
    - **CTA:** "Falar com Vendas" (Botão Secundário, width 100%, height 48px)
    - **Lista de recursos:** Benefícios exclusivos como "Canais ilimitados", "Suporte dedicado", etc.

### 4. Comparação Detalhada de Recursos
- **Padding:** 96px 64px
- **Background:** #F8F8F8
- **Layout:** Tabela com 4 colunas (Recurso, Básico, Pro, Enterprise)
- **Elementos:**
  - **Título da seção:** "Comparação Detalhada de Recursos" (Montserrat Bold, 36px, centralizado)
  - **Cabeçalho da tabela:** Background #FFFFFF, texto Montserrat Bold, 18px
  - **Linhas:** Alternância sutil de background (#FFFFFF e #F8F8F8)
  - **Células:** Padding 16px, alinhamento centralizado para as colunas de planos
  - **Indicadores:** ✓ (verde #4CAF50) para incluído, × (cinza #B0B0B0) para não incluído
  - **Categorias de recursos:**
    - Canais e Integrações
    - Automação e Chatbots
    - CRM e Analytics
    - Gestão de Equipes
    - Suporte e Onboarding
  - **Toggle de expansão:** Expandir/contrair categorias (+ / -)

### 5. FAQ de Preços
- **Padding:** 96px 64px
- **Background:** #FFFFFF
- **Layout:** Duas colunas de perguntas (1 coluna em mobile)
- **Elementos:**
  - **Título da seção:** "Perguntas Frequentes sobre Preços" (Montserrat Bold, 36px, centralizado)
  - **Perguntas:** 6-8 perguntas comuns
    - Estilo de acordeão (clique para expandir/contrair)
    - Título da pergunta (Montserrat Bold, 18px)
    - Resposta (Inter Regular, 16px, #606060)
    - Borda inferior sutil (1px, #E0E0E0)
    - Ícone de expansão (+/-)
  - **Perguntas sugeridas:**
    - "Posso mudar de plano a qualquer momento?"
    - "Existe contrato de fidelidade?"
    - "Quais formas de pagamento são aceitas?"
    - "O que acontece após o período de teste gratuito?"
    - "Posso personalizar meu plano?"
    - "Como funciona o suporte técnico?"

### 6. CTA de Suporte/Dúvidas
- **Padding:** 64px
- **Background:** #F8F8F8
- **Border-radius:** 12px
- **Sombra:** Interna, muito sutil
- **Layout:** Seção centralizada com título e CTAs
- **Elementos:**
  - **Título:** "Ainda tem dúvidas?" (Montserrat Bold, 28px, #0A0A0A)
  - **Subtítulo:** "Fale com nosso especialista para encontrar o plano perfeito." (Inter Regular, 18px, #606060)
  - **Botões:**
    - Primário: "Agendar uma Demonstração" (Botão Primário, 220px x 48px)
    - Secundário: "Entre em Contato" (Botão Secundário, 180px x 48px)
  - **Contato rápido:** Ícone de WhatsApp com número de contato

### 7. Footer
- **Especificações:** Idênticas ao wireframe de alta fidelidade da página inicial

## Layout Mobile (375px)

### Adaptações para Responsividade
- **Header:** Menu hamburger para navegação em tela pequena
- **Toggle de Preços:** Versão mais compacta, permanece funcional
- **Tabela de Planos:** 
  - Cards empilhados em uma coluna
  - Plano Pro permanece destacado
  - Swipe horizontal como alternativa para navegação entre planos
- **Comparação Detalhada:** 
  - Layout vertical com grupos expansíveis
  - Toggle para alternar entre planos (um visível por vez)
- **FAQ:** Uma coluna de perguntas
- **CTA Suporte:** Botões empilhados

## Interações Específicas

1. **Toggle de Pagamento:**
   - Animação suave ao alternar entre mensal e anual
   - Atualização instantânea dos preços em todos os planos
   - Destaque visual na economia ao selecionar pagamento anual

2. **Comparativo de Planos:**
   - Hover nos planos com elevação sutil
   - Tooltip com explicações detalhadas ao passar o mouse sobre recursos específicos
   - Indicador visual de "melhor valor" no plano recomendado

3. **Calculadora de ROI:**
   - Modal interativo acessado via botão "Calcule seu ROI"
   - Inputs para tamanho da equipe, volume de atendimentos, canais utilizados
   - Resultado com economia estimada de tempo e dinheiro

4. **FAQ Dinâmico:**
   - Expansão/contração suave das respostas
   - Busca em tempo real para filtrar perguntas relevantes
   - Feedback "Esta resposta foi útil?" ao final de cada item

## Especificações Técnicas

- **Framework:** Next.js
- **Estado global:** Para persistir seleção de planos e preferências
- **Responsividade:** Breakpoints em 1440px, 1024px, 768px, 375px
- **Performance:** Priorização de carregamento da tabela de preços
- **Acessibilidade:** Tabelas semânticas, contraste adequado, navegação por teclado

## Próximos Passos

1. Aprovação do wireframe de alta fidelidade
2. Definição final dos preços e características de cada plano
3. Criação de protótipo interativo no Figma com estados de hover, seleção e expansão
4. Implementação dos componentes reutilizáveis, especialmente para a tabela de comparação

---

*Este wireframe de alta fidelidade fornece especificações precisas para implementação da página de preços, mantendo consistência com o design geral do site.*