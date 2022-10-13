var admin = require("firebase-admin");
//onst authapp = require("@/utils/firebase-admin")

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-project-c5aa0.firebaseapp.com",
});

const auth = async (req, res, next) => {
  try {
    //console.log("reques is : " + req.headers);
    const token = req.header("x-auth-token");
    console.log("token : " + token);

    if (!token)
      return res.status(401).json({ msg: "no auth token, access denied" });

    const verified = await admin.auth().verifyIdToken(token);
    console.log("i am here");
    if (!verified)
      return res
        .status(401)
        .json({ msg: "token verification failed, authorization denied" });

    // request me hamko ek req.user milta hai ham usme verified.id se id dal denge taki hame body me id bhejni hi na pde
    req["currentUser"] = verified; // ab ham jb call back funtion likhege to wha pr req.user karne se hamko directly user ki id mil jayegi

    next();
  } catch (err) {
    console.log("error in middleware" + err.message);
    res.status(500).json({ error: err.message });
  }
};
module.exports = auth;
