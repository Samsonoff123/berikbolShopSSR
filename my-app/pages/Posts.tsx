import Header from "../components/Header/index";
import React, { useEffect, useState } from "react";
import PostFull from '../components/PostFull'
import Filter from '../components/Filter'
import AddPost from '../components/AddPost'
import { useSelector } from "react-redux";
import Footer from '../components/MainPageComponents/Footer'

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
  const newPost = useSelector((state: any)=>state.posts.data)
  const [postVisible, setPostVisible] = useState(false) 
  let post = {
    ...newPost,
    rating: {
      count: 0,
      rate: 0,
    },
  }
  
  useEffect(() => {
    console.log("text");
    
    if (newPost !== null) {
      setPostVisible(true)
    } else {
      setPostVisible(false)
    }
  }, [newPost])
  

  return (
    <>
    <Header>
        <>
        <div className="top__side">
          <Filter categories={categories} value={value} set={(event) => setValue(event)} />
          <AddPost categories={categories} />
        </div>
        <div className="posts__main">
            {products.map((e: FilterProducts) =>
              <PostFull key={e.id} product={e} value={value} />
            )}
            {postVisible
              ? <PostFull product={post} value={value} />
              : null
            }
        </div>
      </>
    </Header>
     <Footer />
     </>
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

