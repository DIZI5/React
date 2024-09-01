import React from "react";
import { Link } from "react-router-dom";

export default function Menu()
{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/famous-picture">Famous Picture</Link>
            <Link to="/picture-collection">Picture Collection</Link>
        </nav>
    );
}