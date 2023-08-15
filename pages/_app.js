import { ProviderApp } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <ProviderApp>
            <NavBar/>
            <Component {...pageProps} />
        </ProviderApp>
    </div>
);

export default MyApp