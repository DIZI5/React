import { useOutletContext, useParams } from "react-router-dom";

export default function Picture() {
    let { id } = useParams();
    const [pics] = useOutletContext();
    const pic = pics.find(p => p.id === parseInt(id));

    return (
        <div className="pic-container">
            <h1>{pic.name}</h1>
            <img className="pic" src={pic.url} alt={pic.name} />
            <h2>Author: {pic.artist}</h2>
            <h2>Genre: {pic.genre}</h2>
            <h3>Description</h3>
            <p>{pic.description}</p>
        </div>
    );
}