const prisma = require("../config/prisma");

exports.create = async (req,res)=>{
  const {vehicleId,litersRequested,photoUrl} = req.body;

  const log = await prisma.fuelLog.create({
    data:{
      vehicleId,
      driverId:req.user.id,
      litersRequested:Number(litersRequested),
      photoUrl
    }
  });

  res.json(log);
};

exports.getAll = async (req,res)=>{
  const logs = await prisma.fuelLog.findMany();
  res.json(logs);
};

exports.pending = async (req,res)=>{
  const logs = await prisma.fuelLog.findMany({
    where:{status:"pending"}
  });
  res.json(logs);
};

exports.confirm = async (req,res)=>{
  const {id} = req.params;
  const {litersConfirmed} = req.body;

  const updated = await prisma.fuelLog.update({
    where:{id},
    data:{litersConfirmed:Number(litersConfirmed),status:"confirmed"}
  });

  res.json(updated);
};