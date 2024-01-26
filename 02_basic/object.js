//singleton
//object.create

//object literals

// Create a symbol for the key
const mysym = Symbol("key1");

// Use an object literal to create the user object
const jsUser = {
    name: "ankit",
    "full name": "ankit jha",
    [mysym]: "mykey1",
    age: 19,
    location: "new delhi",
    email: "anki6686510@gmail.com",
    isloggedIn: false, // Fixed typo: isloogedin to isloggedIn
    lastLoginDays: ["monday", "tuesday"] // Renamed lastlogindays to lastLoginDays
};

// To access the object, there are two ways
console.log(jsUser["full name"]); // Using square brackets for property with spaces

// Another way
console.log(jsUser.email); // Corrected the property access syntax
console.log(jsUser["email"]);
console.log(jsUser[mysym]);

jsUser.email ="ankit6686@gmail.com"
object.freeze(jsUser)
jsUser.email ="vbiervb@gmail.com"
console.log(js.jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

