import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { _getFriends, _setSelectedFriends } from '../store';
import { useHistory } from 'react-router-dom';

// Styling -------------------------
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
  },
  indeterminateColor: {
    color: '#f50057',
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectedAll: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  variant: 'menu',
};

// Friends Select Dropdown Component -----------------------
function FriendsSelect() {
  const dispatch = useDispatch();
  const friendStore = useSelector((state) => state.friends);
  const user = useSelector((state) => state.auth);
  // stores list of selected values from the list of friends
  const [selected, setSelected] = useState([]);
  const [currentFriend, setCurrentFriend] = useState({});
  const [selectedId, setSelectedId] = useState([]);

  let history = useHistory();

  useEffect(() => {
    // Get Friends List from db
    dispatch(_getFriends(user.id));
  }, []);

  useEffect(() => {
    // NEED TO ADD FRIENDS USER ID
    const selectedFriendsId = selected.map((el) => {
      const foundFriend = friends.filter((friend) => {
        return friend.name === el;
      });
      return { name: el, id: foundFriend[0].id };
    });
    dispatch(_setSelectedFriends(selectedFriendsId));
  }, [selected]);

  const friendsArr = friendStore.friends;

  const friends = friendsArr.map((friend) => {
    return { name: friend.first_name + ' ' + friend.last_name, id: friend.id };
  });

  const classes = useStyles();

  let isAllSelected = false;
  if (friends) {
    isAllSelected = friends.length > 0 && selected.length === friends.length;
  }

  const handleChange = (event) => {
    const value = event.target.value;

    if (value[value.length - 1] === 'all') {
      setSelected(
        selected.length === friends.length
          ? []
          : friends.map((friend) => friend.name),
      );
      return;
    }

    setSelected(value);
  };

  const handleFindFriends = (e) => {
    e.preventDefault();
    history.push('/search-friends');
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-select-label">
          Select Friends to Join
        </InputLabel>
        <Select
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}>
          <MenuItem
            value="all"
            classes={{
              root: isAllSelected ? classes.selectedAll : '',
            }}>
            <ListItemIcon>
              <Checkbox
                classes={{ indeterminate: classes.indeterminateColor }}
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < friends.length
                }
              />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.selectAllText }}
              primary="Select All"
            />
          </MenuItem>
          {friends.map((friend, idx) => {
            return (
              <MenuItem key={idx} value={friend.name}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(friend.name) > -1} />
                </ListItemIcon>
                <ListItemText primary={friend.name} />
              </MenuItem>
            );
          })}
        </Select>
        <Button variant="outlined" onClick={handleFindFriends}>
          Add or Find Friends
        </Button>
      </FormControl>
    </div>
  );
}

export default FriendsSelect;
