import React from 'react'
import picOne from '../assets/Images/picOne.png'
import picThree from '../assets/Images/picThree.png'
import picFour from '../assets/Images/picFour.png'


export const links = [
  {
    id: 1,
    text: 'nav-title-1',
    url: '/',
  },
  {
    id: 2,
    text: 'nav-title-2',
    url: '/products',
  },
  {
    id: 3,
    text: 'nav-title-3',
    url: '/citizen',
  },
  {
    id: 4,
    text: 'nav-title-4',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    image: <img src={picOne} style={{borderRadius: "50px", width: "100px"}} alt="картинка" />,//<GiStabbedNote />,
    title: 'services-name-1',
    text: 'services-text-1',
  },
  {
    id: 2,
    image: <img src={picFour} style={{borderRadius: "50px", width: "100px"}} alt="картинка" />,//<GiStabbedNote />,
    title: 'services-name-2',
    text: 'services-text-2',
  },
  {
    id: 3,
    image: <img src={picThree} style={{borderRadius: "50px", width: "100px"}} alt="картинка" />,//<GiStabbedNote />,
    title: 'services-name-3',
    text: 'services-text-3',
  },
]

let products_url;
if(process.env.NODE_ENV === 'development') {
  products_url = 'http://localhost:3051/products/';
} else {
  products_url = 'https://istanbul-expert.site/api/products/'
}
export { products_url }
export const single_product_url = products_url;

// export const products_url = 'http://localhost:3051/products'
// export const single_product_url = `http://localhost:3051/products/`
