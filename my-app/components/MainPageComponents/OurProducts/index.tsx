import { Button } from 'antd'
import React from "react";
import PostFull from '../../PostFull'
import A from '../../A'

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

export default function index({ products }:any) {
  return (
    <>
      <div className="our__products">
        <h3>Our products</h3>
        <div className="posts__main">
          {products.map((e: FilterProducts) => (
            <PostFull key={e.id} product={e} value="electronics" />
          ))}
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 25}}><Button type="primary"><A href="/posts" text="All Posts" /></Button></div>
      </div>
    </>
  );
}
