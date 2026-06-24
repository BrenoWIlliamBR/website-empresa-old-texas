# website-empresa-old-texas
Website institucional desenvolvido para a Old Texas Steak House como projeto acadêmico do curso de Engenharia de Software.

## Integrantes da dupla
- Breno William Rocha Sales
- Alexandry Costa Silva

## Descrição do caso escolhido
A Old Texas é uma autêntica *Steakhouse* inspirada no estilo rústico e na culinária americana. O restaurante é especializado em cortes de carnes premium, defumação (pit smoker) e oferece um ambiente acolhedor. O projeto foca em consolidar a presença digital da marca para atrair novos clientes e facilitar a comunicação com os frequentadores assíduos.

## Necessidade identificada
Apesar de ter um bom público local, a Old Texas dependia exclusivamente das redes sociais para divulgação e atendimento. Identificamos a falta de um site oficial, o que dificultava o acesso rápido a informações essenciais como o cardápio atualizado com preços, localização exata, horários de funcionamento e um canal estruturado para reservas de mesas.

## Público-alvo
O público abrange jovens adultos, famílias e entusiastas de churrasco e culinária americana (faixa etária principal de 18 a 55 anos). Esse público acessa a página, na maioria das vezes via smartphone, precisando encontrar rapidamente o cardápio, conferir o endereço e entrar em contato para verificar a disponibilidade de mesas.

## Objetivo do site
O objetivo central do site é funcionar como uma vitrine digital da Old Texas, apresentando a qualidade dos pratos por meio de imagens, além de direcionar o visitante de forma rápida para a principal ação esperada: realizar uma reserva ou entrar em contato através dos links e formulários disponibilizados.

## Processo de desenvolvimento
Organizamos o trabalho dividindo as tarefas de estruturação visual e lógica. Iniciamos com um esboço da página (wireframe) e a definição de uma identidade visual rústica. Em seguida, montamos a base em HTML5 e aplicamos o framework Bootstrap para acelerar a construção do layout responsivo. Durante o desenvolvimento, decidimos aprimorar a seção de contato, adicionando validação em JavaScript para garantir uma melhor experiência do usuário e evitar envios de formulários em branco.

## Principais decisões do projeto
- **Estrutura HTML:** Utilização rigorosa de tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`) para garantir boa indexação pelos mecanismos de busca (SEO) e organização do código.
- **Organização Visual:** Escolhemos uma paleta de cores baseada em tons escuros (preto, madeira e vermelho) para transmitir a atmosfera imersiva de uma verdadeira *steakhouse* texana.
- **Responsividade e Bootstrap:** Priorizamos o conceito de *Mobile First*. O uso do sistema de Grid do Bootstrap garantiu que a exibição do cardápio e das seções não quebrasse em telas menores.
- **Acessibilidade:** Todas as imagens dos pratos e do ambiente contam com o atributo `alt` descritivo, além da manutenção de um alto contraste entre a cor do texto e o fundo escuro.

## Funcionalidade em JavaScript
Foi implementada uma funcionalidade de validação no formulário de contato/reservas. O script atua capturando o evento de envio (`submit`) do formulário e verifica, em tempo real, se os campos obrigatórios foram preenchidos corretamente. Caso haja algum erro, ele exibe um alerta visual no site, impedindo o envio de dados vazios. Essa funcionalidade foi escolhida para melhorar a interatividade da página e evitar frustrações do usuário.

## Uso de Bootstrap
O Bootstrap foi escolhido pela agilidade e padronização visual. Utilizamos diversos recursos nativos, destacando-se:
- **Navbar:** Para criar o menu de navegação no topo, utilizando o recurso de colapso (*menu hambúrguer*) em dispositivos móveis.
- **Sistema de Grid (Container, Row, Col):** Para alinhar perfeitamente os itens do cardápio e as informações do rodapé lado a lado em telas grandes, e empilhados em celulares.
- **Classes Utilitárias:** Uso intenso de classes de margem, preenchimento (`m-`, `p-`), alinhamento de texto e botões estilizados (`btn-dark`, `btn-danger`) que harmonizaram com o tema.

## Testes realizados
- **Responsividade:** O site foi testado nas ferramentas de desenvolvedor (DevTools) do navegador, simulando telas de diferentes celulares (iPhone, Samsung Galaxy) e monitores ultrawide.
- **Links e Imagens:** Todos os links de âncora do menu (que rolam a página para a seção correspondente) e atributos das imagens foram checados manualmente.
- **JavaScript:** O formulário foi testado repetidas vezes com dados em branco e formatos incorretos para garantir que os alertas de erro fossem disparados corretamente.
- **Deploy:** O funcionamento geral foi validado diretamente pela URL final publicada no GitHub Pages.

## Links
- Link do repositório: https://github.com/BrenoWIlliamBR/website-empresa-old-texas
- Link do site publicado: https://brenowilliambr.github.io/website-empresa-old-texas/

## Contribuição dos integrantes
- **Breno William Rocha Sales:** Responsável pela arquitetura do HTML, lógica de programação da validação em JavaScript, configuração inicial do repositório e deploy da aplicação no GitHub Pages.
- **Alexandry Costa Silva:** Responsável pela pesquisa de conteúdo da empresa, estruturação do Grid responsivo e componentes do Bootstrap, otimização das imagens (assets) e estruturação visual geral da página.
