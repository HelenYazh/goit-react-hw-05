import toast, { Toaster } from "react-hot-toast";
import { FcSearch } from "react-icons/fc";

const MoviesPage = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const keyword = form.elements.keyword.value;

    if (keyword.trim() === "") {
      toast.error("Please enter your search query for movies");
      return;
    }

    onSubmit(keyword);
    form.reset();
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <FcSearch />
        </button>
      </form>
    </>
  );
};

export default MoviesPage;
