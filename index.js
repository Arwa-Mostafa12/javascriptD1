    
function welcomeUser() {
    alert("Welcome to my site");

    var user_name = prompt("Please enter your name:");

    if (user_name) {
        document.write("<h1>Welcome, " + user_name + "!</h1>");
    } else {
        document.write("<h1>no user</h1>");
    }
}
//welcomeUser();








function TempCheck(temperature){
    if(temperature>=30){
        console.log("hot");
    }else{
        console.log("cold");
    }
}
// TempCheck(15);
// TempCheck(30);

function welcome(){
    for(let i=1; i<=6; i++){
        document.write("<h"+ i + ">welcome to my page<h"+ i + ">" );
    }
}
welcome();

(function() {
    var name, birthYear, age;

    function Name() {
        while (true) {
            name = prompt("Please enter your name:");
            if (name && isNaN(name)) {
                return name;
            } else {
                alert("Invalid input. Please enter a valid name.");
            }
        }
    }

    function BirthYear() {
        while (true) {
            birthYear = prompt("Please enter your birth year:");
            if (birthYear && !isNaN(birthYear) && Number(birthYear) < 2010) {
                return Number(birthYear);
            } else {
                alert("Invalid input. Please enter a valid birth year less than 2010.");
            }
        }
    }

    username = Name();
    birthYear = BirthYear();
    age = new Date().getFullYear() - birthYear;

    document.write(`
        <p>Name: ${username}</p>
        <p>Birth year: ${birthYear}</p>
        <p>Age: ${age}</p>
    `);
})();


