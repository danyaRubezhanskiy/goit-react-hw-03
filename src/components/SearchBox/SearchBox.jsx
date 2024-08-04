import css from "./SearchBox.module.css";

const SearchBox = ({ filter, handleValue }) => {
  return (
    <div className={css.searchBoxContainer}>
      <label className={css.label} htmlFor="search">
        <span>Find contact by name</span>
        <input
          className={css.input}
          type="text"
          name="search"
          id="search"
          value={filter}
          onChange={handleValue}
        />
      </label>
    </div>
  );
};

export default SearchBox;
