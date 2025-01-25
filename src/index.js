// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き"
// console.log(val1);

// var val1 = "var変数の再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // 再宣言はエラー
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 =  "const変数の上書き";

// const val3 = "const変数の再宣言"

// const val4 = {
//     name: "JUN",
//     age: 32
// }
// val4.name = "jun";
// val4.address = "Tokyo";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "JUN";
// const age = 32;

// const message1 = "私の名前" + name + "はです。年齢は" + age + "歳です。"
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です!`
// console.log(message2);

// function func1(str) {
//     return str;
// }
// const func1 = function (str){
//     return str;
// }
// console.log(func1("func1です"));

// const func2 = str => str;
// console.log(func2("func2です"));

// const func3 = (str1, str2) => ({
//     hoge: str1,
//     fuga: str2,
// });
// console.log(func3(1,2));

// const myProfile = {
//     name: "JUN",
//     age: 32
// }
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です!`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です!!!`
// console.log(message2);

// const myProfile = ["JUN", 32];
// // const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`)
// sayHello("JUN");

// const myProfile = {
//     age: 32
// }
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

// const name = "JUN";
// const age = 32;

// const myProfile = { name, age }

// console.log(myProfile);

// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5]
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

const nameArr = ["小野", "高塩", "新木"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index +1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// nameArr.map((name, index) => console.log(`${index +1}番目は${name}です`));
// console.log(nameArr2);

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num %2 ===1;
// })
// console.log(newNumArr);

const newNumArr = nameArr.map((name)=> {
    if(name === "新木"){
        return name;
    } else {
        return `${name}さん`
    }
})
console.log(newNumArr);