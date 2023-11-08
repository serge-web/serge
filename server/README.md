# Serge

**Note:** As of May 2021 these are legacy notes, that relate to the time when Serge was a monolith. They are no longer relevant.

### Installing as a service

On a MS Windows PC, Serge can be installed as a service - meaning it starts whenever that machine starts. Perform this by executing `installSergeService.bat`. Windows will popup up a series of confirmation boxes to approve the installation. On completion, Serge will be installed under MS Windows as `Serge Server`. You can find the script to uninstall the service. It's not imaginagively named.

### For development

The live demo version of Serge requires a hard-coded path to the backend server.

This path is configured from the top-level `.env` data-file, according to the `locally` and `heroku` sections further down.

ensure line 6&7 uncommented in `client/src/api/consts.js`

change "homepage" to `http://localhost:8080/client/build` from `https://serge-dev.herokuapp.com/client/build` in `client/package.json`

`npm run start` at `/client` for local dev (as well as `npm run start` at `/`)

`npm run start` at `/` for testing heroku environment

#### to run locally

`localhost:3000` or `localhost:8080` (heroku env)

### for heroku

ensure line 6&7 commented in `client/src/api/consts.js`

change "homepage" to `https://serge-dev.herokuapp.com/client/build` from `http://localhost:8080/client/build` in `client/package.json`

push to heroku
