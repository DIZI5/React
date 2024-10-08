import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postsSlice";
import { nanoid } from "nanoid";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function AddPost() {
    const [post, setPost] = useState({
        id: nanoid(),
        author: "",
        publishing_date: "",
        title: "",
        content: "",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
        },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addPost(post));
        navigate("/");
    };

    const onTitleChangeHandler = (e) => {
        setPost({
            ...post,
            title: e.target.value,
        });
    };

    const onContentChangeHandler = (e) => {
        setPost({
            ...post,
            content: e.target.value,
        });
    };

    const onAuthorChangeHandler = (e) => {
        setPost({
            ...post,
            author: e.target.value,
        });
    };

    return (
        <Box>
            <Typography variant="h4">Adding Post</Typography>

            <form onSubmit={submitHandler}>
                <Box className="textfield-container">
                    <TextField
                        fullWidth
                        id="title-input"
                        label="Title"
                        variant="outlined"
                        value={post.title}
                        onChange={onTitleChangeHandler}
                    />
                </Box>

                <Box className="textfield-container">
                    <TextField
                        fullWidth
                        id="content-input"
                        label="Content"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={post.content}
                        onChange={onContentChangeHandler}
                    />
                </Box>

                <Box className="textfield-container">
                    <TextField
                        fullWidth
                        id="author-input"
                        label="Author"
                        variant="outlined"
                        value={post.author}
                        onChange={onAuthorChangeHandler}
                    />
                </Box>

                <Box className="button-container">
                    <Button variant="contained" type="submit">
                        Add Post
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
