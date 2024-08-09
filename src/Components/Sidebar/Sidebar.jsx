import { Flex, Menu } from "antd";
import { Link } from 'react-router-dom';
import MkLogo from '../../assets/Mk-logo.jpg';
import { HomeOutlined, BookOutlined, AudioOutlined, VideoCameraOutlined, PaperClipOutlined, CarryOutOutlined, HistoryOutlined, OrderedListOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <img src={MkLogo} alt="MkLogo" className="MkLogo" />
        </div>
      </Flex>

      <Menu mode='inline' defaultSelectedKeys={['1']} className="menu-bar"
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: <Link to="/home">Home</Link>
          },
          {
            key: '2',
            icon: <BookOutlined />,
            label: <Link to="/ebook">E-Book</Link>
          },
          {
            key: '3',
            icon: <AudioOutlined />,
            label: <Link to="/audio">Audios</Link>
          },
          {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: <Link to="/video">Videos</Link>
          },
          {
            key: '5',
            icon: <PaperClipOutlined />,
            label: <Link to="/magazines">Magazines</Link>
          },
          {
            key: '6',
            icon: <CarryOutOutlined />,
            label: <Link to="/myactivity">My-Activity</Link>
          },
          {
            key: '7',
            icon: <HistoryOutlined />,
            label: <Link to="/history">History</Link>
          },
          {
            key: '8',
            icon: <OrderedListOutlined />,
            label: <Link to="/categories">Categories</Link>
          }
        ]}
      />
    </>
  );
}

export default Sidebar;
