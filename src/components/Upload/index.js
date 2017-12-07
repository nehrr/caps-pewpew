import React from 'react';

const Upload = () => (
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Upload</h3>
          <div class="box">

            <form id="upload" method="POST" action="">

              <div class="file has-name is-boxed is-centered">
                <label class="file-label">
                  <input class="file-input" type="file" name="file" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    {/* ${dynamic file name} */}
                  </span>
                </label>
              </div>

              <br />
              <a class="button is-block is-info is-large" onClick="">Send file</a>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="/index.html">*please submit form to proceed*</a>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Upload;
