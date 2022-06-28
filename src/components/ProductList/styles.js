import styled from "styled-components";

export const ListProd = styled.ul`
*{box-sizing: border-box;
margin: 0;
padding: 0;}

margin-top: 60px;
padding: .5rem 1rem;

overflow-x: auto;

display: flex;
align-items: center;
gap: 1rem;

list-style: none;

    li{
        margin: 0;
        border: solid blueviolet;
        min-width: 230px;
        min-height: 200px;
        border-radius: 5px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        padding: 1rem;

        h2{
            color: blueviolet;
        }

        span{
            font-weight: 500;
        }

        button{
            box-sizing: border-box;
            
            border-style: none;
            border-radius: 5px;
            color: aqua;
            background-color: blueviolet;

            font-weight: 800;
            padding: .5rem .5rem;

            cursor: pointer;

            &:hover{
                border: solid aqua;
            }

            &:active{
                opacity: .6;
            }
        }
    }
    @media(min-width: 768px) {
    margin: 10vh auto;
    width: 90vw;
    max-width: 730px;
    }
`