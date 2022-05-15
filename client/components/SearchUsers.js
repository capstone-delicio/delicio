import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getAllUsers } from "../store";

import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import { PermPhoneMsg } from "@material-ui/icons";

// const people = [
//   {
//     first: "Charlie",
//     last: "Brown",
//     twitter: "https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png",
//   },
//   {
//     first: "Charlotte",
//     last: "White",
//     twitter: "https://upload.wikimedia.org/wikipedia/en/e/e9/Lucy_van_Pelt.png",
//   },
//   {
//     first: "Chloe",
//     last: "Jones",
//     twitter: "ladylexy",
//   },
//   {
//     first: "Cooper",
//     last: "King",
//     twitter: "steveodom",
//   },
// ];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// need to pass in people array
function getSuggestions(value, people) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return people.filter((person) => regex.test(getSuggestionValue(person)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.first} ${suggestion.last}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  const searchBoxStyle = {
    backgroundImage: `url(${suggestion.twitter})`,
    backgroundSize: "50px",
  };

  return (
    <span className={"suggestion-content"} style={searchBoxStyle}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? "highlight" : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    </span>
  );
}

//Component ----------------
function SearchUsers() {
  // local states
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // dispatch
  const dispatch = useDispatch();

  // store
  const userStore = useSelector((state) => state.user);
  const usersArr = userStore.users;

  // component did mount
  useEffect(() => {
    // Get All users from db
    dispatch(_getAllUsers());
  }, []);

  let people = [];
  people = usersArr?.map((user) => {
    return {
      first: user.first_name,
      last: user.last_name,
      twitter: user.prof_picUrl,
      id: user.id,
    };
  });

  const onChange = (e, { newValue, method }) => {
    e.preventDefault();
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value.toString(), people));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Start typing...",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
export default SearchUsers;
