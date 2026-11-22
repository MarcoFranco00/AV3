1. Descrição da proposta
O CoffeeLab é uma aplicação Web desenvolvida com o objetivo de auxiliar pessoas interessadas no preparo de café. A plataforma reúne informações sobre diferentes métodos de preparo, permite cadastrar receitas próprias e oferece ferramentas para calcular a quantidade de água necessária e o custo de cada preparo.
Além disso, a aplicação utiliza APIs externas para consultar a temperatura de uma cidade e a cotação atual do dólar, oferecendo informações dinâmicas aos usuários.

2. Funcionalidades implementadas
A aplicação possui quatro páginas principais:

Início (index.html)
- Apresentação da plataforma e acesso às demais páginas.
- Consulta da temperatura atual de uma cidade.
- Sugestões de métodos de preparo de acordo com a temperatura.

Métodos (metodos.html)
- Apresentação de quatro métodos de preparo: V60, Prensa Francesa, AeroPress e Moka.
- Exibição de informações sobre proporção, moagem e tempo de preparo.
- Visualização do passo a passo de cada método por meio de janelas modais.

Receitas (receitas.html)
- Cadastro de receitas personalizadas.
- Seleção do método de preparo.
- Exibição das receitas cadastradas.
- Exclusão de receitas.
- Armazenamento dos dados utilizando LocalStorage do navegador.

Calculadora (calculadora.html)
- Cálculo da quantidade de água necessária com base na quantidade de café e na proporção escolhida.
- Cálculo do custo de cada preparo.
- Conversão do custo de reais para dólares utilizando a cotação atual.

3. APIs utilizadas
O projeto utiliza duas APIs externas para obter informações dinâmicas:

Open-Meteo
Utilizada na página inicial para consultar informações climáticas de uma cidade.
São utilizados dois serviços:
- Geocoding API: identifica a cidade informada e retorna suas coordenadas geográficas (latitude e longitude).
- Forecast API: utiliza as coordenadas obtidas para consultar a temperatura atual.
Os dados são utilizados para apresentar sugestões de métodos de preparo de café de acordo com a temperatura.
Links:
- https://geocoding-api.open-meteo.com/
- https://api.open-meteo.com/

AwesomeAPI
Utilizada na página Calculadora para consultar a cotação atual do dólar em relação ao real brasileiro (USD-BRL).
O valor retornado pela API é utilizado para converter o custo do preparo de café, permitindo visualizar o resultado tanto em reais quanto em dólares.
Link:
- https://docs.awesomeapi.com.br/api-de-moedas

4. Tecnologias utilizadas

- HTML5: estruturação das páginas.
- CSS3: estilização e identidade visual.
- JavaScript: implementação das funcionalidades e integração com APIs.
- Bootstrap 5.3.3: construção das interfaces, componentes e responsividade.
- LocalStorage: armazenamento das receitas cadastradas no navegador.
- APIs externas: Open-Meteo e AwesomeAPI.

5. Considerações finais
O CoffeeLab foi desenvolvido como parte da Atividade Avaliativa A3 da disciplina de Usabilidade, Desenvolvimento Web, Mobile e Jogos Digitais.
O projeto busca oferecer uma aplicação funcional, com navegação intuitiva, identidade visual consistente e recursos que auxiliam os usuários no preparo de café.
Por meio da utilização de HTML, CSS, JavaScript, Bootstrap e APIs externas, foram aplicados conceitos de desenvolvimento Web, responsividade, integração de serviços e experiência do usuário (UX).