import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div>
        <Link to="profile">
          Profile
        </Link>
        {" | "}
        <Link to="orders">
          Orders
        </Link>
        {" | "}
        <Link to="settings">
          Settings
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;