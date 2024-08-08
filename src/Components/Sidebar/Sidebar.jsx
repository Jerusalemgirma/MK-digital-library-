import { Flex, Menu } from "antd";
// import { FaLeaf } from "react-icons/fa6";
import MkLogo from '../../assets/Mk-logo.jpg'
import { HomeOutlined,BookOutlined,AudioOutlined,VideoCameraOutlined,PaperClipOutlined, CarryOutOutlined, HistoryOutlined, OrderedListOutlined } from "@ant-design/icons";
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
            icon: <HomeOutlined/>,
            label: 'Home'
        },
        {
            key: '2',
            icon: <BookOutlined/>,
            label: 'E-Book'
        },
        {
            key: '3',
            icon: <AudioOutlined/>,
            label: 'Audios'
        },
        {
            key: '4',
            icon: <VideoCameraOutlined/>,
            label: 'Videos'
        },
        {
            key: '5',
            icon: <PaperClipOutlined/>,
            label: 'Magazines'
        },
        {
            key: '6',
            icon: <CarryOutOutlined/>,
            label: 'My-Activity'
        },
        {
            key: '7',
            icon: <HistoryOutlined/>,
            label: 'Histoy'
        },
        {
            key: '8',
            icon: <OrderedListOutlined/>,
            label: 'Categories'
        }

    ]}
    />
    </>
  )
}
export default Sidebar;