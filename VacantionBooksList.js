function vacantionBooksList(input){
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalHoursNeeded = pagesCount / pagesPerHour;
    let hoursPerDay = totalHoursNeeded / daysCount;

    console.log(hoursPerDay);
}

vacantionBooksList("212", "20", "2");