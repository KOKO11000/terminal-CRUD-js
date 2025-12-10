import {DB} from "./listAllUsers.js"
export const showTable = ()=>{
    console.table(DB.users)
}

