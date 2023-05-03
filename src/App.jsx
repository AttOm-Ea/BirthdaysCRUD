import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersList from './components/UsersList'
import Modal from './components/Modal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
Swal

function App() {
  const url = "https://users-crud.academlo.tech";
  const [hiddenModal, setHiddenModal] = useState("hidden");
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(false);
  const [idUser, setIdUser] = useState("");
  const {register, handleSubmit, reset} = useForm();

  function allUsers(){
    const urlAllUsers = url + "/users/";
    axios.get(urlAllUsers)
      .then((res) => { 
        const orderRes = res.data.sort(function (a, b) { if (a.first_name > b.first_name) { return 1; } if (a.first_name < b.first_name) { return -1; } return 0; });
        setUsers(orderRes);
      })
      .catch((res) => console.log(res));
  }

  function newBirthday(data) {
    const newUsers = url + "/users/";
    axios.post(newUsers, data)
      .then(() => {
        allUsers();
        Swal.fire({
          title: 'New birthday created',
          timer: '2000',
          confirmButtonColor: '#969291'
        });
        reset({first_name: "", last_name: "", email: "", birthday: ""});
        setHiddenModal("hidden");
      })
      .catch((res) => console.log(res));
  }


  function deleteBirthday(id) {
    const deleteUsers = url + `/users/${id}/`;
    axios.delete(deleteUsers)
      .then(() => {
        Swal.fire({
          title: 'Erased birthday',
          timer: '2000',
          confirmButtonColor: '#969291'
        });
        allUsers();
      })
      .catch((res) => console.log(res));
  }

  function editModeBirthday(user) {
    setHiddenModal("");
    reset({first_name: user.first_name, last_name: user.last_name, email: user.email, birthday: user.birthday});
    setUserEdit(true);
    setIdUser(user.id);
  }

  function editBirthday(data) {
    const editUsers = url + `/users/${idUser}/`;
    axios.patch(editUsers, data)
      .then(() => {
        allUsers();
        reset({first_name: "", last_name: "", email: "", birthday: ""});
        setHiddenModal("hidden");
        Swal.fire({
          title: 'Edited Birthday',
          timer: '2000',
          confirmButtonColor: '#969291'
        });
      })
      .catch((res) => console.log(res));
  }

  function submit(data) {
    userEdit ? editBirthday(data) : newBirthday(data);
  }

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <>
      <Modal hidden={hiddenModal} setHidden={setHiddenModal} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} userEdit={userEdit} setUserEdit={setUserEdit}/>
      <div className="w-full h-screen bg-[url('/img/wp.jpg')] bg-[right_-21rem_center] md:bg-center bg-cover bg-no-repeat">
        <div className='w-full h-full bg-black/60 md:bg-black/70 p-2 md:p-6'>
          <div className='w-full h-1/6 flex flex-col justify-evenly items-center text-white'>
            <h1 className='w-full h-2/3 flex justify-center items-center text-3xl'> Birthdays </h1>
            <div className='h-1/3 flex justify-center items-center'>
              <button className='px-2 rounded-lg bg-gray-500 hover:bg-gray-700 text-slate-300 hover:text-white hover:border' onClick={()=>setHiddenModal("")}>  New date + </button>    
            </div>
          </div>
          <UsersList users={users} deleteBirthday={deleteBirthday} editModeBirthday={editModeBirthday} /> 
        </div>
      </div>
    </>
  )
}

export default App
