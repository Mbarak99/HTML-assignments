

let studentName = "John Kahindi";

let registrationNumber = "COM/B/01-00147/2025";

let academicProgramme = "Computer Science";

console.log(studentName);
console.log(registrationNumber);
console.log(academicProgramme);


function calculateGrade(score) {

    if (score >= 70) {
        return "A";
    }

    else if (score >= 60) {
        return "B";
    }

    else if (score >= 50) {
        return "C";
    }

    else if (score >= 40) {
        return "D";
    }

    else {
        return "E";
    }

}


let grade = calculateGrade(75);

alert("Your grade is: " + grade);

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();

    let regNumber = document.getElementById("regNumber").value.trim();

    let email = document.getElementById("email").value.trim();

    if (name === "") {

        alert("Please enter your full name!");

        return;
    }

    if (regNumber === "") {

        alert("Please enter your registration number!");

        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address!");

        return;
    }

    document.getElementById("studentDetails").innerHTML =

        "<h3>Student Details</h3>" +

        "Student Name: " + name + "<br>" +

        "Registration Number: " + regNumber + "<br>" +

        "Email Address: " + email;
        
    alert("Congratulations! Student registered successfully!");

});