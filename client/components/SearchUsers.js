import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { _getAllUsers, _addFriend, _getFriends } from '../store';

import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

import { Button, Box, Grid, FormGroup, Container } from '@material-ui/core';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// need to pass in people array
function getSuggestions(value, people) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

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
    backgroundSize: '50px',
  };

  return (
    <span className={'suggestion-content'} style={searchBoxStyle}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? 'highlight' : null;

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
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selected, setSelected] = useState({});
  const [isFound, setIsFound] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  // store
  const userStore = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.auth);
  const friendsStore = useSelector((state) => state.friends);
  const usersArr = userStore.users;

  let history = useHistory();

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
    setValue('');
  };

  const onSuggestionSelected = (e, { suggestion, method }) => {
    e.preventDefault();

    setSelected((selected) => ({
      ...selected,
      ...suggestion,
    }));

    setSelectedUser(suggestion.first + ' ' + suggestion.last);
    setIsFound(true);
    setIsAdded(false);
  };

  const onClearButton = (e) => {
    e.preventDefault;
    setSelected({});
    setIsFound(false);
    setIsCopied(false);
    setSelectedUser('');
    setIsFound(false);
  };

  const handleCopy = (e) => {
    e.preventDefault;
    setIsCopied(true);
    return navigator.clipboard.writeText(
      'https://capstone-delicio.herokuapp.com/',
    );
  };

  const handleAddUser = (e) => {
    e.preventDefault;
    dispatch(_addFriend(loggedInUser.id, selected.id));
    setIsAdded(true);
    setSelected({});
    setIsFound(true);
    setIsCopied(false);
    setSelectedUser('');
  };

  const handleGoBack = (e) => {
    e.preventDefault;
    history.push('/eventinput');
  };

  function AddUserButton() {
    return (
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        onClick={handleAddUser}>
        {isAdded
          ? 'Added!'
          : `Add ${selected.first} ${selected.last} as a Friend`}
      </Button>
    );
  }

  function InviteFriend() {
    return (
      <Grid item xs={12}>
        <Box component="span" sx={{ display: 'block', whiteSpace: 'normal' }}>
          Can't find your friend? Invite them to Delicio with this link:
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleCopy}
          color="primary">
          {isCopied ? 'Copied!' : 'https://capstone-delicio.herokuapp.com/'}
        </Button>
      </Grid>
    );
  }

  function BackToEvent() {
    return (
      <Button fullWidth variant="outlined" onClick={handleGoBack}>
        Back to Event Planning
      </Button>
    );
  }

  const inputProps = {
    placeholder: 'Find friends...',
    value: value ? value : selectedUser,
    onChange: onChange,
  };

  // need to add onSuggestionSelected below
  return (
    <Container maxWidth="xs" style={{ marginTop: '20px' }}>
      <Button variant="contained" onClick={onClearButton} fullWidth>
        Start a new friends search
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={inputProps}
          />
        </Grid>
        <Grid item xs={12}>
          {isFound ? AddUserButton() : null}
        </Grid>
        <Grid item xs={12}>
          {InviteFriend()}
        </Grid>
        <Grid item xs={12}>
          {BackToEvent()}
        </Grid>
      </Grid>
    </Container>
  );
}
export default SearchUsers;
