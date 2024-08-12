import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'antd'; 
import { UserOutlined } from '@ant-design/icons'; 
import './ProfilePopup.css';

const ProfilePopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleManageAccountClick = () => {
    navigate('/myactivity'); 
    onClose(); 
  };

  const handleLogoutClick = () => {
    console.log('Logged out');
    onClose(); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <div className="profile-info">
          <Avatar icon={<UserOutlined />} size={64} />
          <div className="profile-details">
            <p className="profile-name">Meba</p>
            <p className="profile-email">neba.t.git@gmail.com</p>
          </div>
        </div>
        <button onClick={handleManageAccountClick}>Manage Account</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

ProfilePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopup;
