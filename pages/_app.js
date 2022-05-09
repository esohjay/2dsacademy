import "../styles/globals.css";
import Layout from "../components/Layout";
import { StudentProvider } from "../lib/dataStore/contexts/student";
import { AdminProvider } from "../lib/dataStore/contexts/admin";
// import { GeneralProvider } from "../lib/dataStore/contexts/general";

function MyApp({ Component, pageProps }) {
  return (
    <AdminProvider>
      <StudentProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StudentProvider>
    </AdminProvider>
  );
}

export default MyApp;
