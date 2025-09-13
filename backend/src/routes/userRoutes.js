import express from "express";
import { login, register } from "../controllers/userController.js";


const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("add-activity");
router.route("/get-activity");
router.get("/test", (req, res) => {
  res.send("User routes working!");
});


export default router;


// import express from "express";
// import { login, register } from "../controllers/userController.js";

// const router = express.Router();

// router.post("/login", login);
// router.post("/register", register);

// router.post("/add-activity", (req, res) => {
//   res.send("Activity added!");
// });

// router.get("/get-activity", (req, res) => {
//   res.send("Activities fetched!");
// });

// export default router;
