import React from 'react'
import { Button, Modal } from 'antd';

type Props = {
    isModalVisible: boolean;
    handleCancel: () => void;
    userFLName: {
        firstname: string;
        lastname: string;
    };
    username: string;
    email: string;
    address: {
        city: string;
        number: number;
    };
}

export default function index({isModalVisible, handleCancel, userFLName, username, email, address }: Props) {

  return (
    <React.StrictMode>
    <Modal title="Profile" visible={isModalVisible} onCancel={handleCancel} footer={[ <Button type="primary" onClick={handleCancel}>Cancel</Button> ]}>
        <div className="profile__group">
            <p><b>FirstName:</b> {userFLName.firstname}</p>
            <p><b>LastName:</b> {userFLName.lastname}</p>
        </div>
        <div className="profile__group">
            <p><b>UserName:</b> {username}</p>
            <p><b>Email</b> {email}</p>
        </div>
        <p style={{marginBottom: 5}}><b>Address</b></p>
        <div style={{padding: '5px 0', marginBottom: 10, borderBottom: "1px solid black"}} />
        <p><b>City:</b> {address.city}</p>
        <p><b>Number:</b> {address.number}</p>
    </Modal>
    </React.StrictMode>
  )
}
