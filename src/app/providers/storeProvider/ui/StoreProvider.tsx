import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, StateSchema} from "../store/store";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
