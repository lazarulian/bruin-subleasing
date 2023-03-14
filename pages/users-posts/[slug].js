// import { useRouter } from "next/router";

// const Post = () => {
//   const router = useRouter();
//   const { pid } = router.query;

//   return <p>Post: {pid}</p>;
// };

// const getUsers = async () => {
//   const q = query(collection(db, "users"));
//   const data = await getDocs(q);
//   const mapped_data = data.docs.map((doc) => ({
//     ...doc.data().uid,
//     id: doc.id,
//   }));
// };

// export default Post;

// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);
//   return {
//     props: { post: data },
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
