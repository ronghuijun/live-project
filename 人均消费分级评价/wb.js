const where = ['西二环南路',
    '工业路',
    '白马南路',
    '怡园路',
    '坂祥路',
    '康城路',
    '宁化路',
    '交通西路']

const fs = require("fs")
const csv = require('csvtojson')
let ans = []
csv()
    .fromFile("1.csv")
    .then((json) => {
        for (let i in json) {
            let a = json[i]
            for (let j in where)
                if (a.address.split(where[j]).length > 1) {
                    ans.push(json[i]);
                }
        }
        fs.writeFileSync("sp1/WB.json", JSON.stringify(ans));
    })