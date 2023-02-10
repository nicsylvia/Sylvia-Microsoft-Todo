import React from 'react'
import styled from 'styled-components';
import { MdOutlineWbSunny, MdOutlineEmail, MdOutlineAttachFile } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { BsCalendar4Week, BsPeople } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div>
        <Container>
            <Menu>
                <Div1>
                    <Pic>
                        <RxHamburgerMenu />
                    </Pic>
                </Div1>
                <Div>
                    <Pic>
                        <MdOutlineWbSunny />
                    </Pic>
                    <Tittle>
                        <span>My Day</span>
                    </Tittle>
                </Div>
                <Div>
                    <Pic>
                        <AiOutlineStar />
                    </Pic>
                    <Tittle>
                        Important
                    </Tittle>
                </Div>
                <Div>
                    <Pic>
                        <BiCalendar />
                    </Pic>
                    <Tittle>
                        Planned
                    </Tittle>
                </Div>
                <Div>
                    <Pic>
                        <FaRegUser />
                    </Pic>
                    <Tittle>
                        Assigned to me
                    </Tittle>
                </Div>
                <Div>
                    <Pic>
                        <FiHome />
                    </Pic>
                    <Tittle>
                        Tasks
                    </Tittle>
                </Div>
            </Menu>
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
                    <a href="https://to-do.live.com/tasks/"><span><TiTickOutline /></span></a>
                </Icon>
            </Menu2>
        </Container>
    </div>
  )
}

export default Sidebar;

const Container = styled.div`
    width: 300px;
    background-color: white;
    height: calc(100vh - 55px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
const Menu = styled.div`
    width: 100%;
    /* background-color: red; */
    padding: 10px 0px 10px 0px;
`;
const Menu2 = styled.div`
    width: 100%;
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
    a{
        color: black;
        font-size: 20px;
        span{
            color: blue;
        }
    }
    :hover{
        background-color: #dfdddb;
    }
`;
const Div = styled.div`
    width: 100%;
    padding: 5px 0px 5px 0px;
    /* background-color: green; */
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition: all 350ms;
    :hover{
        background-color: skyblue;
    }
`;
const Pic = styled.div`
    width: 30px;
    height: 30px;
    /* background-color: azure; */
    object-fit: contain;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Tittle = styled.div`
    width: 200px;
    height: 30px;
    /* background-color: brown; */
    display: flex;
    align-items: center;
    span{
        font-weight: bold;
    }
`;
const Div1 = styled.div`
    margin-left: 20px;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
`;