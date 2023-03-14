import Layout from "@/components/Layout";
import Guard from "@/components/login/Guard";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <Layout>
        <Guard router={router}>
          <Component {...pageProps} />
        </Guard>
      </Layout>
    </AuthProvider>
  );
}
