import React, { useRef } from "react";
import Header from "../components/Header/index";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";

type Props = {
    users: any;
}

interface FilterUsers {
    email: string,
    password: string,
}
  
  interface FiltersProps {
    filters: FilterUsers[];
  }

export default function Login({users}:Props) {

    const router = useRouter()
    const ref = useRef<HTMLHeadingElement>(null);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    let valid = 0
    users.map((e: FilterUsers, id: number) => {
        if(e.email === values.username) {
            if(e.password === values.password) {
                localStorage.setItem('id', id.toString())
                router.push('/')

                valid = 0
            }
        } else {
          valid++
        }
    })
    if (valid === users.length) {
      if(ref.current) {
        ref.current.style.border = "1px solid red" 
        alert('Access denied!')
      }   
    } else {
      if(ref.current) {
        ref.current.style.border = "none" 
      } 
    }
  
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Header>
      <div className="form" ref = { ref }>
        <h3>Login</h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Header>
  );
}

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();
  
    return {
      props: { users },
    };
};