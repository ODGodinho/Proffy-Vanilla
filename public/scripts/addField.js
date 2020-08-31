const fieldTime = document.querySelector("#add-time");
const timeItem = document.querySelector(".schedule-item");
const scheduleItems = document.querySelector("#schedule-items");
fieldTime.addEventListener("click", addField);

function addField () {
    const fieldsScheduleClone = timeItem.cloneNode(true);
    scheduleItems.appendChild(fieldsScheduleClone);

    const fieldsInSchedule = fieldsScheduleClone.querySelectorAll('input');

    fieldsInSchedule.forEach(element => {
        element.value = "";
    });
}