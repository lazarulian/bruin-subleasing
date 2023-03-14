import { useRouter } from "next/router";
import Post from "@/components/Post";

function individualPost() {
  const router = useRouter();
  return (
    <div>
      <h1>This is the Post </h1>
      <p>{router.query.postId}</p>
    </div>
  );
}

export default individualPost;
