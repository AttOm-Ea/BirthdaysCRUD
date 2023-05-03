import TitleCard from "./TitleCard";
import MainCard from "./MainCard";
import { useEffect, useState } from "react";

export default function UsersList({users, deleteBirthday, editModeBirthday}){
    const [newOrder, setNewOrder] = useState([]);

    useEffect(() => {
        let character = "";
        let newOrder = [];

        users.map((user) => {
            let later  = user.first_name.substr(0, 1);
            if (character != later) {
                character = later;
                newOrder.push({'alphabetLeter' : character});
                newOrder.push(user);
            }else{
                newOrder.push(user);
            }
        })  
        setNewOrder(newOrder);
    }, [users]);

    return (
        <div className='w-full max-h-[83.3%] overflow-auto flex flex-wrap justify-start items-start  p-1'>
            { 
                newOrder.map((user) => {
                    return (user.alphabetLeter) ? <TitleCard later={user.alphabetLeter} key={user.alphabetLeter}/> : <MainCard user={user} key={user.id} deleteBirthday={deleteBirthday} editModeBirthday={editModeBirthday}/>;
                })  
            }
        </div>
    );
};
