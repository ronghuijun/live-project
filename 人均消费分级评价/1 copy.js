const fs = require("fs")
const csv=require('csvtojson')
let ans = []
let sum = 0;
csv()
.fromFile("1.csv")
.then((json)=>{
    for(let i in json){
        let a = json[i]
        sum += +a.comments;
        // if(a.avgprice>200){
        //     ans.push({title:a.title,mark:count(a.avgscore,a.comments,a.avgprice)});
        // }
    }
    console.log(sum)
    // ans.sort((a,b)=>{
    //     return b.mark - a.mark;
    // })
    // fs.writeFileSync("200.json",JSON.stringify(ans));
})

function count(mark,comment,price){
    return (comment/4000+mark)/price
}