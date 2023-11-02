import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import React from "react";
import {RouteConfig} from "../../../shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {RouteConfig.map(({element, path}) => {
                return (
                    <Route
                        element={
                            <Suspense fallback={'LOADER'}>
                                {element}
                            </Suspense>
                        }
                        path={path}/>
                )
            })}
        </Routes>
    )
}
