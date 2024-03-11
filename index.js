const express = require("express");

const CONFIG = require("./config");

const google = require("googleapis").google;

const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const app = express();

app.set("view engine", "ejs");

app.set("views", __dirname);

app.use(cookieParser());

const OAuth2 = google.auth.OAuth2;

app.get("/", (req, res) => {
  const oauth2clinet = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );
  const loginLink = oauth2clinet.generateAuthUrl({
    access_type: "offline",
    scope: CONFIG.oauth2Credentials.scopes,
  });
  // console.log(loginLink)
  return res.render("index", { loginLink: loginLink });
});

app.get("/youtube/playlist", function (req, res) {
  const oauth2clinet = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  if (req.query.error) {
    return res.redirect("/");
  } else {
    oauth2clinet.getToken(req.query.code, function (err, token) {
      if (err) return res.redirect("/");

      res.cookie(
        "jwtToken",
        jwt.sign(token, CONFIG.JWTsecret, { expiresIn: "1h" })
      );

      return res.redirect("/allPlaylist");
    });
  }
});

app.get("/allPlaylist", function (req, res) {
  if (!req.cookies.jwtToken) return res.redirect("/");
  const oauth2clinet = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );
  oauth2clinet.credentials = jwt.verify(req.cookies.jwtToken, CONFIG.JWTsecret);

  const service = google.youtube("v3");
  service.playlists
    .list({
      auth: oauth2clinet,
      mine: true,
      part: ["snippet,contentDetails"],
    })
    .then((response) => {
      console.log(response.data.items);
      return res.render("playlistItem", { playlist: response.data.items });
    }) //handling error here and redirecting to error page if no playlist/channel found
    .catch((err) => {
      console.log(err.errors[0].message);
      return res.render("err", { err: err.errors[0].message });
    });
});

app.get("/playlistVideo", function (req, res) {
  console.log("Id", req.query.playlistId);
  if (!req.cookies.jwtToken) return res.redirect("/");
  const oauth2clinet = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );
  oauth2clinet.credentials = jwt.verify(req.cookies.jwtToken, CONFIG.JWTsecret);

  const service = google.youtube("v3");
  service.playlistItems
    .list({
      auth: oauth2clinet,
      mine: true,
      part: ["snippet,contentDetails"],
      maxResults: 10,
      playlistId: req.query.playlistId,
    })
    .then((response) => {
      console.log("res",response.data.items);
      return res.render("playlistVideo", { videos: response.data.items });
    })
    .catch((err) => {
      console.log(err.errors[0].message);
      return res.render("err", { err: err.errors[0].message });
    });
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
