import { Link, Outlet } from "react-router-dom";

export function Sub() {
    return (
        <div>Sub</div>
    );
}

export function WS() {
    return (
        <div className="ws">
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ws/sub">Sub View</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}

export default WS;
