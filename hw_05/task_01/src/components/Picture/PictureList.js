import { Link, useOutletContext } from "react-router-dom";

export default function PictureList() {
    const [pics] = useOutletContext();

    return (
        <div>
            <h1>Picture List</h1>
            <ul>
                <li>
                    <Link className="pics-a" to="add-pic">Add picture</Link>
                </li>
                {pics.map((pic) => (
                    <li key={pic.id}>
                        <Link className="pics-a" to={`${pic.id}`}>{pic.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
