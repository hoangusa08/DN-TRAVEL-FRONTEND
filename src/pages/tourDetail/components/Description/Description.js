import React from "react";
import "./Description.scss";

export default function Description({ data }) {
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="description" id="description" dangerouslySetInnerHTML={{__html: data?.description}}>
      {/* {data?.description} */}
    </div>
  );
}
