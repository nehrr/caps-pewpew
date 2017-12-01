import React from 'react';

const SignIn = () => (
  <section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Connection</h3>
        <div class="box">
          <figure class="avatar">
            <img src="add logo Capszinga" />
          </figure>
          <form>
            <div class="field">
              <label class="label has-text-left">Username</label>
              <div class="control">
                <input id="fullname" class="input is-large" type="text" placeholder="Clark Kent" autofocus="" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label has-text-left">E-mail</label>
                <input id="email" class="input is-large" type="email" placeholder="plop@caps.io" autofocus="" />
              </div>
            </div>
            <a class="button is-block is-info is-large" onClick="cookitize();">Just do it</a>
          </form>
        </div>
        <p class="has-text-grey">
          <a href="/index.html">*please submit form to proceed*</a>
        </p>
      </div>
    </div>
  </div>
</section>





























);

export default SignIn;