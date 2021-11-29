import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>ページ1</h1>
      <Link to="/Page1/detailA">detailA</Link>
      <br />
      <Link to="/Page1/detailB">detailB</Link>
    </div>
  );
};
