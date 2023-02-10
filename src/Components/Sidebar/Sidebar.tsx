import React from 'react'
import styled from 'styled-components';
import { MdOutlineWbSunny, MdOutlineEmail, MdOutlineAttachFile } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { BsCalendar4Week, BsPeople } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div>
        <Container>
            <Menu></Menu>
            <Menu2>
                <Icon>
                    <a href="https://outlook.live.com/mail/"><MdOutlineEmail /></a>
                </Icon>
                <Icon>
                    <a href="https://outlook.live.com/calendar/0/view/month"><BsCalendar4Week /></a>
                </Icon>
                <Icon>
                    <a href="https://outlook.live.com/people/0/"><BsPeople /></a>
                </Icon>
                <Icon>
                    <a href="https://outlook.live.com/files/"><MdOutlineAttachFile /></a>
                </Icon>
                <Icon>
                    <a href="https://to-do.live.com/tasks/"><TiTickOutline /></a>
                </Icon>
            </Menu2>
        </Container>
    </div>
  )
}

export default Sidebar;

const Container = styled.div`
    width: 300px;
    background-color: black;
    height: calc(100vh - 55px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
const Menu = styled.div`
    width: 100%;
    background-color: red;
    padding: 10px 0px 10px 0px;
`;
const Menu2 = styled.div`
    width: 100%;
    background-color: orange;
    padding: 10px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Icon = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 350ms;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: #FAF9F8;
    }
`;