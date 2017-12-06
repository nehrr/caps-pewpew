import React from 'react';

const SignUp = () => (
  <section class="hero is-fullheight">

  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Sign up</h3>
        <div class="box">

          <form id="sign-up" method="POST" action="" enctype="application/json">

            <div class="field">
              <label class="label has-text-left">Username</label>
              <div class="control">
                <input name="username" class="input is-large" type="text" placeholder="Username" autofocus="" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Last name</label>
              <div class="control">
                <input name="lastname" class="input is-large" type="text" placeholder="Last name" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">First name</label>
              <div class="control">
                <input name="firstname" class="input is-large" type="text" placeholder="First name" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Birthdate</label>
              <div class="control">
                <input name="birthdate" class="input is-large" type="date" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Email</label>
              <div class="control">
                <input name="email" class="input is-large" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Password</label>
              <div class="control">
                <input name="password" class="input is-large" type="password" placeholder="Password" />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left">Password Confirmation</label>
              <div class="control">
                <input name="password_confirmation" class="input is-large" type="password" placeholder="Password" />
              </div>
            </div>

            <a class="button is-block is-info is-large is-success" onclick="">
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
