import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../store/store";
import { useEffect, useState } from 'react';
import Navigation from '../components/Navbar/Navigation';


function MyApp({ Component, pageProps }) {

  {/* For Hydration Error */ }
  const [showChild, setShowChild] = useState(false)


  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }


  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
