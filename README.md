# Website Institucional - Old Texas Steak House

## Integrantes da dupla
- Breno William Rocha Sales
- Alexandry Costa Silva

## Descrição do caso escolhido
A Old Texas é uma autêntica *Steak House* localizada na BR-040 (Valparaíso de Goiás), inspirada no estilo rústico e na culinária do Velho Oeste. O restaurante é especializado em cortes nobres na brasa, hambúrgueres artesanais e drinks exclusivos. O projeto foca em criar a presença digital da marca para atrair novos clientes e facilitar a comunicação.

## Necessidade identificada
Identificamos a falta de um site oficial, o que dificultava o acesso rápido a informações essenciais como o cardápio, localização exata e um canal estruturado para reservas de mesas. A ausência digital limitava a capacidade do restaurante de captar clientes que buscam opções gastronômicas na região através do Google.

## Público-alvo
O público abrange famílias, jovens adultos e entusiastas de churrasco da região que buscam uma experiência imersiva e gastronomia de qualidade. Esse público acessa a página, na maioria das vezes via smartphone, precisando encontrar rapidamente as especialidades do cardápio, conferir o ambiente pela galeria e reservar uma mesa.

## Objetivo do site
Funcionar como uma vitrine digital da Old Texas, apresentando a qualidade dos pratos por meio de uma identidade visual rústica, além de direcionar o visitante de forma rápida para a principal ação esperada: realizar uma reserva ou entrar em contato.

## Processo de desenvolvimento
O desenvolvimento foi focado em construir a interface de forma artesanal. Estruturamos o HTML de forma semântica e optamos por não usar o sistema de grid do Bootstrap, construindo todo o layout responsivo do zero utilizando CSS puro (Flexbox e Grid Layout). O JavaScript foi implementado em duas frentes: para criar dinamismo visual na primeira tela e para lidar com a experiência do formulário de reservas.

## Principais decisões do projeto
- **Estrutura HTML:** Utilização de tags semânticas (`<header>`, `<nav>`, `<section>`, `<footer>`) para garantir boa indexação pelos mecanismos de busca e clareza no código.
- **Organização Visual (CSS):** Criação de variáveis no `:root` para manter a paleta de cores consistente (Tons de madeira, vermelho rústico e textos escuros). Uso de texturas de madeira no background para criar a atmosfera de um "Saloon".
- **Responsividade Customizada:** Em vez de frameworks, utilizamos `@media queries` nativas (`max-width: 768px`) para reestruturar o cabeçalho, empilhar colunas de texto e redimensionar imagens em telas de celulares.

## Funcionalidade em JavaScript
Implementamos duas lógicas principais em JS puro (Vanilla JS):
1. **Carrossel de Fundo (Hero Banner):** Um script que altera dinamicamente a imagem de fundo da seção de "Boas-vindas" a cada 5 segundos (`setInterval`), permitindo também a navegação manual clicando nos indicadores pontilhados.
2. **Interceptação de Formulário:** Adicionamos um ouvinte de evento (`addEventListener`) no formulário de reservas que previne o comportamento padrão de recarregamento da página (`preventDefault()`), exibe um alerta de sucesso confirmando a mesa e, em seguida, limpa os campos usando `reset()`.

## Uso de Bootstrap
A decisão arquitetural foi depender o mínimo possível de frameworks de estilo para focar no aprendizado de CSS. Sendo assim, o Bootstrap foi utilizado **apenas para a base dos botões** (classe `.btn`), que posteriormente foram customizados com uma classe própria (`.botao`) para adequação ao tema do restaurante.

## Testes realizados
- **Responsividade:** Simulada nas ferramentas de desenvolvedor (DevTools) redimensionando a tela para verificar o comportamento dos *Media Queries* construídos no CSS.
- **Links e Navegação:** Verificação do *Scroll Smooth* (rolagem suave) dos links do menu que levam perfeitamente para as respectivas seções (`#especialidades`, `#reservas`).
- **JavaScript:** O intervalo de troca das imagens de fundo foi validado e o formulário foi testado para garantir que a página não recarregasse indevidamente antes de exibir o alerta ao usuário.

## Links
- Link do repositório: https://github.com/BrenoWIlliamBR/website-empresa-old-texas
- Link do site publicado: https://brenowilliambr.github.io/website-empresa-old-texas/

## Contribuição dos integrantes
- **Breno William Rocha Sales:** Desenvolvimento da estrutura HTML, codificação do layout utilizando CSS Flexbox/Grid, criação das funcionalidades em JavaScript (Carrossel e Formulário) e publicação do projeto.
- **Alexandry Costa Silva:** Definição da paleta de cores e tipografia (fontes Rye e Open Sans), pesquisa de assets (imagens e texturas), estruturação do conteúdo textual e apoio na estilização responsiva.
