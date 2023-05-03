import { MdDelete, MdEditCalendar } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";

export default function MainCard({user, deleteBirthday, editModeBirthday}) {
    return (
        <div className="w-full md:w-1/3 p-1">
            <div className='w-full mx-1 py-1 px-2 flex justify-between backdrop-blur-sm border border-white/20  m-auto rounded-2xl text-slate-200 '> {/* Card */}
                <div className='w-10/12'>
                    <div className='w-full flex justify-center items-center text-white'> <span className="text-blue-500 mr-1"> <AiFillGift/> </span>  {user.birthday} </div>  
                <div className='flex'>
                    <span> {user.first_name} </span> <span className='ml-2'> {user.last_name} </span>  
                </div>
                <div className='text-slate-400'> {user.email} </div>  
                </div>            
                <div className='w-2/12 flex flex-col justify-end items-center'>
                <button onClick={() => deleteBirthday(user.id)} className="flex justify-center items-center w-full h-1/2 text-2xl hover:text-red-600"> <MdDelete/> </button>
                <button onClick={() => editModeBirthday(user)} className="flex justify-center items-center w-full h-1/2 text-2xl hover:text-blue-500"> <MdEditCalendar/> </button>
                </div>
            </div>    
        </div>
        
    );
}

