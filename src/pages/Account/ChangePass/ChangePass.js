import React from "react";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./ChangePass.scss";

export default function ChangePass() {
  return <div>
  <TopBarMenu />
  <div className="account-ctn">
    <UserNavigation />
   change pass
  </div>
</div>;
}
