import React from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      toast("Please check search form and tap Enter");
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <input
          className={css.searchinput}
          type="text"
          name="topic"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchbutton}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
