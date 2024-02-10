"use strict";
//ts to js use "node --watch dist/index.js"
//arrays
let names = ["Mario", "Luigi", "Peach"];
let ages = [23, 35, 21];
names.push("Bowser");
ages.push(34);
//type ingerence with arrays
let fruits = ["apple", "pears", "banana", "orange"];
fruits.push("peaches");
const f = fruits[3];
let thingss = [1, true, "hello"];
const t = thingss[0];
//objects literals
let user = {
    firstName: "John",
    age: 30,
    id: 1,
};
user.firstName = "Peach";
user.id = 2;
//type inference with object literals
let person = { name: "luigi", score: 35 };
person.name = "bowser";
person.score = 40;
const score = person.score;
//functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(6, 5);
subtractTwoNumbers(7, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
// addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
//return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("mario", "hello");
//any type
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
    hello: "world",
};
//any type in array
let things = ["hello", true, 30, null];
things.push({ id: 123 });
//funciton & any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
//useful when migration from js to ts
//because using any won't cause errors initially
//tuples
let person1 = ["mario", 30, true];
//tuples example
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [23.3, 23.4];
function useCoods() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoods();
//named tuples
let userr;
userr = ["peach", 25];
const authorOne = { name: "zaine", avator: "/img/zaine.png" };
const newPost = {
    title: "my first post",
    body: "Lorem ipsum dolor sit amet, consectetur adip",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
//as function argument types
function createPost(post) {
    console.log(`Created post  ${post.title} by ${post.author}`);
}
createPost(newPost);
//with array
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: "mario", score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(userOne);
formatUser({ name: "yoshi", score: 100 });
// union types
let someId;
someId = 1;
someId = "2";
let email = null;
email = "mario@netninja.dev";
email = null;
let anotherId;
// anotherId = undefined
anotherId = "1";
anotherId = 2;
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id;
}
function swapIdTypee(id) {
    if (typeof id === "string") {
        // can use string methods and properties
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstname, value.age);
    }
}
