import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { Button } from '@material-ui/core'
import { _addEventPicks, _updateEventPicks } from '../store/eventPicks'

const SwipePage = () => {
  const [lastDirection, setLastDirection] = useState()

  const dispatch = useDispatch()

  const yelp = useSelector((state) => state.yelp)
  //  yelp.restPhotos for photo array
  const event = useSelector((state) => state.event)
  const friends = useSelector((state) => state.friends)
  const user = useSelector((state) => {
    return state.auth
  })

  // set photos swiped right to isLiked

  const swiped = (direction, swipedPhoto) => {
    if (direction === 'right') {
      dispatch(_updateEventPicks(swipedPhoto))
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const handleOnClick = () => {
    e.preventDefault()
    // sets isSubmit to be true
  }

  useEffect(() => {
    let eventId = event.event.id
    const attendees = [
      ...friends.setSelectedFriends,
      { name: `${user.first_name} ${user.last_name}`, id: user.id },
    ]

    console.log('attendees', attendees)

    attendees.forEach((friend) => {
      // console.log(friend.id);
      let userId = friend.id

      yelp.restPhotos.map((photo) => {
        // return console.log("restPhotosId", photo.id);
        let restaurantId = photo.id
        let restaurantAlias = photo.alias
        let restaurant_picUrl = photo.imgSrc
        let picDescription = photo.imgDesc
        dispatch(
          _addEventPicks(
            eventId,
            userId,
            restaurantId,
            restaurantAlias,
            restaurant_picUrl,
            picDescription
          )
        )
      })
    })
  }, [])

  // }

  return (
    <div className="swipe-container">
      <h1>Restaurant Selections</h1>
      <div className="card-container">
        {yelp.restPhotos.map((photo, idx) => (
          <TinderCard
            className="swipe"
            key={idx}
            // need to grab eventpicksId -- HOWWWWW
            onSwipe={(dir) => swiped(dir, photo.id)}
            onCardLeftScreen={() => outOfFrame(photo.imgDesc)}
          >
            {/* <Button onClick={() => console.log(`hello from ${photo.id}`)}>
              MORE INFO{" "}
            </Button> */}
            <div
              style={{ backgroundImage: 'url(' + photo.imgSrc + ')' }}
              className="card"
            >
              <h3>{photo.imgDesc}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {/* <Button onClick={() => console.log("clicked done")}>Done</Button> */}
      <Button
        onClick={handleOnClick}
        variant="contained"
        color="primary"
        type="submit"
      >
        Next
      </Button>
    </div>
  )
}
export default SwipePage
