import { useState, useEffect } from "react";
import { getUsers } from "../util/api";
import UserCard from "./UserCard";
import { useContext } from "react";
import UserContext from '../util/Contexts'

const Users = ()=>{
const user=useContext(UserContext)
const [allUsers, setAllUsers]=useState([])
const [loading, setLoading]=useState(true)
    useEffect(()=>{
        getUsers().then(({usersArray})=>{
            setAllUsers(usersArray)
            setLoading(false)
        })
    },[])

    return loading ? (
        <div className="loader">...Loading</div>
      ) :<section  className="Users">
        <ul>
            {allUsers.map(currUser=>{
                return <li><UserCard currUser={currUser} allUsers={allUsers}/></li>
            })}
        </ul>
    </section>
}

export default Users;