import toast, { Toaster } from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const keyword = form.elements.keyword.value;

    if (keyword.trim() === "") {
      toast.error("Please enter your search query for movies");
      return;
    }

    onSearch(keyword);
    form.reset();
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="keyword"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={css.btn} type="submit">
          <FcSearch />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
