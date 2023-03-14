import Post from "@/components/post/Post";
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
              poster={post.poster}
              timeframe={post.quartersAvailable}
              amenities={post.amenities}
            ></Post>
          </div>
        ))}
    </div>
  );
};

export default Browse;
