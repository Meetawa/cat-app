import React,{useEffect,useState} from 'react'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

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
      <DropdownMenu trigger="Priorities">
        {
          data.map((item,i)=>
          <DropdownItemGroup key={i}>
          <DropdownItem>{item.name}</DropdownItem>
          </DropdownItemGroup>
          )
        }
      </DropdownMenu>
  );
}
export default App;
