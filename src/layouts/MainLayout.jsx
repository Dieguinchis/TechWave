import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <main className="main-content">
            <Outlet />
        </main>
    );
};
