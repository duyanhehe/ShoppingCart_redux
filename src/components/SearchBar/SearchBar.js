import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slice/productsSlice";
import { Input } from "antd";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div style={{ paddingBottom: "30px", paddingTop: "30px" }}>
      <Input
        type="text"
        placeholder="Search for products..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
