import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <ErrorBoundary>
                    <StoreContext.Provider value={store} >
                        <App/>
                    </StoreContext.Provider>
                </ErrorBoundary>
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

reportWebVitals();
