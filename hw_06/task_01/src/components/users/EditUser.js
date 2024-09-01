import { useRef } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export default function Edit()
{
    function submit(e)
    {
        e.preventDefault();

        const updatedUser = {
            id: users.length,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        }

        const updatedUsers = users.map((user) => {
            if (user.id === id)
            {
                return updatedUser;
            }

            return user;
        });

        setUsers(updatedUsers);
        navigate("/");
    }

    const [users, setUsers] = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);

    const firstNameRef = useRef(users[id - 1].firstName);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    return (
        <form onSubmit={submit}>
            <div>
                <h1>User Editing</h1>
            </div>

            <div>
                <input ref={firstNameRef} placeholder="firstName" defaultValue={users[id - 1].firstName} required/>
            </div>

            <div>
                <input ref={lastNameRef} placeholder="lastName" defaultValue={users[id - 1].lastName} required/>
            </div>
            
            <div>
                <input ref={emailRef} placeholder="email" defaultValue={users[id - 1].email} required/>
            </div>

            <div>
                <input ref={phoneRef} placeholder="phone" defaultValue={users[id - 1].phone} required/>
            </div>

            <button className="submit-btn">Save Changes</button>
        </form>
    );
}