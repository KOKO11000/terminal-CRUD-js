import input from "analiza-sync"
import { nanoid } from "nanoid"
import { DB } from "./listAllUsers.js"


export const createUser = ()=>{
    const username = input("What is the name you looking for: ")
    const role = input("what is the role you looking for: ")
    const newUser = {
        id: nanoid(),
        "username":username,
        "role":role
    }
    DB.users.push(newUser)
}


export const readUserById = ()=>{
    const getId = input("What the ID you looking for: ")
    for (let i = 0; i < DB.users.length; i++) {
        if (DB.users[i].id == getId) {
            console.log(DB.users[i]);
            break
        }else console.log("ID not found");
    }
}


export const updateUser = ()=>{
    const getId = input("What the ID you looking for: ")
    for (let i = 0; i < DB.users.length; i++) {
        if (DB.users[i].id == getId) {
            let changeUserName = DB.users
            const askToChange = input("Are you sure you want to change this(Enter to skip): ")
            if (askToChange !== "") {
                const enterTheChange = input("write here your new change: ")
                changeUserName.splice(DB.users[i]) = enterTheChange
            } 
        }
    }
} 
export const deleteUser = ()=>{
    const getId = input("What the ID you looking for: ")
    for (let i = 0; i < DB.users.length; i++) {
        
        if (DB.users[i].id == getId) {
            const askForDelete = input("Are you sure you want delete it? (Y/N): ").toLowerCase()
            if(askForDelete == "y"|"yes"){
                DB.users.pop()
                console.log("the user Deleted...");
            };
            if (askForDelete == "n"|"no") {
                break
            }}};
};
export const searchByUser = ()=>{
    const search = input("Enter name or part of him: ")    
    return DB.users.filter((user)=>user.username.includes(search))
     
};

export default {
    createUser,
    readUserById,
    updateUser,
    deleteUser,
    searchByUser
}

