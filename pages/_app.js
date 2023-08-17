import { ProviderApp } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <ProviderApp>
            <NavBar/>
            <Component {...pageProps} />
        </ProviderApp>
    </div>
);

export default MyApp