import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import { MessageOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';

const CustomHeader = () => {
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
        <Avatar icon={<UserOutlined/>}/>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
