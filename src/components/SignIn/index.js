import React from 'react';

const SignIn = () => (
  <section className="hero is-fullheight">
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Connection</h3>
        <div className="box">
          <figure className="avatar">
            <img src="add logo Capszinga" />
          </figure>
          <form>
            <div className="field">
              <label className="label has-text-left">Username</label>
              <div className="control">
                <input id="fullname" className="input is-large" type="text" placeholder="Clark Kent" autofocus="" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label has-text-left">E-mail</label>
                <input id="email" className="input is-large" type="email" placeholder="plop@caps.io" autofocus="" />
              </div>
            </div>
            <a className="button is-block is-info is-large" onClick="cookitize();">Just do it</a>
          </form>
        </div>
        <p className="has-text-grey">
          <a href="/index.html">*please submit form to proceed*</a>
        </p>
      </div>
    </div>
  </div>
</section>





























);

export default SignIn;
