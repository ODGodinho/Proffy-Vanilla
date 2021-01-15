module.exports = {
    create: async function create(db, { proffyValue, classValue, classScheduleValues }) {

        let proffyId = await db.run(`
            INSERT INTO proffys (
                name,
                avatar,
                whatsapp,
                bio
            ) VALUES (
                "${proffyValue.name}",
                "${proffyValue.avatar}",
                "${proffyValue.whastapp}",
                "${proffyValue.bio}"
            ); 
        `);
        
        proffyId = proffyId.lastID;


        let ProffyClassId = await db.run(`
                INSERT INTO classes (
                    subject,
                    cost,
                    proffy_id
                ) VALUES (
                    "${classValue.subject}",
                    "${classValue.cost}",
                    "${proffyId}"
                )
        `);
        
        ProffyClassId = ProffyClassId.lastID;


        const insertedAllClassSchedule =  classScheduleValues.map((classSchedule) => {
            return db.run(`
                INSERT INTO class_schedule (
                    class_id,
                    weekday,
                    time_from,
                    time_to
                ) VALUES (
                    "${ProffyClassId}",
                    "${classSchedule.weekday}",
                    "${classSchedule.time_from}",
                    "${classSchedule.time_to}"
                )
            `);
        });

        await Promise.all(insertedAllClassSchedule);
    }
}