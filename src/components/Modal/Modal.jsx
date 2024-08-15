import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, header, data, handleInputChange, handleSubmit, setShowModal, buttonName }) => {
    if (!isOpen) return null;
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close-btn" onClick={() => setShowModal(false)}>
                        &times;
                    </span>
                    <h2>{header}</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor=''>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={data?.firstName}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={data?.lastName}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data?.email}
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Gender</label>
                            <select
                                name="gender"
                                value={data?.gender}
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
                                value={data?.status}
                                onChange={(e) => handleInputChange(e)}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value={1}>Active</option>
                                <option value={0}>InActive</option>
                            </select>
                        </div>
                        <button type="submit" className="btn-primary">
                            {buttonName}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
