import { Link } from "react-router-dom";
import "./Error.scss"

export default function Error() {
  return (
    <div className="error">
      <div className="error-ctn">
        <span>404</span>
        <Link to="/">ve trang chu</Link>
      </div>
    </div>
  );
}
