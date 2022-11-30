import React from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Profile = ({fullName, bio, profession, handleName,stylePhoto,styleName,styleProf,styleBio,children}) => {
  return (
    <div className='App'>
      <div>
        <div style={styleName}> {fullName} </div>
        <div style={styleProf}> {profession} </div>
        <div style={styleBio}> {bio} </div>
        <Button onClick={handleName} variant="warning">handleName</Button>{' '}
      </div>
      <img src={children} style={stylePhoto}/>
    </div>
  )
}
Profile.defaultProps={ fullName:"name does not exist", bio: "no bio", profession:"no profession"}
Profile.propTypes={ fullName:PropTypes.string, bio: PropTypes.string, profession:PropTypes.string}
export default Profile