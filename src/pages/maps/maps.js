import React from "react";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import "./Maps.scss";

export default function Maps() {
  return (
    <div className="maps">
      <TopBarMenu />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245367.85398659302!2d107.93804192723252!3d16.072093418349933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1656422538479!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="maps-body"
      ></iframe>
    </div>
  );
}
