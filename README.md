# Teste Técnico Cidade Alta

Este é um projeto desenvolvido para servir de teste técnico para a vaga de Desenvolver Frontend na Cidade Alta RP. O projeto foi desenvolvido usando React, Redux, Styled Components e Ant Design

## Sumário

- [Como iniciar](#como-iniciar)
- [O que eu utilizei nesse app](#o-que-eu-utilizei-nesse-app)
- [Como eu organizei esse código](#como-eu-organizei-esse-codigo)
- [Features que não consegui implementar](#bugs-e-features-que-nao-consegui-implementar)
- [Considerações finais](#consideracoes-finais)

## Como iniciar

Você vai precisar realizar o download e instalar o [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) para conseguir rodar a aplicação.

#### Faça a clonagem desse repositório

`git clone https://github.com/wallmartins/teste-tecnico-cidade-alta`

#### Entre na pasta do projeto

`cd teste-tecnico-incentivme`

### Instale todas as dependências

`npm install`

ou

`yarn`

#### Rode o projeto

`npm start `

ou

`yarn start`

Por padrão, o acesso a aplicação está configurado para abrir em [http://localhost:3000](). Se você quiser mudar a porta na qual abrirá o projeto, basta rodar o programa abaixo:

`CVA_PORT=[PORT_VALUE] npm start`

ou

`CVA_PORT=[PORT_VALUE] yarn start`

## O que eu utilizei nesse app

#### React e React Hooks

O uso da biblioteca React foi para desenvolver todo o core da aplicação, criando todos os componentes que a compõe. Dentre os Hooks, os principais foram useState e useEffect.

#### Redux

Redux foi utilizado para realizar todo o gerenciamento de estados globais da aplicação, fazendo uso do store, reducers e middleware para poder servir toda a aplicação com as informações que eram buscadas ou enviadas para a API.

#### React-router-dom

Foi utilizado para poder realizar desenvolver as rotas da aplicação, assim como criar os links para que os botões direcionassem o usuário para essas rotas sem que ficasse recarregando a aplicação.

#### moment-timezone

Biblioteca escolhida para poder realizar a conversão do padrão que a data e hora vinha do banco de dados, ela vinha em um formato de string toda junta e com o timezone UTC, utilizei a biblioteca moment não somente para formatar a string para que preenchesse corretamente as strings, mas também para converter a timezone de UTC para GMT-3 que é o fuso horário de Brasilia.

#### Styled Components e Ant Design

Como um dos pré-requisitos do teste, fiz o uso para poder estilizar os componentes da aplicação, mesmo que não houvesse um design para ser seguido, tentei desenvolver algo que pudesse ser bonito e simples, visto que o tempo não era tão grande assim para criar um design mais rebuscado e depois desenvolver a aplicação. O Ant Design foi escolhido, pois já detém alguns componentes bem estruturados e traz funcionalidades importantes como a validação de formulário, facilitando o desenvolvimento e agilizando na parte visual da aplicação, visto que já tem uma pré-configuração já feita por eles. Ainda assim, utilizei do Styled Components para estilizar algumas especificações, tamanhos, cores e afins que eram mais particulares da aplicação.

## Como eu organizei o código

Desenvolvi o código criando pastas por funcionalidade/finalidade:

- **Components**: contém todo o conteúdo relacionado aos componentes e os componentes em si, separados em pasta onde cada um tem relação com o outro;
- **Pages**: contém todas as páginas que compõe o corpo da aplicação, cada qual identificada com o seu nome;
- **Routes**: contém o arquivo routes com todas as rotas da aplicação definidas ali;
- **Store**: contém toda a organização dos reducers, rotas de request para a API, a configuração do store do reducer e uma pasta helper que tem um custom CreateSlice. A criação dele se dá para a realização de requisições assíncronas e para facilitar na criação dos reducers, tornando mais prática na hora de desenvolver cada um e configurá-los, não precisando realizar um trabalho repetitivo em todos eles, já que existe uma estrutura padrão, mas ainda assim versátil, pois aceita novas configurações, caso necessário;
- **Img**: contém as imagens e ícones que foram utilizadas no teste;

Comentando um pouco mais sobre a organização dos arquivos e nomenclaturas, principalmente na pasta de components. Todos os arquivos que são um componente possui um arquivo de style próprio, onde eu prefiro escolher seguir o padrão de colocar o nome do arquivo com o nome do componente que vou usar, por exemplo, Form e, o nome do arquivo de styles, utilizando o nome formStyle. A escolha por esse padrão de organização vem por acreditar que, caso o projeto escale para algo muito grande, torna-se muito mais fácil achar esse componente e o seu arquivo de estilo, apenas procurando pelo nome dele.

## Considerações Finais

- Um dos maiores desáfios dentro desse teste foi realizar a autenticação de usuário no login, visto que a fake Rest API do my-json-server não possuí um Auth dele, então eu tive que realizar um processo adaptativo para que ele fizesse uma verificação se o usuário e senha existiam no banco de dados. Por conta disso a rota de user está com GET e não POST, visto que a realização de uma request de POST para a API, que seria o padrão para realizar um Auth, não realizava o processo de Auth, ela criava um usuário novo, dessa forma, não me tinha nenhuma utilidade quando o propósito era verificar um usuário. Dessa forma, realizei um processo de fazer uma requisição que pegava todos os usuários, eu realizo um filter dentre eles comparando com o input passado pelo usuário e, a partir disso, tendo um match, eu faço uma request de get com o id daquele usuário. Utilizando os dados dessa segunda request, eu faço um ternário nas rotas para validar se o usuário pode seguir para a aplicação ou não. O contra disso é que eu não consigo ter um retorno para o usuário quando ele digita um dado errado, não consegui encontrar uma forma de fazer isso. No entanto, sei que com um processo de Auth no backend, esse processo seria bem mais facilitado, porque a request de POST me voltaria a mensagem de erro, daí seria apenas fazer um try/catch e tudo estaria resolvido.
- Por conta também da API, não consigo fazer com que as requisições de POST, PUT ou DELETE surtam algum efeito nas informações que são mostradas na aplicação, visto que como nenhuma delas, de fato, faz uma mudança no banco de dados, eu não tenho como puxar essas mudanças para mostrar. Entretanto, todas as rotas estão funcionando e enviando os dados corretamente.
- Por falta de tempo, optei por não criar componentes separados para os inputs e button, mas sei que no ideal seria melhor separar os componentes em arquivos próprios e reutilizáveis. Assim como a table ficou toda em um componente só, mas acredito que daria para quebrar em pequenos pedaços que viria a ser melhor, mas o tempo acabou ficando pequeno para desenvolver.
- Este foi um teste muito enriquecedor pra mim, não importando o resultado. Me desafiei a usar o Ant Design aliado ao Styled Components para poder desenvolver toda a interface da aplicação. Mesmo que, de início, parecia ser um CRUD simples, consegui aprofundar ainda mais os conhecimentos de React e Redux enquanto desenvolvia o teste.
