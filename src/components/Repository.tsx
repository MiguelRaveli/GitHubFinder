import { Reposprops } from "../types/Repos";
const Repository = ({ name, html_url }: Reposprops) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Link: {html_url}</div>
    </div>
  );
};

export default Repository;
