import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../util/Contexts';
import Logo from '../Assets/logo.png';
const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section className="Header">
<img id="logo" src={Logo} alt="logo" onClick={()=>{window.open('https://reactjs.org/tutorial/tutorial.html','_blank')}}/>
      <div id="headerText">
        <h1>NC-Games</h1>
        <h3>Everything about games in one place</h3>
      </div>
      {user.username ? (
        <div id="userSectionHeader">
          <div id="userContainer">
            <div id="userLogImg">
              <img src={user.avatar_url} alt="userAvatar"></img>
            </div>
            <p>User: {user.username}</p>
            {user.username ? (
              <button onClick={() => setUser({})}>Log out</button>
            ) : (
              <></>
            )}
          </div>{' '}
        </div>
      ) : (
        <Link to="/users" id="loginLink">
          <button id="logBtn">Log in</button>
        </Link>
      )}
    </section>
  );
};

export default Header;
