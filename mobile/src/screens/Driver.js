import React,{useState} from 'react';
import {View,TextInput,Button} from 'react-native';
import api from '../api';

export default function Driver(){
  const [vehicleId,setVehicleId]=useState('');
  const [liters,setLiters]=useState('');

  const submit=async()=>{
    await api.post('/fuel-logs',{
      vehicleId,
      litersRequested:liters
    });
  };

  return (
    <View>
      <TextInput placeholder="vehicle" onChangeText={setVehicleId}/>
      <TextInput placeholder="liters" onChangeText={setLiters}/>
      <Button title="submit" onPress={submit}/>
    </View>
  );
}