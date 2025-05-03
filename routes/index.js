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

const aiID = process.env.AI_ID;
const ragToken = process.env.RAG_TOKEN;
console.log(aiID);
console.log(ragToken);

router.post('/getAiChat', async (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  try {
    const response = await fetch(`https://api.lenguyenbaolong.art/api/v1/chats_openai/${aiID}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ragToken}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat@DeepSeek',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 256,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`External API error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data);
    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error in /getAiChat:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
