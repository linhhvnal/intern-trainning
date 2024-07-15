import PropTypes from "prop-types";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = ({ value, onChange}) => {
  // Add prop validation
  SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  return (
    <div className="md:w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent text-sx py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      <FaMagnifyingGlass
        className="text-slate-500 cursor-pointer hover:text-black"
      />
    </div>
  );
};

export default SearchBar;
