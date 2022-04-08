import React from "react";
import styled from "styled-components";

const CircleImage = props => {
    const { shape, src, size } = props;
  
    const styles = {
        shape: shape,
        src: src,
        size: size,
    }
    
    return (
            <ImageCircle {...styles}></ImageCircle>
    );
};

CircleImage.defaultProps = {
    shape: "circle",
    src: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FyMoyx.png&type=a340",
    size: 100,
};

const ImageCircle = styled.div`
    --size: ${props => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url(${(props) => props.src});
    background-size: cover;
    margin: 5px;
`;

export default CircleImage;