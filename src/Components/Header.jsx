import { useContext } from "react";
import UserContext from "../util/Contexts";

const Header = () => {
    const user=useContext(UserContext)
  
  return (
    <section className="Header">
      <h1>NC-Games</h1>
      {user.user.username ? (<section id="user">
        <div id="userLogImg">
        <img src={user.user.avatar_url} alt="user"></img>
        </div>
        <p>{user.user.username}</p>
      </section>): <></>}
      <h3>Everything about games in one place</h3>
    </section>
  );
};

export default Header;
