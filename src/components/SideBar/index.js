import React from 'react'
import {SidebarContainer,Icon ,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWarp,SidebarRoute} from './SideBarEl';

const Sidebar = ({isOpen , toggle} ) => {
    const d= (event)=>{
       window.location = event.target.name;    
    }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink name='/about'  onClick={toggle ,d}>
                    About
                </SidebarLink>
                <SidebarLink name="/ourtest" onClick={toggle,d}>
                  Ourtest
                </SidebarLink>
                <SidebarLink name="services" onClick={toggle,d}>
                    Services
                </SidebarLink>
 
              </SidebarMenu> 
              <SideBtnWarp>
              <SidebarRoute to='SignUp' >SignUp</SidebarRoute>
              </SideBtnWarp>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
