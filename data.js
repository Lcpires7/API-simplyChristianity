const { url } = require('inspector')
const path = require('path')

const allArticles = [
    {
        id: 1,
        title: "O que é o cristianismo",
        content: ` <p>Nesse artigo abordaremos sobre os temas mais importante quando se fala em cristianismo, e são eles:</p>
        <ul>
            <li><a href="">O que é o cristianismo?</a></li>
            <li><a href="">Origem do cristianismo</a></li>
            <li><a href="">História do cristianismo</a></li>
            <li><a href="">O que é e como ser um cristão?</a></li>
        </ul>
        <h2>O que é o cristianismo?</h2>
        <p>O cristianismo é uma religião de Origem judaica com mais de 2000 anos de existência, seu fundamento é a vida, morte e ressurreição do chamado Cristo, palavra grega para a palavra messias do hebraico que significa ungido. 
            Como mencionado antes, a religião em questão é de origem judaica, tendo até hoje os escritos judaicos canônicos, ou seja a tanahk, como uma bases para suas doutrinas de fé e prática, o que é conhecido como antigo testamento pelos seus membros. Juntando o antigo com o novo testamento - os quatros livros de Evangelho, o livro dos atos dos apóstolos, as cartas paulinas e gerais - temos a biblía cristã, com seus 66 livros e cartas.</p>
       
        <p>A difernça entre cristianismo e judaismo, pelo menos o judaismo ortodoxio, se dá pela interpretaçao a respeito da pessoa de Jesus de Nazaré. Sua vida, obras, morte e ressurreição são vista e interpretada de maneira especial pelos cristão que o consideram o messias judeu que haveria de vir, o qual os dois grupos acreditam ser profetizado por Deus através de Moisés e alguns profetas israelitas de tempos antigos e registrado nos escritos canônicos israelita.
            O outro grupo difere na maneira como o vê, os mais favoraveis ao mesmo o vêm como um profeta, os menos como um marginal. Também existem os judeus messianicos, que são os que acreditam em Jesus de Nazaré como sendo o messias.
        </p>
        <h2>Origem do cristianismo</h2>
        <p>Com dito a cima, o cristianismo surge apartir do judaismo. Durante o período do dominio do império romano sobre o oriente médio, quando os filhos de Herodes o grande governavam a judeia surge um homem judeu, nascido na cidade de belém mas crescido na de Nazaré, pregando sobre arrependimento e sobre o Reino dos Ceús além de realizar vários feitos milagrosos como transformar água em vinho durante um casamento, curar várias enfermidade e ainda ressucitar pessoas que já haviam morrido. Ele escolhe para si 12 homens que caminhariam com ele os 3 anos de seu ministério terreno, vendo todas as maravilhas que realizara, os quais futuramente se tornariam seus apóstolos e fundadores do cristianismo</p>
        <p>Após todo os seus feitos em prol do seu povo Jesus é detido pelas autoridades judaicas que não acreditavam e não se deixavam cativar pelas suas obras miraculosas, pelo contrário, o julgam entre si e depois o levam as autoridades romanas para que fosse julgado e condenado a morte, e morte de cruz, tamanho era a indignação dos mesmos, que não queriam somente vê-lo morrer, mas o queriam humilhado diante de todos.</p>
        `,
        category: "christianity",
        urlImg: ``,
        tags:  ""
    },
    {
        title: "Sobre o batismo",
        content: "",
        category: "christianity",
        urlImg: 'batismo.jpg',
        tags: " "
    },
    {
        title: "Sobre a santa ceia",
        content: "",
        category: "christianity",
        urlImg: 'santaCeia.jpg',
        tags: " "
    }
]

module.exports = allArticles