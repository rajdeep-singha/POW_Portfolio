const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const{Resend} = require('resend');
require('dotenv').config();

const app = express();
const PORT =  5000;

//Middleware 
app.use(cors());
app.use(bodyParser.json());


const resend = new Resend(process.env.RESEND_API_KEY);


app.post("/send-email", async (req, res) => {
    console.log("Request body:", req.body);
    const { subject, text, to } = req.body;
  
    if (!to || !subject || !text) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }
  
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject,
        text
      });
  
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});


