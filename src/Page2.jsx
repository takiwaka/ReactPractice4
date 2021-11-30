import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ2</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=Query">Query Parameter</Link>
    </div>
  );
};
