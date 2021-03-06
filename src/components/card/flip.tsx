import * as React from "react";
import styled, { css } from "styled-components";


interface Flip {
    size?: string,
    alto?: string,
    turnCards?: boolean
}

const Producto = styled.div<Flip>`
background-color: transparent;
border: 1px solid transparent;
padding: 1px;
margin-bottom: 20%;
width:${(props) => props.size};
height:${(props) => props.alto};
max-width: ${(props) => props.size};
`

const ProductoFlip = styled.div<Flip>`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
${props => props.turnCards ? css`
${Producto}: hover & {
    transform: rotateY(180deg);
}`: void (0)
    };`

const ProductoFrente = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100 %;
height: 100 %;
backface-visibility: hidden;
background-color: #bbb;
`

const ProductoAtras = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
backface-visibility: hidden;
transform: rotateY(180deg);
background-color: white;
`

export default function Flip(props) {
    return (
        <Producto size={props.size} alto={props.alto} >
            <ProductoFlip turnCards={props.turnCards}>
                <ProductoFrente />
                {props.children}
                <ProductoAtras>
                    <p style={{
                        "position": "absolute", "top": "50%",
                        "left": "50%", "marginRight": "-50%",
                        "transform": "translate(-50%,-50%)", "width": "90%"
                    }}>
                        Aquí se pueden meter más KPIs
                    </p>
                </ProductoAtras>
            </ProductoFlip>
        </Producto >

    )
}
