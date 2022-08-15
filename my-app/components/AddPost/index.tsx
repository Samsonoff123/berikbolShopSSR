import axios from 'axios'
import { fetchPosts } from '../utils/slice/postsSlice';
import { useDispatch } from 'react-redux';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function index({categories}: any) {

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    const dispatch = useDispatch()

    const createPost = async (event:any) => {
        
        const data = await dispatch(fetchPosts({
            title: title,
            price: price,
            description: description,
            image: image,
            category: category
          }))
          setVisible(false);
    }
    

  return (
    <>
        <Button type='primary' onClick={showDrawer}><PlusCircleOutlined /> create post</Button>
        <Drawer
        title="Create a new post"
        height={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        placement="bottom"
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={(event)=>createPost(event)} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter user title' }]}
              >
                <Input onChange={(event)=>setTitle(event.target.value)} placeholder="Please enter user title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Image Url"
                rules={[{ required: true, message: 'Please enter image url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  placeholder="Please enter image url"
                  onChange={(event)=>setImage('http://'+event.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="price"
                label="price"
                rules={[{ required: true, message: 'Please select an price' }]}
              >
              <Input type="number" onChange={(event)=>setPrice(+event.target.value)} placeholder="Please enter user price" />      
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="category"
                rules={[{ required: true, message: 'Please choose the category' }]}
              >
                <Select onChange={(event)=>setCategory(event)} placeholder="Please choose the category">
                    {categories.map((e: string, id: number)=>
                        <Option key={id} value={e}>{e}</Option>
                    )}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea onChange={(event)=>setDescription(event.target.value)} rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
