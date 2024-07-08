import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Profile />
        <FriendList />
      </main>
    </div>
  );
};

export default App;
