import s from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.profile}>
      <div className={s.info}>
        <img
          className={s.avatarImg}
          src={user.avatar}
          alt={user.username}
          width="96"
        />
        <p className={s.nameTitle}>{user.username}</p>
        <p className={s.infoTitle}>{user.tag}</p>
        <p className={s.infoTitle}>{user.location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Followers</span>
          <span className={s.statsInfo}>{user.stats.folowers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Views</span>
          <span className={s.statsInfo}>{user.stats.folowers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsTitle}>Likes</span>
          <span className={s.statsInfo}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
// { name, tag, location, image, stats }
