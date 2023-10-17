import WelcomeScreen from './screens/welcome-screen/welcome-screen.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOAST_TIMEOUT = 4000;

function App() {

  return (
    <>
      <ToastContainer autoClose={TOAST_TIMEOUT}/>
      <WelcomeScreen/>
    </>
  );
}

export default App;
