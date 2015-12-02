/**
 * Created by phuongnh on 02/12/2015.
 */

var quotes = "Darkness cannot drive out darkness, " +
    "Only light can do that. " +
    "Hate cannot drive out hate, " +
    "Only love can do that. ";
console.log(quotes);
var firstPost = quotes.indexOf("Only");
var lastPost = quotes.lastIndexOf("Only");
console.log(firstPost);
console.log(lastPost);
var canPost = quotes.search(/ca..ot/);
console.log(canPost);

var love = "I love IT. IT is my life. it is perfect.";
var loveEdit = love.replace(/IT/ig, "Nguyen Tung Lam");
console.log(loveEdit);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var res2 = str.slice(-12, -6);
console.log(res2);

console.log(str.substring(7, 13));
console.log(str.toLowerCase());
console.log(str.toUpperCase());