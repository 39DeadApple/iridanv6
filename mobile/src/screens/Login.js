import React,{useState} from 'react';
import {View,TextInput,Button} from 'react-native';
import api from '../api';

export default function Login(){
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');

  const login=async()=>{
    await api.post('/auth/login',{phone,password});
  };

  return (
    <View>
      <TextInput placeholder="phone" onChangeText={setPhone}/>
      <TextInput placeholder="password" onChangeText={setPassword}/>
      <Button title="login" onPress={login}/>
    </View>
  );
}