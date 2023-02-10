import React from 'react'
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <div>
        <Container>

        </Container>
    </div>
  )
}

export default Sidebar;

const Container = styled.div`
    width: 300px;
    background-color: red;
    height: calc(100vh - 55px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;