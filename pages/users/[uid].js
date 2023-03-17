import { useRouter } from "next/router";
import MyPosts from "@/components/MyPosts";

function userPosts() {
  const router = useRouter();
  return (
    <section className="h-screen">
      <div className="mx-auto mb-5 py-5">
        <MyPosts uid={router.query.uid} />
      </div>
    </section>
  );
}

export default userPosts;
