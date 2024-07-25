import { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function AddPicture() {
    const navigate = useNavigate();
    const [pics, setPics] = useOutletContext();

    const pic = {
        id: pics.length + 1,
        title: "",
        artist: "",
        genre: "",
        desc: "",
        url: ""
    };

    const [newPic, setNewPic] = useState(pic);
    const titleRef = useRef();
    const artistRef = useRef();
    const genreRef = useRef();
    const descRef = useRef();
    const urlRef = useRef();

    function submit(e) {
        e.preventDefault();

        newPic.name = titleRef.current.value;
        newPic.artist = artistRef.current.value;
        newPic.genre = genreRef.current.value;
        newPic.desc = descRef.current.value;
        newPic.url = urlRef.current.value;

        setNewPic({...newPic});
        setPics([...pics, newPic]);
        console.log(pics);
        
        navigate("/pictures");
    }

    return (
        <form onSubmit={submit}>
            <div className="input-container">
                <label htmlFor="title">Title:</label>
                <input ref={titleRef} id="title" name="title" type="text" />
            </div>

            <div className="input-container">
                <label htmlFor="artist">Artist:</label>
                <input ref={artistRef} id="artist" name="artist" type="text" />
            </div>

            <div className="input-container">
                <label htmlFor="genre">Genre:</label>
                <input ref={genreRef} id="genre" name="genre" type="text" />
            </div>

            <div className="input-container">
                <label htmlFor="desc">Description:</label>
                <input ref={descRef} id="desc" name="desc" type="text" />
            </div>

            <div className="input-container">
                <label htmlFor="url">Url:</label>
                <input ref={urlRef} id="url" name="url" type="text" />
            </div>

            <div className="submit-container">
                <button type="submit">Add Picture</button>
            </div>
        </form>
    );
}
