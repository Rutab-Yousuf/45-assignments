let Ordinalnumbers: number[] =[1,2,3,4,5,6,7,8,9]
Ordinalnumbers.forEach(ordinalnumber => {
    let suffix = "th"
    if (ordinalnumber === 1){ 
suffix = 'st'
    }else if (ordinalnumber=== 2){
        suffix = "nd"
    }else if (ordinalnumber === 3){
        suffix = "rd"
    }
    console.log(`${ordinalnumber}${suffix}`);
} );

