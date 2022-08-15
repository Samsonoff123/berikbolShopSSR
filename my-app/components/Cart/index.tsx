import React, { useEffect, useState } from "react";
import { Drawer } from 'antd';
import { useSelector } from "react-redux";
import { DeleteFilled } from '@ant-design/icons';
import { useActions } from "../utils/hooks/useActions";
import { TypeRootState } from "../utils/app/store";

type Props = {
    visible: boolean,
    onClose: ()=>void,
}

export default function index({ visible, onClose }:Props) {

    const cartItem = useSelector((state: TypeRootState)=>state.cart)

    const { removeItem } = useActions()

    const [totalPrice, setTotalPrice] = useState(0)

    let result = 0

    useEffect(() => {

      result = 0
      cartItem.forEach((e :any) => {
        result = result + e.price
      })

      setTotalPrice(result)
      
    }, [cartItem])

  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
    {cartItem.map((e: any)=>
        <>
            <div key={e.id} className="cart__group">
                <div>
                    <p>{e.title}</p>
                    <p>{e.discribtion}</p>
                    <p>{e.price}</p>
                    {}
                </div>
                <DeleteFilled onClick={()=>removeItem(e)} />
            </div>

            <div style={{padding: '5px 0', marginBottom: 10, borderBottom: "1px solid black"}} />
        </>
    )}
      {(totalPrice === 0) ? <span>empty</span> : <span>total price: {totalPrice}</span>}
    </Drawer>
  );
}
