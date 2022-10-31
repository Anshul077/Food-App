import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DinnerDining } from '@mui/icons-material';

const TitleBox = styled(Box)`
width:100px;
height:100px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
display:flex;
flex-direction:column;
border-radius:5px;
align-items:center;
justify-content:center;
margin:15px;
cursor:pointer;
`
const MainBox = styled(Box)`
display:flex;
align-items:center;
justify-content:center;
`

const TitleName = styled(Typography)`
margin:10px 0 0 0 ;
font-family: 'Poppins', sans-serif;
font-size: 15px;
`

const Heading = styled(Typography)`
font-size: 20px;
font-weight: bold;
font-family: 'Poppins', sans-serif;
margin:70px 0 30px 20px;
`


const MultipleDishes = () => {
    return (
        <>
           
            <MainBox >

                <TitleBox>
                    <DinnerDining style={{
                        backgroundColor: 'rgb(254 84 0)', 
                        color:'white',
                        padding: ' 7px',
                        width: ' 36px',
                        height: '36px',
                        backgroundColor: 'rgb(254, 84, 0)',
                        borderRadius: '50%'
                    }} />
                    <TitleName>Chicken</TitleName>
                </TitleBox>


            </MainBox>
        </>
    )
}

export default MultipleDishes