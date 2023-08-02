// top level component, useful to keep state when navigating between pages, or to add global styles
import '../styles/globals.css'

export default function App({Component, pageProps}) {
    return <Component {...pageProps}/>
}