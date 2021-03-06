import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>



export const ProductsContainer = styled.div`
color: #fff;
height: 650px;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}

`

// export const Illu = styled.img`
// height: 50px;
// width: 100%;
// `

export const ProductsWrapper = styled.div`
display: box;
height: 550px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
justify-content: center;

`
export const ItemIcon = styled.img`
height:160px;
width:160px;
vertical-align: top;
display: flex;

`

export const Item = styled.div`
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px 4px rgba(0, 0, 0, 2.);
transition: all 0.2s ease-in-out;
margin-left: 50px;
margin-right: 50px;
margin-top: 50px;
margin-bottom: 50px;
border: 1px outset lightgray;

&:hover{
   transform: scale(1.04);
    transition: all 0.2s ease-in-out
    cursor pointer;
}

`

export const Title1 = styled.h1`
 font-size: 2.5rem;
color: black;
margin-bottom: 64px;
text-align: center;
@media screen and (max-width: 768px) {
}
`

export const Subtitle = styled.h2`
 font-size: 1.5rem;
color: black;
text-align: center;
margin-bottom: 30px;
margin-left: -10px;
@media screen and (max-width: 768px) {
}
`

