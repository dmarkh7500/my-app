import React from "react";
import './Comment.css';

export default function Comment () {
    return (
    <div>
    <p className ="header">Комментарий:</p>
    <textarea maxlength = "80"></textarea>
    </div>
    )
}

