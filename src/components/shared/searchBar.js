import searchIcon from "../../assets/search.svg"
const SearchComponent = () => {
  return (
    <div className="bg-gray-200 w-1/2 p-2 rounded-lg flex items-center">
      <img src={searchIcon} alt="search" className="mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-gray-500 placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchComponent;
