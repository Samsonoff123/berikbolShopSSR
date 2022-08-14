import React from 'react'
import { ShoppingCartOutlined, EyeOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { Rate } from 'antd';
import A from '../A'
import { useActions } from '../utils/hooks/useActions';
import { useTypedSelector } from '../utils/hooks/useTypedSelector';

export default function index ({product, value} :any) {

    const { addItem } = useActions()

    const { cart } = useTypedSelector(state => state)

    const isExistInCart = cart.some(p => p.id === product.id)

  return (
    (product.category == value) 
        ?<div className="postMain" key={product.id}>
        <div className="img__div">
            { isExistInCart? <span className='allready'>Уже в корзине</span> :<ShoppingCartOutlined onClick={()=>addItem(product)} />}
            <div className="price">{product.price} <DollarCircleOutlined /></div>
            <img className="postImage" src={product.image} alt="postIMG" />
        </div>
        <div className="description">
            <div className="raiting">
            <span className="count"><EyeOutlined /> - {product.rating.count}</span>
            <div className="rate">
            <Rate allowHalf defaultValue={product.rating.rate} />
            </div>
            </div>
            <span>
            <b><A href={`/posts/${product.id}`} text={product.title} /></b>
            </span>
            <span>{product.description}</span>
        </div>
        </div>
    : null
  )
}
