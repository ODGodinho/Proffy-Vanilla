const proffys = [
    {
        name: "DragonsGamers",
        avatar: "https://avatars1.githubusercontent.com/u/8422396?s=460&u=3f96ebaadcd9b02535b987b982ebdcbee87c9743&v=4",
        whatsapp: "(00) 0 0000-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: 20.00,
        weekday: [
            0,
        ],
        time_from: [ 720 ],
        time_to: [ 1220 ],
    },
    {
        name: "Cabroinhas",
        avatar: "https://scontent.fplu9-1.fna.fbcdn.net/v/t1.0-9/1238959_604423736299019_907979568_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=4091Ysni6QoAX9iNqbq&_nc_ht=scontent.fplu9-1.fna&oh=15097c3c48fb92733f4c9142a1e6f6ba&oe=5F662902",
        whatsapp: "(00) 0 0000-0001",
        bio: "Mestre dos Gols a distancia",
        subject: "Rocktzeiro",
        cost: 20.00,
        weekday: [
            0,
        ],
        time_from: [ 720 ],
        time_to: [ 1220 ]
    },
];

const { weekdays, subjects } = require('./utils/global');
const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure([ "src/views" ], {
    express: server,
    noCache: true,
})

server
    .use(express.static("public"))

    .get("/", function (request, response) {
        return response.render("index.html");
    })
    .get("/study", function (request, response) {
        const filters = request.query
        return response.render("study.html", { proffys, filters, subjects, weekdays });
    })
    .get("/give-classes", function (request, response) {
        const data = request.query;

        const isNotEmpty = Object.keys(data).length > 0;

        if (isNotEmpty) {

            data.subject = subjects[ +data.subject - 1 ];
            // @ts-ignore
            proffys.push(data);

            return response.redirect("/study");
        }

        return response.render("give-classes.html", { subjects, weekdays });
    })

    .listen(5500);

console.log(__dirname);