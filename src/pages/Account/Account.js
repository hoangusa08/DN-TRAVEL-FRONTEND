import React from "react";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import "./Account.scss";
import UserNavigation from "./Component/UserNavigation";

export default function Account() {
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation/>
      </div>
    </div>
  );
}
