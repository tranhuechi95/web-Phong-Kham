// Without this pages/_app.js file, Next cannot import global css file!
import '../styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}