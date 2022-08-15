import React, { useEffect, useRef, useState } from 'react'
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

    const ref = useRef<HTMLHeadingElement>(null);
    const dark = useRef<HTMLHeadingElement>(null);

    const [isAuth, setIsAuth] = useState(false)
    const [visible, setVisible] = useState(false);
    const [changeLogo, setChangeLogo] = useState(false)
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

    function parseJwt (token:any) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
    }

    useEffect(() => {
        if(users) {
            const item = localStorage.getItem('token')
        
            if(item !== null) {
                
                setIsAuth(true)
                setProfile(users[+item])
                users.forEach(e=> {
                  if(e.username === parseJwt(item).user) {
                    setProfile(e)
                  }
                })
            }
        }

    }, [users])

    const logOut = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        router.push('/Login')
    }

    const burger = (event: any) => {
      event.stopPropagation()
      event.target.classList.toggle('active')
      ref.current?.classList.toggle('active')
      dark.current?.classList.toggle('active')

      window.addEventListener('click', () => {
        event.target.classList.remove('active')
        ref.current?.classList.remove('active')
        dark.current?.classList.remove('active')
      })
    }

    useEffect(() => {
      if (window.innerWidth < 540) {
        setChangeLogo(true)
      } else {
        setChangeLogo(false)
      }
      
    }, [])
    

  return (
    <>
      <Container>
        <>
          <div className="header">
            <Container>
              <>
                <div className="group">
                  <h2 className="logo">
                    <A href="/" text={changeLogo ? "BS" : "Berikbol shop"} />
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
                    <div className="group __dropdown" ref={ref} onClick={(event)=>event.stopPropagation()} >
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
                <div onClick={(event)=>burger(event)} className="burger__group">
                  <div className="line"></div> 
                  <div className="line"></div> 
                  <div className="line"></div> 
                </div>
              </>
            </Container>
          </div>
          <div className="modal__dark" ref={dark} />
          {children}
        </>
      </Container>
      <Cart visible={visible} onClose={()=>setVisible(false)} />
    </>
  );
}
