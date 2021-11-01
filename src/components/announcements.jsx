import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #f07167;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
    return (
        <Container>
            Fall deals! 20% off everything in store!!
        </Container>
    )
}

export default Announcements
