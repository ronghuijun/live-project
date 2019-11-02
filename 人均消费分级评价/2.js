const where = ["八一七中路",
    '杨桥东路',
    '津泰路',
    '东街',
    '达明路',
    '南后街',
    '南后街步行街',
    '鼓屏路',
    '湖东路',
    '湖西路',
    '五四路',
    '东泰路',
    '津泰路',
    '福马路',
    '道山路',
    '湖滨路']

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
        fs.writeFileSync("sp1/东街口.json", JSON.stringify(ans));
    })