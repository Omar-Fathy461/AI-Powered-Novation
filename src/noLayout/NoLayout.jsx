// components/NoLayout.js
import { Outlet } from "react-router-dom";

function NoLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default NoLayout;