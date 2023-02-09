import React from 'react'

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
const ReportPriorities = ({data}) => {
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
  )
}

export default ReportPriorities
