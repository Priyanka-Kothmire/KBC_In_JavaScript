console.log("       ๐๐๐WELCOME KBC GAME๐๐๐        ")
console.log("        ๐Start Your Game........       ")
const question_list = [
    "How many continents are there?",
    "What is the capital of India?",
    "NG mei kaun se course padhaya jaata hai?"]
const options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]
const solution_list = [3, 4, 1]
const ans = ["1.four", "3.seven", "1.chandigarh", "4.delhi", "3.tourism", "1.Software Engineering"]
var i = 0;
var r = 1;
var y = 0;
var count = 0;
var sum = 0;
while (i < question_list.length) {
    console.log(question_list[i]);
    var j = 0;
    var k = i;
    while (j < options_list[i].length) {
        let l = (options_list[k][j]);
        console.log(j + 1, l);
        j++}
    let readlineSync = require("readline-sync");
    var lifeline = readlineSync.question("๐Do you want 5050 lifeline : \n 1.YES 2.NO   :");
    if (lifeline == "1") {
        if (count == 0) {
            console.log(ans[y + i]);
            console.log(ans[y + r]);
            var n = readlineSync.questionInt("๐Enter the Answer :");
            if (n == solution_list[i]) {
                sum = sum + 5000
                console.log("Your answer is correct๐ค๐ค๐ค");
                console.log("Congratulation,You win this :", sum, "๐ต๐ด๐ถ")
                count = count + 1}
            else {
                console.log("Your answer is wrong๐ข๐ข๐ข");
                console.log("soory,You lost", sum, "๐ต๐ด๐ถ")
                break
            }
        }
        else {
            console.log("You Already have used Lifeline๐๐")
            var m = readlineSync.questionInt("๐Please Enter the Answer:");
            // sum=sum+5000
            if (m == solution_list[i]) {
                sum = sum + 5000
                console.log("Congratulation,you win ", sum, "๐ต๐ด๐ถ");
            } else {
                console.log("your lost๐ข๐ข๐ข")
                console.log("sorry ,You Lost", sum, "๐ต๐ด๐ถ")
            }
        }
    }
    else if (lifeline == "2") {
        var u = readlineSync.questionInt("๐choose the answer :");
        // sum=sum+5000
        if (u == solution_list[i]) {
            sum = sum + 5000
            console.log("congratualtion,your win :", sum, "๐ต๐ด๐ถ");
        } else {
            console.log("Sorry,your lost๐ข๐ข๐ข");
            console.log("Game over,You Win :", sum, "๐ต๐ด๐ถ")
            break;
        }
    } else {
        console.log("error")
    }
    r++;
    y++;
    i++;
}
