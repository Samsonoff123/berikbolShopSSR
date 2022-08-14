import Header from "../components/Header/index";
import React, { useState } from "react";
import { useActions } from "../components/utils/hooks/useActions";
import { useTypedSelector } from "../components/utils/hooks/useTypedSelector";
import PostFull from '../components/PostFull'
import Filter from '../components/Filter'

type Props = {
    products: any;
    categories: []
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

export default function Posts({ products, categories}: Props) {

  const [value, setValue] = useState('electronics')
    
  return (
    <Header>
        <>
        <Filter categories={categories} value={value} set={(event) => setValue(event)} />
        <div className="posts__main">
            {products.map((e: FilterProducts) =>
              <PostFull product={e} value={value} />
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

