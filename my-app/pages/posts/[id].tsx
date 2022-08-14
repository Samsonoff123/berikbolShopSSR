import { useRouter } from 'next/router';
import Header from '../../components/Header'
import A from '../../components/A'
import React from 'react'
import { Rate } from 'antd';
import { DollarCircleOutlined } from "@ant-design/icons";

type Props = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export default function ({products}: any ) {
  const { query } = useRouter()
  console.log(products);
  
  return (
    <Header>
      <>
        <div className="breadcrumbs"><span>/<A href="/posts" text="posts" />/{products.id}</span></div>
        <div className='detail__main'>
          <img src={products.image} alt="detailIMG" />
          <div className="discribtion">
            <div className="title"><b>{products.title}</b></div>
            <div className='text'>{products.description}</div>
            <Rate allowHalf defaultValue={products.rating.rate} />
            <div className="price"><DollarCircleOutlined /> {products.price }</div>
          </div>
        </div>
      </>
    </Header>
  )
}

export  const getServerSideProps = async ({params}:any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const products = await res.json()
  return ({
      props: { products },
  })
};