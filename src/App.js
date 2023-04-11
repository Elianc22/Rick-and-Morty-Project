import './_App.scss';
import './styles/media.scss';
import { isMobile } from 'react-device-detect';
import Layout from './components/layout';

function App() {
  return (
    <div className={`App${isMobile ? '' : '-desk'}`}>
      <Layout />
    </div>
  );
}

export default App;
