import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import cls from './AppRouter.module.scss';

import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import {Loader} from "../../../shared/ui/Loader/Loader";

export function AppRouter() {
    return (
        <div className={cls.AppRouter}>
            <Routes>
                {RouteConfig.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<Loader/>}>
                                {element}
                            </Suspense>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </div>
    );
}
