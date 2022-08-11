import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { PoweroffOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Container from '../Container/index'
import A from '../A/index'
import { useSelector } from 'react-redux'
import { userAPI } from '../utils/slice/userService';

type Props = {
    children: JSX.Element;
};

export default function index({children}: Props) {

    const {data: users} = userAPI.useFetchAllUsersQuery('')

    const [isAuth, setIsAuth] = useState(false)
    const [profile, setProfile] = useState('Profile')

    useEffect(() => {
        if(localStorage.getItem('id') !== null) {
            setIsAuth(true)
            setProfile(users[+localStorage.getItem('id')].username)
        }
    }, [])

  return (
    <>
        <Container>
            <>
                <div className='header'>
                    <Container>
                        <>
                        <div className="group">
                            <h2 className='logo'><A href="/" text="Berikbol shop" /></h2>
                            <Button type="primary"><A href="/Posts" text="Posts" /></Button>
                            <Button type="primary">Primary Button</Button>
                        </div>
                        { isAuth
                            ? <div className="group">
                                <Button type="primary" icon={<ShoppingCartOutlined />}>Cart</Button>
                                <Button type="primary" icon={<UserOutlined />}>{profile}</Button>
                                <Button type="primary" danger icon={<PoweroffOutlined />}> Log out</Button>
                            </div>
                            : <Button type="primary"><A href="/Login" text="Log in" /></Button>
                        }
                        </>
                    </Container>
                </div>
                {children}
            </>
        </Container>
    </>

  )
}
