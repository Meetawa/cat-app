import React,{useEffect,useState} from 'react'
import ReportPriorities from './components/ReportPriorities'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    AP.request({
      url: "/rest/api/3/priority",
      type: "GET",
      success: response => { 
        response = JSON.parse(response) 
        setData(response) 
      }, 
      error: () => {  
        console.log(arguments);
      }
    })
  },[])
  return (
      <ReportPriorities 
      data={data}/>
  );
}
export default App;
