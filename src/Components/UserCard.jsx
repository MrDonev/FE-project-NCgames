import { useContext } from 'react';
import UserContext from '../util/Contexts';

const UserCard = ({ currUser, allUsers }) => {
  const { setUser, user } = useContext(UserContext);
  function logIn(currUserName) {
    const userNameInput = prompt(`enter username`);
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
    <div className="ReviewCard">
      <div className="ReviewIMG">
        <img src={currUser.avatar_url} alt={currUser.username} />
      </div>
      <p>Name: {currUser.name}</p>
      <button onClick={() => logIn(currUser.username)}>Log in</button>
    </div>
  );
};

export default UserCard;
