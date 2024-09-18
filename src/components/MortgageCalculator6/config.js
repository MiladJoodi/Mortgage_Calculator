export function numberWithCommas(x){
    if(x) return `$ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

// console.log(number.toString().replace(/B(?=(d{3})+(?!d))/g, ','))
