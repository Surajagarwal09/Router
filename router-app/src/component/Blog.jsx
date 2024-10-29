import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Blog() {
    const posts = [
        {id:1,post:"React Intro"},
        {id:2,post:"React Components"},
        {id:3,post:"React Routing"},
        {id:4,post:"Rendering Lists"},
    ]
    return (
        <div>
            <ul>
                {posts.map((post) =>
                   <Link key={post.id} to={`/post/${post.id}`}>
                   <li>{post.post}</li>
                 </Link>
                 
                )}
            </ul>
        </div>
    )
}

export default Blog;