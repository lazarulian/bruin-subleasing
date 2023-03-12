import Post from "@/components/Post";
import React from "react";
import posts from "@/data/posts";

const Browse = () => {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={0}>
            <Post
              title={post.title}
              description={post.information}
              image={post.imgSrc}
            />
            <br></br>
          </div>
        ))}
    </div>
  );
};

export default Browse;
