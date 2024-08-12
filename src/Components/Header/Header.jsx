import React, { useState } from 'react';
import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import ProfilePopup from './ProfilePopup'; 

const CustomHeader = () => {
  const [isPopupVisible, setPopupVisible] = useState(false); 

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible); 
  };

  const closePopup = () => {
    setPopupVisible(false); 
  };

  return (
    <Flex align='center' justify='space-between'>
      <Typography.Title level={3} type="secondary">
        Welcome, Nebiyu
      </Typography.Title>
      <Flex align="center" gap="3rem">
        <Search placeholder="Search" allowClear />
      </Flex>
      <Flex align="center" gap="10px">
        <MessageOutlined className='header-icons'/>
        <NotificationOutlined className='header-icons'/>
        <Avatar icon={<UserOutlined />} onClick={togglePopup} /> 
      </Flex>
      {isPopupVisible && <ProfilePopup onClose={closePopup} />}
    </Flex>
  );
};

export default CustomHeader;

