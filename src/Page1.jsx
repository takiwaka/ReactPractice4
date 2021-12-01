import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>ページ1</h1>
      <Link to={{ pathname: "/Page1/detailA", state: arr }}>detailA</Link>
      <br />
      <Link to="/Page1/detailB">detailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
