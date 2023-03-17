import React from "react";
import DynamicPost from "@/components/DynamicPost";
import { useRouter } from "next/router";

function individualPost() {
  const router = useRouter();
  return (
    <div>
      <DynamicPost documentID={router.query.postId} />
    </div>
  );
}

export default individualPost;
