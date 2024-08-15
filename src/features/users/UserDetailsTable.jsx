import React from 'react';
import './UserDetailsTable.css'; // Import the CSS file

const UserDetailsTable = ({ users, onEdit, onDelete, onView }) => {
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length && users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status ? "Active" : "InActive"}</td>
                            <td className="actions">
                                <button className="edit-btn" onClick={() => onEdit(user.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
                                <button className="view-btn" onClick={() => onView(user.id)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetailsTable;
