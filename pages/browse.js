import Post from "@/components/post/Post";
import React from "react";
import posts from "@/data/posts";

const Browse = () => {
  return (
    <div>
      {posts &&
        posts.map((post, idx) => (
          <div key={idx}>
            <Post
              title={post.title}
              description={post.information}
              image={post.imgSrc}
              timeframe={post.quartersAvailable}
              poster={post.poster}
              amenities={post.amenities}
            />
            <br></br>
          </div>
        ))}
    </div>
  );
};

export default Browse;
