import React, { useEffect, useState } from 'react';
import UserDetailsTable from "./features/users/UserDetailsTable";
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, getUsers } from './features/users/userAsyncThunk';
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(state => state.user);
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
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
    setUsers(data?.data)
  }, [data])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name == "status" ? value == "1" ? true : false : value
    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await dispatch(createUser(formData)).unwrap();
    setShowModal(false)
    toast.success(result?.message)
    fetchUsers()
  }

  const handleEdit = (id) => {
    console.log('Edit user with id:', id);
  };

  const handleDelete = async (id) => {
    const result = await dispatch(deleteUser(id)).unwrap();
    toast.success(result?.message)
    fetchUsers()
  };

  const handleView = (id) => {
    console.log('View user with id:', id);
  };

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Modal
        header="Create new user"
        isOpen={showModal}
        setShowModal={setShowModal}
        data={null}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonName="Create User"
      />
      <h1>User Details</h1>
      <button
        style={{ display: 'flex', margin: 'auto', color: 'white', background: 'green', padding: '10px' }}
        onClick={() => setShowModal(true)}
      >
        Create new user
      </button>
      <UserDetailsTable users={users} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
    </>
  );
}

export default App;