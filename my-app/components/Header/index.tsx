import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { PoweroffOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Container from '../Container/index'
import A from '../A/index'
import Cart from '../Cart'
import { userAPI } from '../utils/slice/userService';
import ProfileModal from '../ProfileModal/index'
import { useRouter } from 'next/router';

type Props = {
    children: JSX.Element;
};



export default function index({children}: Props) {

    const {data: users} = userAPI.useFetchAllUsersQuery(0)

    const router = useRouter()

    const [isAuth, setIsAuth] = useState(false)
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [profile, setProfile] = useState({
        email: '',
        username: '',
        name: {
            firstname: '',
            lastname: '',
        },
        address: {
            city: '',
            number: 0,
        },
    })

    useEffect(() => {
        if(users) {
            const item = localStorage.getItem('id')
        
            if(item !== null) {
                setIsAuth(true)
                setProfile(users[+item])
            }
        }

    }, [users])

    const logOut = () => {
        localStorage.removeItem('id')
        setIsAuth(false)
        router.push('/Login')
    }

  return (
    <>
      <Container>
        <>
          <div className="header">
            <Container>
              <>
                <div className="group">
                  <h2 className="logo">
                    <A href="/" text="Berikbol shop" />
                  </h2>
                  <Button type="primary">
                    <A href="/posts" text="Posts" />
                  </Button>
                  <Button type="primary">Primary Button</Button>
                </div>
                {isAuth ? (
                  <>
                    <ProfileModal
                      isModalVisible={isModalVisible}
                      handleCancel={() => setIsModalVisible(false)}
                      userFLName = {profile.name}
                      username = {profile.username}
                      email = {profile.email}
                      address = {profile.address}
                    />
                    <div className="group">
                      <Button
                       type="primary" 
                       icon={<ShoppingCartOutlined />}
                       onClick={()=>setVisible(true)}
                      >
                        Cart
                      </Button>
                      <Button
                        type="primary"
                        icon={<UserOutlined />}
                        onClick={() => setIsModalVisible(true)}
                      >
                        {profile.username}
                      </Button>
                      <Button type="primary" danger icon={<PoweroffOutlined />} onClick={logOut}>
                        {" "}
                        Log out
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button type="primary">
                    <A href="/Login" text="Log in" />
                  </Button>
                )}
              </>
            </Container>
          </div>
          {children}
        </>
      </Container>
      <Cart visible={visible} onClose={()=>setVisible(false)} />
    </>
  );
}
