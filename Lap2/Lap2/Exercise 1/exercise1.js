// Exercise 1
//1
var date = new Date();
var current_day = date.getDay();
var day_name = '';
switch (current_day) {
    case 0:
        day_name = "Sunday";
        break;
    case 1:
        day_name = "Monday";
        break;
    case 2:
        day_name = "Tuesday";
        break;
    case 3:
        day_name = "Wednesday";
        break;
    case 4:
        day_name = "Thursday";
        break;
    case 5:
        day_name = "Friday";
        break;
    case 6:
        day_name = "saturday";
}

console.log("Today is : "+day_name);

var time = new Date();
console.log(
"Current time is : "+time.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + " :" + time.getMinutes() + " :" +time.getSeconds()
);  

//4
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
console.log(isJsonString('{"name":"Adam","age":20}'));
console.log(isJsonString('{"name":"Adam",age:"20"}'));
console.log(isJsonString(null));

//5
const fs = require('fs')
const user = {
    id: 1,
    name: 'Nguyễn Quốc Huy',
    age: 20
}
const data = JSON.stringify(user)
fs.writeFile('user.json', data, err => {
    if (err) {
        throw err;
    }
    console.log('JSON data is saved.')
})
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const user = JSON.parse(data.toString())
    console.log(user);
})
