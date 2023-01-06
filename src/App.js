import React,{useEffect,useState} from 'react'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
function App() {
  
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("https://optimizory.atlassian.net/rest/api/3/priority").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
      })
    }).catch(err=>{
      console.log(err);
  })
  },[])
  console.warn(users)
  return (
      <DropdownMenu trigger="Priorities">
        {
          users.map((item,i)=>
          <DropdownItemGroup key={i}>
          <DropdownItem>{item.name}</DropdownItem>
          </DropdownItemGroup>
          )
        }
      </DropdownMenu>
  );
}
export default App;