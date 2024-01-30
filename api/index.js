const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const app = express();
const crypto = require("crypto")
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json())
const port = 8000;


mongoose
  .connect("mongodb://127.0.0.1:27017/app")
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log(err);
  });

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
  const User = require("./models/user");

app.get("/",(req,res)=>{
  res.status(200).json({msg:"ok"})
})

const sendverificationmail =async (token,email)=>{
console.log(email,token)
const transpoter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"jazibzaidi02@gmail.com",
    pass:"tsjm fjqu ymwy fqcx"
  }
})

const mainoption = {
from:"Amazon.com",
to:email,
subject:"Email varification",
text : `Plase click on the following link to verify :http://localhost:2000/${token}`,

html: `
<div style="font-family: Arial, sans-serif; background-color: white; padding: 20px;border-radius: 20px;">
    <h1 style="color: #333; font-size: 20px;">Hello,</h1>
    <p style="font-size: 16px; color: #444;">Please find the attached image below:</p>
    <div style="max-width: 400px; margin: 0 auto;">
        <img src="cid:image1" alt="Image" style="max-width: 100%; height: auto; border-radius: 8px;">
    </div>
    <p style="font-size: 14px; color: #666;">Best regards,</p>
    <p style="font-size: 14px; color: #666;">Your Name</p>
</div>
`,
attachments: [{
  filename: 'one.jpg',
  path: '../one.jpg' ,
cid: 'image1' // Make sure to match the CID in the HTML content
}]
}


try {
 await transpoter.sendMail(mainoption)
} catch (error) {
  console.log('faild email :',error)
}
}

app.post('/register',async(req,res)=>{
  try {
    const {name,email,password} = req.body
    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(300).json({msg:"Email already registered"})
    }
    console.log(name)
     const newUser = new User({name,email,password})
     newUser.verificationToken = crypto.randomBytes(20).toString("hex")
     await newUser.save()


     sendverificationmail(newUser.verificationToken,newUser.email)
     res.status(200).json({msg:"user Registered"})
  } catch (error) {
    console.log('error registering user :', error)
  }
  
})




