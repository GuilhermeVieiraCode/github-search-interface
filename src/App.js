import Layout from "./components/layout";
import Profile from "./components/profile";
import { Repositories } from "./components/repositories";
import { Destyle } from "./global/destyle";

const App = () => {
  return (
    <main>
      <Destyle/>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>

    </main>
  );
}

export default App;
