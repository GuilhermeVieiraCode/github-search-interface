import Layout from "./components/layout";
import Profile from "./components/profile";
import { Destyle } from "./global/destyle";

const App = () => {
  return (
    <main>
      <Destyle/>
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>

    </main>
  );
}

export default App;
