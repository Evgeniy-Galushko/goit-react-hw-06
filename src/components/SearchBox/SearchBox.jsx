import s from "./SearchBox.module.css";

import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.filter);
  // console.log(selectNameFilter);

  // const selectContacts = useSelector((state) => state.contacts.items);

  const handleChange = (event) => {
    const input = event.currentTarget.value;
    dispatch(changeFilter(input));
  };

  return (
    <div className={s.serchboxDiv}>
      <h2 className={s.serchboxTitle}>Find contacts by name</h2>
      <input
        className={s.serchboxInput}
        type="text"
        value={selectNameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
