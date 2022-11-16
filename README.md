<h1 align="center">React, Angular e Vue</h1>
<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Angular" title="Angular" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" alt="Vue.js" title="Vue.js" /></code>
</div>
<h2 align="center">Analise Comparativa</h1>
    <h2>Propósito</h2>
    <p>Fazer um mesmo modelo de site, usando cada tecnologia afim de comparar a performance.</p>
 <img src = "https://user-images.githubusercontent.com/60969091/202261669-1de70dcb-ba0c-4507-a91f-3c94502fcd34.png" />
        <caption align="center">Figura 1 - Modelo de site</caption>
    <h2>Pré requisitos para instalação</h2>
    <div>
        <code><img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
    </div>
    <h2>Instalação</h2>
    <ul>
        <li>
            <h3>Angular</h3>
            <ul>
                <li>Entrar na pasta do Angular</li>
                <code>cd Angular</code>
                <li>Instalar o Angular CLI</li>
                <code>npm install -g @angular/cli</code>
                <li>Instalar as dependências</li>
                <code>npm install</code>
                <li>Iniciar o projeto</li>
                <code>ng serve</code>
            </ul>
        </li>
        <li>
            <h3>React</h3>
            <ul>
                <li>Entrar na pasta do React</li>
                <code>cd React</code>
                <li>Instalar as dependências</li>
                <code>npm install</code>
                <li>Iniciar o projeto</li>
                <code>npm start</code>
            </ul>
        </li>
        <li>
            <h3>Vue</h3>
            <ul>
                <li>Entrar na pasta do Vue</li>
                <code>cd Vue</code>
                <li>Instalar as dependências</li>
                <code>npm install</code>
                <li>Iniciar o projeto</li>
                <code>npm run serve</code>
            </ul>
        </li>
    </ul>
    <h2>
        Testes
    </h2>
    <h3>Ferramentas utilizadas: </h3>
    <p>Todas estão disponiveis na Chrome Web Store</p>
    <ul>
        <li>
            <h4>React</h4>
            <ul>
                <li>React Developer Tools</li>
            </ul>
        </li>
        <li>
            <h4>Vue</h4>
            <ul>
                <li>Vue.js devtools</li>
            </ul>
        </li>
        <li>
            <h4>Angular</h4>
            <ul>
                <li>Angular DevTools</li>
            </ul>
        </li>
    </ul>
    <h3>Teste de Performance</h3>
    <p>
        Para testar o desempenho na inserção foram inseridos 10, 100, 1000, 10000 e 100000 contatos.
    </p>
    <table>
        <tr>
            <th>Quantidade de contatos</th>
            <th>React</th>
            <th>Vue</th>
            <th>Angular</th>
        </tr>
        <tr>
            <td>10</td>
            <td>2.83ms</td>
            <td>1.70ms</td>
            <td>2.06ms</td>
        </tr>
        <tr>
            <td>100</td>
            <td>17.57ms</td>
            <td>5.63ms</td>
            <td>12.1ms</td>
        </tr>
        <tr>
            <td>1000</td>
            <td>103.8ms</td>
            <td>51.53ms</td>
            <td>64.47ms</td>
        </tr>
        <tr>
            <td>10000</td>
            <td>755.6ms</td>
            <td>398.37ms</td>
            <td>438.70ms</td>
        </tr>
        <tr>
            <td>100000</td>
            <td>7185.03ms</td>
            <td>3257.3ms</td>
            <td>4202,43ms</td>
        </tr>
    </table>
 <p>
        Para inserção, o Vue.js foi o mais rápido, seguido pelo Angular e React.
    </p>
