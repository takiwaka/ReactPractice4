import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページ404</h1>
      <br />
      <h1>ページが見つかりません</h1>
      <Link to="/">HOMEに戻る</Link>
    </div>
  );
};
