import Header from "../components/Header/index";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";
import { Select } from 'antd';

const { Option } = Select;

type Props = {
    products: any;
    categories: [];
};

interface FilterProducts {
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

interface FiltersProps {
  filters: FilterProducts[];
}

export default function Posts({ products, categories }: Props) {
    const [value, setValue] = useState('electronics')
    
  return (
    <Header>
        <>
        <Select defaultValue={value} style={{ maxWidth: 220, width: '100%', marginBottom: 20 }} onChange={(event)=>setValue(event)}>
            {categories.map((e, id) => 
                <Option value={e} key={id}>{e}</Option >
            )}
        </Select>
        <div className="posts__main">
            {products.map((e: FilterProducts) =>
            (e.category == value) 
                ?<div className="postMain" key={e.id}>
                <div className="img__div">
                    <ShoppingCartOutlined />
                    <div className="price">{e.price} $</div>
                    <img className="postImage" src={e.image} alt="postIMG" />
                </div>
                <div className="description">
                    <div className="raiting">
                    <span className="count">count - {e.rating.count}</span>
                    <div className="rate">
                        <StarOutlined /> - {e.rating.rate}
                    </div>
                    </div>
                    <span>
                    <b>{e.title}</b>
                    </span>
                    <span>{e.description}</span>
                </div>
                </div>
                : null
            )}
        </div>
      </>
    </Header>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const res2 = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res2.json();

  return {
    props: { products, categories },
  };
};

