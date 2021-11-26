let arr = prompt(`Nhập cân nặng của mọi người ngăn cách nhau bởi dấu ","`)
let arrWeight = arr.split(",");
let sumWeight = [];
let sumWeight1 = 0;
let sumWeight2 = 0;
function WeightOfTeam(){
    for(let i = 0; i < arrWeight.length; i++){
    if (i % 2 == 0){
        sumWeight1 += Number(arrWeight[i])
        console.log("cay")
    } else {
        sumWeight2 += Number(arrWeight[i])
        console.log("ko cay")
    }
}
    sumWeight.push(sumWeight1);
    sumWeight.push(sumWeight2);
    alert(sumWeight)
}
WeightOfTeam()
