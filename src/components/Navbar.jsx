import { useUser } from "../lib/context/user";

const Navbar = () => {
  const user = useUser();
  return (
    <div>
      <nav>
        <a href="/">Idea tracker</a>
        <div>
          {user.current ? (
            <>
              <span>{user.current.email}</span>
              <button type="button" onClick={() => user.logout()}>
                Logout
              </button>
            </>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
