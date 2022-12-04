import React, { useState,useContext } from 'react'
import { Box, Button, ButtonGroup, styled, Typography } from "@mui/material";
import { ItemData } from '../Data.js'
import { GlobalInfo } from './Home.jsx';
import { LocalMall } from '@mui/icons-material';
import { DinnerDining } from '@mui/icons-material';
import { addItemCart } from '../service.js';

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


const SecondaryBox = styled(Box)(({ theme }) => ({
    padding: 5,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    margin: "40px 15px 30px 15px",
    [theme.breakpoints.down('sm')]: {
        margin: "0 15px 30px 15px",
    }
}))

const CardBox = styled(Box)(({ theme }) => ({
    width: 100,
    height: 100,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    color: "black",
    backgroundColor:"rgb(255 136 78)",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    cursor: 'pointer',
    transition:'.3s',
    "&:hover": {
        backgroundColor: 'rgb(255 106 32)',
        
      },
    
}))

const Details = styled(Typography)`
    margin-left:auto;
    font-family: 'Poppins', sans-serif;
    margin-top:5px;
  font-size: 16px;
  font-weight:bold;
`

const StyledImage = styled("img")(({ theme }) => ({
    position: 'relative',
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    cursor: 'pointer',
    top: '-40%',
    left: '5%',
    filter: 'drop-shadow(0px 8px 7px #222)',
    "&:hover": {
        transform: 'scale(1.3)',
        transition: '.3s ease-in-out'
    },
}));


const Rupee = styled("span")(({ theme }) => ({
    color: 'rgb(254 84 0)',
    fontfamily: "'Poppins', sans-serif",
    marginTop: 5,
    marginRight: 2,
    fontSize: 15,
    fontWeight: 'bold'
}));



const ItemBox = styled(Box)`
  width: 270px;
  height: 150px;
  cursor: pointer;
  margin: 15px 10px;
  align-items:center;
  display:flex;
  padding-right:10px;
  justify-content:space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover{
   background-color:#f1f1f1;
  }
 `
const DetailsBox = styled(Box)`
  display:flex;
  flex-direction:column;
  width:112px;
 `



const MultipleDishes = ({Data}) => {
    const {user} = useContext(GlobalInfo)
    const ItemNames = ["Chicken", "Fish","Rice","Soft Drinks","Ice Cream"]
    const [DishName, setDishName] = useState("Chicken")

    const addToCart =async (item)=>{
        if(Object.keys(user).length!==0){
            let response = await addItemCart({
                username:user.displayName,
                url:item.url,
                name:item.name,
                price:item.price,
                qty:1
            });
            
        }
        else{
            alert("PLEASE LOGIN FIRST")
        }
    }


    return (
        <>
            <MainBox >
                {
                    ItemNames.map((item) => (

                        <CardBox onClick={(e) => {

                            setDishName(e.target.id || e.target.innerText || e.target.nearestViewportElement.id)



                        }
                        } >
                            <DinnerDining value={item} id={item} style={{
                                backgroundColor: '#ffffff',
                                color: 'black',
                                padding: ' 7px',
                                width: ' 36px',
                                height: '36px',
                                borderRadius: '50%'
                            }} />
                            <TitleName id={item}> {item}</TitleName>
                        </CardBox>

                    ))
                }

            </MainBox>
            <SecondaryBox>
                {Data?Data.filter((item) => item.category === DishName).map((item) => (
                    <ItemBox>
                        <StyledImage src={item.url} alt="" />
                        <DetailsBox>
                            <LocalMall style={{
                                background: 'rgb(254, 84, 0)',
                                borderRadius: ' 50%',
                                padding: 5,
                                color: 'white',
                                marginLeft: 80,
                                marginTop: 3,
                                position: 'absolute'
                            }} 
                            onClick={()=>addToCart(item)}
                            />
                            <Box style={{
                                width: 200,
                                marginTop: 42,
                                marginLeft: -96,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>

                                <Details>{item.name}</Details>
                                <Details style={{
                                    fontSize: 12,
                                    fontWeight: 'lighter'
                                }}>{item.calories}</Details>
                                <Details><Rupee>₹</Rupee>{item.price}</Details>
                            </Box>
                        </DetailsBox>
                    </ItemBox>
                )):""}
            </SecondaryBox>
        </>
    )
}

export default MultipleDishes