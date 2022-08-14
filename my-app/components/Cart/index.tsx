import React, { useEffect, useState } from "react";
import { Drawer } from 'antd';
import { useSelector } from "react-redux";
import { DeleteFilled } from '@ant-design/icons';
import { useActions } from "../utils/hooks/useActions";
import { useTypedSelector } from "../utils/hooks/useTypedSelector";

type Props = {
    visible: boolean,
    onClose: ()=>void,
}

export default function index({ visible, onClose }:Props) {

    const cartItem = useSelector((state: any)=>state.cart)

    const { removeItem } = useActions()

    const { cart } = useTypedSelector(state => state)

  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
    {cartItem.map((e: any)=>
        <>
            <div className="cart__group">
                <div>
                    <p>{e.title}</p>
                    <p>{e.discribtion}</p>
                    <p>{e.price}</p>
                </div>
                <DeleteFilled onClick={()=>removeItem(e)} />
            </div>

            <div style={{padding: '5px 0', marginBottom: 10, borderBottom: "1px solid black"}} />
        </>
    )}
    </Drawer>
  );
}
