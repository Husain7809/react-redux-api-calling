import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, modalData, data, handleInputChange, handleSubmit, setShowModal }) => {
    console.log({ isOpen, modalData, data, handleInputChange, handleSubmit, setShowModal });

    if (!isOpen) return null;
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close-btn" onClick={() => setShowModal(false)}>
                        &times;
                    </span>
                    <h2>{modalData.modalName}</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor=''>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                defaultValue={data?.firstName}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                defaultValue={data?.lastName}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={data?.email}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Gender</label>
                            <select
                                name="gender"
                                defaultValue={data?.gender}
                                onChange={(e) => handleInputChange(e)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Status</label>
                            <select
                                name="status"
                                defaultValue={data?.status ? "1" : "0"}
                                onChange={(e) => handleInputChange(e)}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value={1}>Active</option>
                                <option value={0}>InActive</option>
                            </select>
                        </div>
                        <button type="submit" className="btn-primary">
                            {modalData.modalButtonName}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
