// Prompt the user to enter a number for the gear
let gearNumber = parseInt(prompt("Enter a number for the gear:"));



switch (true) {
    case (gearNumber >= 0 && gearNumber <= 30):
        logOut();
        break;
    case (gearNumber > 30 && gearNumber < 45):
        logOut();
        break;
    case (gearNumber >= 45 && gearNumber < 60):
        console.log("You have entered gear: Third");
        break;
    case (gearNumber >= 60 && gearNumber < 75):
        console.log("You have entered gear: Fourth");
        break;
    case (gearNumber >= 75 && gearNumber < 90):
        console.log("You have entered gear: Fifth");
        break;
    case (gearNumber >= 90 && gearNumber <= 100):
        console.log("You have entered gear: Sixth");
        break;
    default:
        console.log("Invalid gear number entered.");
}

