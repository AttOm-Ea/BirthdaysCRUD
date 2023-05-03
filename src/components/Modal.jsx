import { useState } from "react";

const Modal = ({hidden, setHidden, register, handleSubmit, submit, reset, userEdit, setUserEdit}) => {
    const [colorText, setColorText] = useState("text-slate-600");

    function colorDate() {
        setColorText("text-slate-300")
    }

    function closeModal() {
        setHidden("hidden");
        reset({first_name: "", last_name: "", email: "", birthday: "" });
        // setUserEdit((userEdit)=> !userEdit);
        setUserEdit(false);
    }

    return (
        // MdOutlineDeleteSweep
        <div className={"absolute w-full h-full flex justify-center items-center bg-black/80 z-50 "+ hidden}>
            <form onSubmit={handleSubmit(submit)} className="w-11/12 md:w-6/12 bg-gray-800 text-slate-400 rounded-2xl" autoComplete="off">
                <div className="w-full text-end pr-3 pt-2">
                    <button className="w-8 h-8 text-xs hover:text-xl text-gray-600 hover:text-gray-200 font-extrabold transition-all duration-300"  onClick={closeModal}> x </button>
                </div>
                <h2 className="text-3xl text-center pb-5"> {userEdit? "Edit Birthday" : "New Birthday"} </h2>
                <div className="flex flex-col m-2">
                    <input id="firstName" type="text" placeholder="First Name" className="rounded-md bg-slate-800 focus:bg-slate-200 focus:text-blue-800 border border-slate-700 placeholder:text-slate-600 text-slate-300 capitalize" required {... register("first_name")}/>
                    <label className="mt-2 ml-2 text-sm" htmlFor="firstName"> Name </label>
                </div>
                <div className="flex flex-col m-2">
                    <input id="lastName" type="text" placeholder="Last Name" className="rounded-md bg-slate-800 focus:bg-slate-200 focus:text-blue-800 border border-slate-700 placeholder:text-slate-600 text-slate-300 capitalize" required {... register("last_name")}/>
                    <label className="mt-2 ml-2 text-sm" htmlFor="lastName"> Last Name </label>
                </div>
                <div className="flex flex-col m-2">
                    <input id="date" type="date" placeholder="Date Birthday" className={"rounded-md focus:bg-slate-200 bg-slate-800 border border-slate-700 " +  colorText} onChange={colorDate} required {... register("birthday")}/>
                    <label className="mt-2 ml-2 text-sm" htmlFor="date"> Date </label>
                </div>
                <div className="flex flex-col m-2">
                    <input id="email" type="email" placeholder="Email @" className="rounded-md bg-slate-800 focus:bg-slate-200 focus:text-blue-800 border border-slate-700 placeholder:text-slate-600 text-slate-300 lowercase" required {... register("email")}/>
                    <label className="mt-2 ml-2 text-sm" htmlFor="email"> Email </label>
                </div>
                {/* img  */} <input className="hidden" type="text" value="https://static.wikia.nocookie.net/logopedia/images/a/a5/MSN_Messenger_2000_%28Icon%29.png/revision/latest?cb=20230101195823" {... register("image_url")}/>
                {/* password  */} <input className="hidden" type="password" value="123456" {... register("password")}/>
                <div className="w-full flex justify-center items-center py-5">
                    <input className="px-5 py-1 bg-gray-950 border border-gray-950/90 rounded-2xl cursor-pointer text-slate-500 hover:text-slate-300 hover:bg-gray-700" type="submit" value={userEdit? "Edit Post" : "Post"}/>
                </div>
            </form>
        </div>
    );
};

export default Modal;