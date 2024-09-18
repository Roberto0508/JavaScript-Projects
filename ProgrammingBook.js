function ProgrammingBook(input) {
    let pagePrice = Number(input[0]);
    let coverPrice = Number(input[1]);
    let percentPaperDiscount = Number(input[2]);
    let designerPrice = Number(input[3]);
    let allPricePercent = Number(input[4]);

    let bookPages = 899;
    let bookCovers = 2;

    let startPrice = pagePrice * bookPages + coverPrice * bookCovers;
    let discountPrice = startPrice - percentPaperDiscount / 100;
    let payDesigner = discountPrice + designerPrice;
    let money = payDesigner - allPricePercent / 100;

    console.log(`Avtonom should pay ${money.toFixed(2)} BGN.`);
}

ProgrammingBook([
    "0.01",
    "1",
    "10",
    "20",
    "20"])