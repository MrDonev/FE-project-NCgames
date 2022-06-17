import { useContext } from 'react';
import UserContext from '../util/Contexts';

const UserCard = ({ currUser, allUsers }) => {
  const { setUser, user } = useContext(UserContext);
  function logIn(currUserName) {
    const userNameInput = prompt(`enter username`);
    if(userNameInput===null) return
    if (
      allUsers
        .map((mapUser) =>
          mapUser.username === userNameInput && userNameInput === currUserName
            ? mapUser.username
            : null
        )
        .includes(userNameInput)
    ) {
      alert(`logged in`);
      setUser(currUser);
    } else {
      alert(`incorrect username`);
    }
  }

  return (
    <div className="cardContainer" id='userCard'>
      <div className="cardImgContainer" id='userImg'>
        <img src={currUser.avatar_url} alt={currUser.username} />
      </div>
      <p>Name: {currUser.name}</p>
      {!user.username ? <button onClick={() => logIn(currUser.username)}>Log in with username</button> : <></>}
      {user.username && currUser.username===user.username?<button onClick={()=>setUser({})}>Log out</button>:<></>}
    </div>
  );
};

export default UserCard;
