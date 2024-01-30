import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./features/global/routers/Router";
import { ApolloProvider } from "@apollo/client";
import client from "./features/global/apollo/apolloClient";
import Layout from "./features/global/layout/components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Router />
                    </Layout>
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
