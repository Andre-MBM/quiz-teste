const perguntas = [
    {
        pergunta: "Qual é o principal órgão responsável pelo controle da pressão arterial?",
        respostas: [
            "Pâncreas",
            "Rim",
            "Fígado"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o principal hormônio responsável pela regulação do metabolismo?",
        respostas: [
            "Insulina",
            "Cortisol",
            "Tiroxina"
        ],
        correta: 2
    },
    {
        pergunta: "Onde ocorre a maioria da absorção de nutrientes no trato gastrointestinal?",
        respostas: [
            "Estômago",
            "Intestino delgado",
            "Intestino grosso"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o principal componente do sangue responsável pelo transporte de oxigênio?",
        respostas: [
            "Hemácias",
            "Leucócitos",
            "Plaquetas"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o principal neurotransmissor envolvido na transmissão de sinais entre os neurônios?",
        respostas: [
            "Serotonina",
            "Dopamina",
            "Acetilcolina"
        ],
        correta: 2
    },
    {
        pergunta: "Onde ocorre a produção de insulina no corpo humano?",
        respostas: [
            "Pâncreas",
            "Fígado",
            "Baço"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o principal órgão responsável pela desintoxicação do corpo?",
        respostas: [
            "Pulmões",
            "Fígado",
            "Baço"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da estrutura responsável por filtrar o sangue e produzir a urina nos rins?",
        respostas: [
            "Néfron",
            "Alvéolo",
            "Vesícula"
        ],
        correta: 0
    },
    {
        pergunta: "O que é a homeostase?",
        respostas: [
            "O processo de formação de novas células",
            "O equilíbrio interno do corpo",
            "O transporte de nutrientes no sangue"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da estrutura responsável por regular a temperatura corporal?",
        respostas: [
            "Hipotálamo",
            "Tireoide",
            "Timo"
        ],
        correta: 0
    }
];

const quiz = document.querySelector("#quiz") 
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        dt.querySelector("span").textContent = resposta
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = intem.respostas.indexOf(resposta)
        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item())
            } 
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        quizItem.querySelector("dl").appendChild(dt)
    }

    quizItem.querySelector("dl dt").remove 

    quiz.appendChild(quizItem)
}