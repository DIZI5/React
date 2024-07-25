import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

export default function PhoneBook()
{   
    function EditUser(id)
    {
        navigate(`/edit/${id}`);
    }

    function DeleteUser(id)
    {
        setUsers(users.filter(user => user.id !== id));
    }

    const [users, setUsers] = useOutletContext();
    const navigate = useNavigate();

    return (
        <div>
            <Outlet context = {[users, setUsers]}/>
            <div>
                <h1>Phonebook</h1>
            </div>

            <div className="btn-container">
                <button onClick={() => navigate("/new-user")}>Add User</button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td className="user-id">
                                        {user.id}
                                    </td>

                                    <td className="user-firstname">
                                        { user.firstName}
                                    </td>

                                    <td className="user-lastname">
                                        {user.lastName}
                                    </td>

                                    <td className="user-email">
                                        {user.email}
                                    </td>

                                    <td className="user-phone">
                                        {user.phone}
                                    </td>

                                    <td>
                                        <button onClick={() => EditUser(user.id)}>Edit</button>
                                        <button onClick={() => DeleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}