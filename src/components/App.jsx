// import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Profile user={userData} />
        {/* <FriendList /> */}
      </main>
    </div>
  );
};

export default App;
