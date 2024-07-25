import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function PictureList() {
    const [pics] = useOutletContext();
    
    return (
        <div>
            <h1>Picture List</h1>
            <ul>
                {pics.map((pic) => (
                    <ol key={pic.id}>
                        <Link className="pics-a" to={`${pic.id}`}>{pic.name}</Link>
                    </ol>
                ))}
            </ul>
        </div>
    );
}