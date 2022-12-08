import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../store/store";
import { useEffect, useState } from 'react';
import Navigation from '../components/Navbar/Navigation';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

  {/* For Hydration Error */ }
  const [showChild, setShowChild] = useState(false)


  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }


  return (
    <SessionProvider session={session}>
      <Provider store={store}>

        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
