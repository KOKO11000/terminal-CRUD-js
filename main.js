import { showTable } from "./functions.js";
import { DB } from "./listAllUsers.js";
import fun from "./createUser.js"
import input from "analiza-sync";



function showMenu() {

    let flag = true
    
    while (flag) {
            let menu = input(`welcome to mini project!!!
        1. show Table.
        2. create user name.
        3. read user by ID.
        4. serch user by user name.
        5. update user.
        6. delete user.
        7. Exit
        : `)
    let choiceMenu = menu
        switch (choiceMenu) {
            case "1":
                showTable()
                // flag = false
                break;
            case "2":
                fun.createUser()
                break;
            case "3":
                fun.readUserById()
                break;
            case "4":
                fun.searchByUser()
                break;
            case "5":
                fun.updateUser()
                break;
            case "6":
                fun.deleteUser()
                break;
            case "7":
                flag = false
                break;
        
            default:
                console.log("Worng! please choose correct choice:");
                menu
                break;
        }
        
    }

}
showMenu()
// fun.createUser()
// fun.deleteUser()
// fun.readUserById()
// fun.searchByUser()
// fun.updateUser()