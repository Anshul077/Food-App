import React,{useContext } from 'react'
import { Box, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addItemCart } from '../service.js';


// import { ItemData } from '../Data.js'
import { LocalMall, ArrowForward, ArrowBack } from '@mui/icons-material';
import { GlobalInfo } from './Home.jsx';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};


const MainBox = styled(Box)(({ theme }) => ({
    padding: 5,
    margin: "0 15px 30px 15px",
    [theme.breakpoints.down('sm')]: {
        margin: "0 15px 30px 15px",
    }
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
    top: '-19%',
    left: '3%',
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
height: 140px;
cursor: pointer;
margin: 15px 25px;
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


const StyledCarousel = styled(Carousel)`
overflow:visible;
`;

const ItemCarousel = ({ Data }) => {

    const {user,counter,setCounter}=useContext(GlobalInfo)

    const arrowStyle = {
        height: 34,
        width: 34,
        border: 0,
        color: "#fff",
        background: "rgb(255 154 104)",
        borderRadius: "10%",
        position: "absolute",
        right: '4%',
        top: '-30%'
    };
    const CustomRightArrow = ({ onClick }) => (
        <button className="arrow right" onClick={onClick} style={arrowStyle}>
            <ArrowForward style={{ fontSize: "25px" }} />
        </button>
    );
    const arrowLeftStyle = {
        height: 34,
        width: 34,
        border: 0,
        color: "#fff",
        background: "rgb(255 154 104)",
        borderRadius: "10%",
        position: "absolute",
        right: '8%',
        top: '-30%'
    };
    const CustomLeftArrow = ({ onClick }) => (
        <button className="arrow left" onClick={onClick} style={arrowLeftStyle}>
            <ArrowBack style={{ fontSize: "25px" }} />
        </button>


    );
    const addToCart = async (item) => {
        if (Object.keys(user).length !== 0) {
            let response = await addItemCart({
                username: user.displayName.replaceAll(' ', ''),
                url: item.url,
                name: item.name,
                price: item.price,
                qty: 1
            })
            if (response) {
                setCounter(counter + 1)
            }
        }
        else {
            alert("PLEASE LOGIN FIRST")
        }
    }


    return (
        <>
            <MainBox>
                <StyledCarousel
                    swipeable={true}
                    draggable={false}
                    arrows
                    responsive={responsive}
                    centerMode={false}
                    infinite={false}
                    shouldResetAutoplay={false}
                    autoPlay={false}
                    renderButtonGroupOutside={false}

                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    keyBoardControl={true}
                    showDots={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >
                    {Data ? Data.filter((item) => item.category === "all").map((item) => (
                        <ItemBox>
                            <StyledImage src={item.url} alt="" />
                            <DetailsBox>
                                <LocalMall style={{
                                    background: 'rgb(254, 84, 0)',
                                    borderRadius: ' 50%',
                                    padding: 5,
                                    color: 'white',
                                    marginLeft: 80,
                                    marginTop: -10,
                                    position: 'absolute'
                                }}
                                    onClick={() => addToCart(item)}
                                />
                                <Box style={{ width: '112px', marginTop: 20, display: 'flex', flexDirection: 'column' }}>

                                    <Details>{item.name}</Details>
                                    <Details style={{
                                        fontSize: 12,
                                        fontWeight: 'lighter'
                                    }}>{item.calories}</Details>
                                    <Details><Rupee>₹</Rupee>{item.price}</Details>
                                </Box>
                            </DetailsBox>
                        </ItemBox>
                    )) : "LOADING......"}
                </StyledCarousel>
            </MainBox>
        </>
    )
}

export default ItemCarousel