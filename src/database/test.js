const PrffyModel = require("./Models/Proffy");
var Database = require("./database");
/**
 * 
 */
Database.then(async (db) => {
    const proffy = {
        name: "DragonsGamers",
        avatar: "https://avatars1.githubusercontent.com/u/8422396?s=460&u=3f96ebaadcd9b02535b987b982ebdcbee87c9743&v=4",
        whatsapp: "(00) 0 0000-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",


    };

    const class_proffy = {
        subject: "Quimica",
        cost: 20.00,
    };

    const class_schedule = [
        {
            weekday: 0,
            time_from: 120,
            time_to: 500,
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
    ];

    /* await PrffyModel.create(db, {
        proffyValue: proffy,
        classValue: class_proffy,
        classScheduleValues: class_schedule,
    }); */


    const AllProfys = await db.all("SELECT * FROM proffys");

    console.log(AllProfys);

    const proffysAndClasses = await db.all(
        `SELECT 
            *
        FROM
            proffys
        INNER JOIN classes ON
            classes.proffy_id = proffys.id
        WHERE classes.proffy_id = 1;
        `
    );

    console.log(proffysAndClasses);

    const ClassesSchedules = await db.all(
        `SELECT 
            *
        FROM
            class_schedule
        WHERE 
            class_schedule.class_id = 1 AND
            class_schedule.weekday = 1 AND
            class_schedule.time_from <= 820 AND class_schedule.time_to > 719 ;
        `
    );

    console.log(ClassesSchedules);

});