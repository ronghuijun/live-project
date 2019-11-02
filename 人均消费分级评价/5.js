const where = ["aqh","deh","djk","jrj","wb","wsb","wz"]

const fs = require("fs")
for(let i in where){
    let ans =[]
    let sun = 0;
    let size = 0;
    const json  = JSON.parse(fs.readFileSync(`./sp1/${where[i]}.json`))
    for(let j in json){
        // ans.push(count(json[j].avgscore,json[j].comments,json[j].avgprice))
        // console.log(json[j])
        sun+=count(json[j].avgscore,json[j].comments,json[j].avgprice);
        size++;
    }
    console.log(where[i]+":"+sun/size)
}


function count(mark,comment,price){
    if(+price)
     return (comment/4000+mark)/price*1000
    return 0;
}
