import "../styles/globals.css";
import Layout from "../components/Layout";
import { StudentProvider } from "../lib/dataStore/contexts/student";
// import { GeneralProvider } from "../lib/dataStore/contexts/general";

function MyApp({ Component, pageProps }) {
  return (
    <StudentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StudentProvider>
  );
}

export default MyApp;
