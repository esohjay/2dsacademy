import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import { UserProvider } from "../lib/dataStore/contexts/user";
import { CourseProvider } from "../lib/dataStore/contexts/course";
// import { GeneralProvider } from "../lib/dataStore/contexts/general";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(
    <CourseProvider>
      <UserProvider>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </UserProvider>
    </CourseProvider>
  );
}

export default MyApp;
