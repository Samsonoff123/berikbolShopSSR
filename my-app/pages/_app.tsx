import '../styles/globals.scss'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../components/utils/app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}> <Component {...pageProps} /> </Provider>
}

export default MyApp