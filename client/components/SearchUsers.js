import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getAllUsers, _addFriend, _getFriends } from "../store";

import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";

import { Button, Box } from "@material-ui/core";

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
    backgroundImage: `url(${suggestion.picUrl})`,
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

//Component -----------------------------------
function SearchUsers() {
  // local states
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [isFound, setIsFound] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  // store
  const userStore = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.auth);
  const friendsStore = useSelector((state) => state.friends);
  const usersArr = userStore.users;

  // component did mount
  useEffect(() => {
    // Get All users from db
    dispatch(_getAllUsers());
  }, []);

  useEffect(() => {
    dispatch(_getFriends(loggedInUser.id));
  }, [friendsStore.addedFriend]);

  let people = [];
  people = usersArr?.map((user) => {
    return {
      first: user.first_name,
      last: user.last_name,
      picUrl: user.prof_picUrl,
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
    setValue("");
  };

  const onSuggestionSelected = (e, { suggestion, method }) => {
    e.preventDefault();

    setSelected((selected) => ({
      ...selected,
      ...suggestion,
    }));

    setIsFound(true);
  };

  const onClearButton = (e) => {
    e.preventDefault;
    setSelected({});
    setIsFound(false);
    setIsCopied(false);
  };

  const handleCopy = (e) => {
    e.preventDefault;
    setIsCopied(true);
    return navigator.clipboard.writeText(
      "https://capstone-delicio.herokuapp.com/"
    );
  };

  const handleAddUser = (e) => {
    e.preventDefault;
    dispatch(_addFriend(loggedInUser.id, selected.id));
  };

  function AddUserButton() {
    return (
      <Box m={2}>
        <Button
          variant="contained"
          onClick={handleAddUser}
        >{`Add ${selected.first} ${selected.last} as a Friend`}</Button>
      </Box>
    );
  }

  function InviteFriend() {
    return (
      <div>
        <p>
          Can't find your friend? <br />
          Invite them to Delicio with this link:
        </p>
        <Button variant="contained" onClick={handleCopy}>
          {isCopied ? "Copied!" : "https://capstone-delicio.herokuapp.com/"}
        </Button>
      </div>
    );
  }

  const inputProps = {
    placeholder: "Find friends...",
    value,
    onChange: onChange,
  };

  // need to add onSuggestionSelected below
  return (
    <div>
      <Box m={2}>
        <Button variant="contained" onClick={onClearButton}>
          Reset
        </Button>
      </Box>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
      />
      <div>{selected.first ? AddUserButton() : InviteFriend()}</div>
    </div>
  );
}
export default SearchUsers;
