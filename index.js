const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 5;",
            "variable myVar = 5;",
            "myVar = 5;",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'querySelector()' faz em JavaScript?",
        respostas: [
            "Seleciona todos os elementos com uma determinada classe.",
            "Seleciona o primeiro elemento com uma determinada classe.",
            "Seleciona o último elemento com uma determinada classe.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do seguinte código?\nconsole.log(2 + '2' - 1);",
        respostas: [
            "21",
            "3",
            "22",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário de linha.",
            "' Este é um comentário de linha.",
            "/* Este é um comentário de linha. */",
        ],
        correta: 0
    },
    {
        pergunta: "O que a função 'parseInt()' faz em JavaScript?",
        respostas: [
            "Converte uma string em um número inteiro.",
            "Converte um número inteiro em uma string.",
            "Converte um número de ponto flutuante em um número inteiro.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o símbolo usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            "-",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever uma função anônima em JavaScript?",
        respostas: [
            "function() { }",
            "function myFunction() { }",
            "() => { }",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável que não pode ser alterada em JavaScript?",
        respostas: [
            "let",
            "var",
            "const",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('Input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

//coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
