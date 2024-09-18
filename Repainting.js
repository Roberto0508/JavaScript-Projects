function repainting(input){
    let naylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);

    let additionalPaintQuantity = 0.10 * paintQuantity;
    let totalPaintQuantity = paintQuantity + additionalPaintQuantity;

    let totalNaylonQuantity = naylonQuantity + 2;

    let naylonPrice = totalnaylonQuantity * 1.50;
    let paintPrice = totalpaintQuantity * 14.50;
    let thinnerPrice = thinnerQuantity * 5.00;

    let totalMaterialPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;
    
    let workPricePerHpur = 0.30 * totalMaterialPrice;
    let totalWorkPrice = workTime * workPricePerHour;

    let totalPrice = totalMaterialPrice + totalWorkPrice;

    console.log(totalPrice);
}

repainting("10", "11", "4", "8");