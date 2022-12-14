import React from "react";
import Image from "./image.png";
import "./blog.css"

export default function Blog() {
    return (
        <div className="blog">
            <h2>hey there...! This is my Blog</h2>
            <img src={Image} alt="blog image" />
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                saepe quis dicta voluptatum, labore sequi aliquam magnam illum
                sint, eos necessitatibus. Soluta quasi provident eaque.
            </div>
        </div>
    );
}
