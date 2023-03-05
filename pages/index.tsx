import {useState} from "react";
import axios from "axios";
import React from "react";

export default function Home() {
    const [comment, setComment] = useState('');

    const onClick = async () => {
        await axios.post('/api/create-comment', {
            postId:"7d2dc33e-2bb2-430d-9603-e463903cdca1",
            text: comment,
            userId: 12
        })
    }

    return (
        <div>
            <input value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type={'button'} onClick={onClick}>Send</button>
        </div>
    )
}
