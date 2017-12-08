import React from 'react';

const SignUp = () => (
  <section className="hero is-fullheight">

  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Sign up</h3>
        <div className="box">

          <form id="sign-up" method="POST" action="" enctype="application/json">

            <div className="field">
              <label className="label has-text-left">Username</label>
              <div className="control">
                <input name="username" className="input is-large" type="text" placeholder="Username" autofocus="" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Last name</label>
              <div className="control">
                <input name="lastname" className="input is-large" type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">First name</label>
              <div className="control">
                <input name="firstname" className="input is-large" type="text" placeholder="First name" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Birthdate</label>
              <div className="control">
                <input name="birthdate" className="input is-large" type="date" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Email</label>
              <div className="control">
                <input name="email" className="input is-large" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Password</label>
              <div className="control">
                <input name="password" className="input is-large" type="password" placeholder="Password" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-left">Password Confirmation</label>
              <div className="control">
                <input name="password_confirmation" className="input is-large" type="password" placeholder="Password" />
              </div>
            </div>

            <a className="button is-block is-info is-large is-success" onclick="">
              Sign up
            </a>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>

);

export default SignUp;
