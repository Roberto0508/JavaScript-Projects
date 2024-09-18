function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositMonths = Number(input[1]);
    let annualIncreasePercent = Number(input[2]);

    let finalSum = depositedSum + depositedMonths * ((depositedSum * annualIncreaseDecimal) / 12);

    let annualIncreaseDecimal = annualIncreasePercent / 100;

    console.log(finalSum);
}

depositCalculator(["200", "3", "5.7"]);