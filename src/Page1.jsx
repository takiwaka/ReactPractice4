import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>ページ1</h1>
      <Link to={{ pathname: "/Page1/detailA", state: arr }}>detailA</Link>
      <br />
      <Link to="/Page1/detailB">detailB</Link>
    </div>
  );
};
