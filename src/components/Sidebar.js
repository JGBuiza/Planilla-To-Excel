import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './styles';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdHelpCircle } from "react-icons/io";
import { RiFileExcel2Fill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'><RiFileExcel2Fill />&nbsp;&nbsp;PLANILLAS</SidebarLink>
        <SidebarLink to='/clientes'><BsPeopleFill />&nbsp;&nbsp;CLIENTES </SidebarLink>
        <SidebarLink to='/guia'><IoMdHelpCircle />&nbsp;&nbsp;GUIA</SidebarLink>
        <SidebarLink to='/importante'><BsFillInfoCircleFill />&nbsp;&nbsp;IMPORTANTE</SidebarLink>
       
        
      </SidebarMenu>

    </SidebarContainer>
  );
};

export default Sidebar;