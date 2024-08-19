import React, { useEffect, useState } from 'react';
import UserDetailsTable from "./features/users/UserDetailsTable";
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, getById, getUsers, updateUser } from './features/users/userAsyncThunk';
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { toast } from 'react-toastify';
import { selectUsers } from './features/users/userSlice';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(selectUsers);
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()
  const [showModal, setShowModal] = useState(false)
  const [isModalData, setIsModalData] = useState({ modalName: "", modalButtonName: "" })
  const [formData, setFormData] = useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    status: ''
  });

  useEffect(() => {
    fetchUsers()
  }, [dispatch])

  const fetchUsers = async () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    setUsers(data)
  }, [data])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name == "status" ? value == "1" ? true : false : value
    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = isModalData.modalName == "Create User" ? await dispatch(createUser(formData)).unwrap() : await dispatch(updateUser(formData)).unwrap();
    setShowModal(false)
    toast.success(result?.message)
    fetchUsers()
  }

  const handleCreateUser = () => {
    setUser(null)
    setIsModalData({ modalName: "Create User", modalButtonName: "Create User" });
    setShowModal(true)
  }

  const handleEdit = async (id) => {
    setIsModalData({ modalName: "Update User", modalButtonName: "Update User" });
    setShowModal(true)
    const { data: user } = await dispatch(getById(id)).unwrap();
    setFormData({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      status: user.status
    });
  };

  const handleDelete = async (id) => {
    setIsModalData({ modalName: "Delete User", modalButtonName: "Delete User" });
    const result = await dispatch(deleteUser(id)).unwrap();
    toast.success(result?.message)
    fetchUsers()
  };

  const handleView = async (id) => {
    setIsModalData({ modalName: "View User", modalButtonName: "View User" });
    setShowModal(true)
    const user = await dispatch(getById(id)).unwrap();
    setUser(user?.data)
  };

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <h1>User Details</h1>
      <button
        style={{ display: 'flex', margin: 'auto', color: 'white', background: 'green', padding: '10px' }}
        onClick={() => handleCreateUser()}
      >
        Create new user
      </button>
      <Modal
        isOpen={showModal}
        modalData={isModalData}
        setShowModal={setShowModal}
        data={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <UserDetailsTable users={users} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
    </>
  );
}

export default App;