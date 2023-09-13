import Search from "../components/Search";
import { useState } from "react";
import { Userprops } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";
const Home = () => {
  //Usestate para saber quando eu tenho um usuario ou não, por isso ele inicia como nulo, para se caso não houver não ocorrer nenhum problema
  const [user, setUser] = useState<Userprops | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (response.status == 404) {
        setError(true);
        return;
      }
      const data = await response.json();
      const { avatar_url, login, location, followers, following , html_url} = data;

      const userData: Userprops = {
        avatar_url,
        login,
        location,
        followers,
        following,
        html_url
      };

      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
