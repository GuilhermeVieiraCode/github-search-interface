import Layout from "./components/layout";
import Profile from "./components/profile";
import { Repositories } from "./components/repositories";
import { Destyle } from "./global/destyle";
import GithubProvider from "./providers/github-provider";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <Destyle/>
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
