import './styles/global.css'

import { Layout } from './layout/Layout';
import { Home } from './Components/Home';

function App() {
  return (
    <>
      <Layout>
        <Home/>
      </Layout>
    </>
  );
}

export default App;
