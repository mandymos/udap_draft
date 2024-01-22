import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import LayoutApp from '../components/layout/LayoutApp'
import { store } from '../redux/store'
import '../styles/globals.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </Provider>
  )
}
