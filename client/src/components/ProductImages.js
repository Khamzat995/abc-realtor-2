import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onMouseMove={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 800px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.75rem;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin-bottom: 10px;
    }
  }
  .active {
    box-shadow: 0 0 0 2px var(--clr-primary-5);
    transform: scale(1.1);
  }
  @media (max-width: 576px) {
    .main {
      height: 400px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
