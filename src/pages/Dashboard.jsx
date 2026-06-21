import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate =
    useNavigate();

  const user = JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

  const logout = () => {
    localStorage.removeItem(
      "token"
    );
    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };

  return (
    <div>
      <h1>
        VitalSync Dashboard
      </h1>

      <h2>
        Welcome,
        {user?.name}
      </h2>

      <p>
        Email:
        {user?.email}
      </p>

      <p>
        Authentication
        Successful ✅
      </p>

      <button
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;