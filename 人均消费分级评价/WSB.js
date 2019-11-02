const where = ['曙光路',
    '鳌峰路',
    '鳌江路',
    '曙光支路']

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
        fs.writeFileSync("sp1/WSB.json", JSON.stringify(ans));
    })