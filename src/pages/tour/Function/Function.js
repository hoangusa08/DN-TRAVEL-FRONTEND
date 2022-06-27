import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "./Function.scss";
import { getTours } from "../../../store/tours";
import { useDispatch } from "react-redux";

export default function Function() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSumit = () => {
    dispatch(getTours(0, search));
  };
  return (
    <div className="function">
      <input
        placeholder="tên tour"
        className="function-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <Button className="function-submit" onClick={() => handleSumit()}>
        Tìm kiếm
      </Button>
    </div>
  );
}
