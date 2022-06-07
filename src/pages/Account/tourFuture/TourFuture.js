import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./TourFuture.scss";

export default function TourFuture() {
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        tour future
      </div>
    </div>
  );
}
