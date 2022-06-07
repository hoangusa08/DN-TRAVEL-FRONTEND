import React from 'react'
import TopBarMenu from '../../../components/TopBarMenu/TopBarMenu'
import UserNavigation from '../Component/UserNavigation'
import "./TourHistory.scss"

export default function tourHistory() {
  return (
    <div>
    <TopBarMenu />
    <div className="account-ctn">
      <UserNavigation />
      <div>tourHistory</div>
    </div>
  </div>
   
  )
}
