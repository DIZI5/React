import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function NewUser()
{
    function submit(e)
    {
        e.preventDefault();

        const newUser = {
            id: users.length + 1 || 1,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        }

        setUsers([...users, newUser]);
        navigate("/");
    }

    const [users, setUsers] = useOutletContext();
    const navigate = useNavigate();

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    return (
        <form onSubmit={submit}>
            <div>
                <h1>User Editing</h1>
            </div>

            <div>
                <input ref={firstNameRef} placeholder="firstName" required/>
            </div>

            <div>
                <input ref={lastNameRef} placeholder="lastName" required/>
            </div>
            
            <div>
                <input ref={emailRef} placeholder="email" required/>
            </div>

            <div>
                <input ref={phoneRef} placeholder="phone" required/>
            </div>

            <button className="submit-btn">Save Changes</button>
        </form>
    );
}