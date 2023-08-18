import { ChatAppProvider } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <ChatAppProvider>
            <NavBar/>
            <Component {...pageProps} />
        </ChatAppProvider>
    </div>
);

export default MyApp