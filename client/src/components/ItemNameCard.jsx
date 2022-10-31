import React, { useState } from 'react'
import { Box, styled, Typography } from "@mui/material";
import { DinnerDining } from '@mui/icons-material';


const TitleName = styled(Typography)`
margin:10px 0 0 0 ;
font-family: 'Poppins', sans-serif;
font-size: 15px;
`



const ItemNameCard = ({ name }) => {
    const [style, setStyle] = useState({
        width: 100,
        height: 100,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        cursor: 'pointer'
    })
    
    const [logoStyle, setLogoStyle] = useState({
        backgroundColor: 'rgb(254 84 0)',
        color: 'white',
        padding: ' 7px',
        width: ' 36px',
        height: '36px',
        backgroundColor: 'rgb(254, 84, 0)',
        borderRadius: '50%'
    })
    
    const changeItem = () => {
        setStyle({ ...style, backgroundColor: 'rgb(254 84 0)' })
        setLogoStyle({ ...logoStyle, color: 'black', backgroundColor: '#ffffff' })
    }
    return (
        <>
       

                <Box style={style} onClick={() => changeItem()}>
                    <DinnerDining style={logoStyle} />
                    <TitleName>{name}</TitleName>
                </Box>
        </>
    )
}

export default ItemNameCard