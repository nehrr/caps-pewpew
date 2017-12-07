import React from 'react';

class Profile extends React.Component {

  render() {
    return (
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Profile</p>
            <i class="fa fa-user fa-5x" aria-hidden="true"></i>
            {/* <img src="" alt="avatar" /> */}
            <p>Username</p>
            <p>Firstname</p>
            <p>Lastname</p>
            <p>Birthdate</p>
            <p>Email</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Update</p>
            <form id="user_edit">
              <div class="field">
                <div class="control">
                  <input id="lastname" class="input" type="text" placeholder="Lastname" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input id="firstname" class="input" type="text" placeholder="Firstname" />
                </div>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input id="email" class="input" type="email" placeholder="Email" />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input id="password" class="input" type="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <a class="button is-warning" onclick="">Update</a>
            </form>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Favourites</p>
            <p>Maybe latest favourited caps ?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
