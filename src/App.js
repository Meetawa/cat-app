import React,{useEffect,useState} from 'react'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    AP.request('/rest/api/3/priority').then((response)=>{
      response.json().then((resp)=>{
        setData(resp)
      })
    }).catch(e=>{
      console.log(e)
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
