const {verify} = require("jsonwebtoken")


const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
  // in case it dosen't even exist
    if (!accessToken) return res.json({ error: "User not logged in!" });
  // in case it exists and we need to verify the authanticity
    try {
      const validToken = verify(accessToken, "importantsecret");
      req.user = validToken;
      if (validToken) {
        return next();
      }
    } catch (err) {
      return res.json({ error: err });
    }
  };
  
  module.exports = { validateToken };
