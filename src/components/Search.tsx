type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
import classes from "./Search.module.css";
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className={classes.search}>
      <h1>Busque por um usuário:</h1>
      <p>Conheça seus melhores respositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
