let users = [
    {name: "Abdussamad", age: 30},
    {name: "Farhod", age: 30},
    {name: "Jasur", age: 30},
    {name: "Soyip", age: 30},
    {name: "Qodir", age: 30},
    {name: "Rustam", age: 30},
    {name: "Nurillo", age: 30},
    {name: "Samandar", age: 30},
];

let text = prompt("Kimni qidiryapsiz?");
let isDefined = false;

for(let i = 0; i < users.length; i++) {
    let userText = users[i].name.slice(0, text.length);

    if(userText === text) {
        isDefined = true;
        console.log(users[i]);
    }
}

if(!isDefined) {
    console.log("Bunday foydalanuvchi topilmadi!");
}
