import { useState } from "react";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import data from "../../data/users.json";

import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  //const [userData, setUserData] = useState(data);
  const [results, setResults] = useState([]);

  const handlerCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const handlerSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) => {
        return (
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus)
        );
      });

      setResults(filteredData);
    }
  };

  console.log(results);
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox
        onSearch={handlerSearchClick}
        onClose={handlerCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop} />
    </div>
  );
}
