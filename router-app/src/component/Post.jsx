import React from "react";
import { useParams } from "react-router-dom";
function Post() {
    const { num } = useParams()
    return <div>You have clicked item with id:{ num }</div>
}
export default Post;