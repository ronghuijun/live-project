const fs = require("fs")
const csv=require('csvtojson')
let ans = []
csv()
.fromFile("1.csv")
.then((json)=>{
    for(let i in json){
        let a = json[i]
        if(a.avgprice>=200 ){
            ans.push({title:a.title,mark:count(a.avgscore,a.comments,a.avgprice),avg:a.fornting,web:a.detil});
        }
    }
    ans.sort((a,b)=>{
        return b.mark - a.mark;
    })
    fs.writeFileSync("200.json",JSON.stringify(ans));
})

function count(mark,comment,price){
    return (comment/4000+mark)/price
}