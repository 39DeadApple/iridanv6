const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req,res)=>{
  const {phone,password} = req.body;

  const user = await prisma.user.findUnique({where:{phone}});
  if(!user) return res.status(404).json({msg:"Not found"});

  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(401).json({msg:"Wrong"});

  const token = jwt.sign(
    {id:user.id,role:user.role},
    process.env.JWT_SECRET
  );

  res.json({token,user});
};