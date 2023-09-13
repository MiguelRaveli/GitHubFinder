import { Userprops } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./User.module.css";
const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
  html_url
}: Userprops) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <Link className={classes.link} to={html_url}>{login}</Link>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
