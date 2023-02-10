import React from 'react'
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <div>
        <Container>
            <Menu></Menu>
            <Menu2></Menu2>
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
    padding: 10px 0px 10px 0px;
`;