var input = prompt("Please enter your full name and grade");

var arr = input.split(' ');

alert("Welcome " + arr[0] + " " + arr[1]);

if (arr[2] >= 59.5) {
    alert("Congratulations you passed the course and your grade is: " + arr[2]);
} else {
    alert("You failed");
}