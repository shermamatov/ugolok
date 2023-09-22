import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import WatchFilmPage from "../pages/WatchFilmPage";
import WishPage from "../pages/WishPage";

const MainRoutes = () => {
    const userRoutes = [
        { link: "/", element: <Home />, id: 1 },
        { link: "/admin", element: <AdminPage />, id: 2 },
        { link: "/edit/:id", element: <EditPage />, id: 3 },
        { link: "/watch/:id", element: <WatchFilmPage />, id: 4 },
        { link: "/wish", element: <WishPage />, id: 5 },
    ];
    const PRIVATE_ROUTES = [];
    return (
        <>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
                {/* {user
                    ? PRIVATE_ROUTES.map((item) => (
                          <Route
                              key={item.id}
                              path={item.link}
                              element={
                                  user.email === ADMIN ? (
                                      item.element
                                  ) : (
                                      <Navigate replace to="*" />
                                  )
                              }
                          />
                      ))
                    : null} */}
            </Routes>
        </>
    );
};

export default MainRoutes;
