import React from 'react';

class Profile extends React.Component {

  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">Profile</p>
            <i className="fa fa-user fa-5x" aria-hidden="true"></i>
            {/* <img src="" alt="avatar" /> */}
            <p>Username</p>
            <p>Firstname</p>
            <p>Lastname</p>
            <p>Birthdate</p>
            <p>Email</p>
          </div>
          <div className="tile is-child box">
            <p className="title">Update</p>
            <form id="user_edit">
              <div className="field">
                <div className="control">
                  <input id="lastname" className="input" type="text" placeholder="Lastname" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input id="firstname" className="input" type="text" placeholder="Firstname" />
                </div>
              </div>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input id="email" className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fa fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input id="password" className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <a className="button is-warning" onclick="">Update</a>
            </form>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Favourites</p>
            <p>Maybe latest favourited caps ?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
