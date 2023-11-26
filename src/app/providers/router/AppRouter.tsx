import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Routes>
            {RouteConfig.map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                      <Suspense fallback="LOADER">
                            {element}
                        </Suspense>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    );
}
