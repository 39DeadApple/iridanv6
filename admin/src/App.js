import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function App(){
  const [logs,setLogs]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/fuel-logs')
    .then(r=>setLogs(r.data));
  },[]);

  return (
    <div>
      <h1>Fuel Logs</h1>
      {logs.map(l=>(
        <div key={l.id}>{l.litersRequested} L</div>
      ))}
    </div>
  );
}