var express = require('express');
var router = express.Router();
const Account = require('../models/Account.js');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('/views/Tablet.html', { root: 'public' });
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let account = await Account.find({ username: username, password: password });
    if (account.length == 0) {
      res.status(401).json({ msg: "Invalid username or password", status: 'error' });
      return;
    }
    res.status(200).json({ msg: "Login success", status: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal server error", status: 'error' });
  }
})

router.post('/newacc', async (req, res) => {
  try {
    const { username, password, phoneNumber } = req.body;
    let newAcc = new Account({
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      boughtHistory: []
    })
    await newAcc.save();
    res.status(200).json({ msg: "Account created", status: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal server error", status: 'error' });
  }
})

router.post("/newBill", async (req, res) => {
  try {
    const { phoneNumber, pills } = req.body;
    let person = await Account.find({ phoneNumber: phoneNumber });
    if (person.length == 0) {
      res.status(404).json({ msg: "Can't find user with phone number", status: 'error' });
      return;
    }
    person = person[0];
    person.boughtHistory.push({
      time: new Date(),
      type1: pills[0],
      type2: pills[1],
      type3: pills[2],
      type4: pills[3],
      type5: pills[4],
      type6: pills[5]
    })
    await person.save();
    res.status(200).json({ msg: "Bill created", status: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal server error", status: 'error' });
  }
})

module.exports = router;
