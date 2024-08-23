import React, { useState } from 'react';
import { Card, Flex, Typography, Image, Button, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import ProductData from '../../Data/ProductData';

const { Meta } = Card;

const Magazines = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMagazine, setSelectedMagazine] = useState(null);

  const handleRead = () => {
    if (selectedMagazine) {
      navigate(`/read/${selectedMagazine.id}`);
      setIsModalVisible(false);
    }
  };

  const handleReserve = (magazine) => {
    message.success(`You have reserved ${magazine.name} successfully!`);
  };

  const handlePreview = (magazine) => {
    setSelectedMagazine(magazine);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedMagazine(null);
  };

  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Card style={{ height: 260, padding: '20px' }}>
          <Flex vertical gap="30px">
            <Flex vertical align="flex-start">
              <Typography.Title level={2} strong>
                Here are your MAGAZINES
              </Typography.Title>
              <Typography.Text type="secondary" strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam!
              </Typography.Text>
            </Flex>
            <Flex gap="large">
              <Button type="primary" size="large">
                Explore More
              </Button>
              <Button size="large">
                BUY or BORROW
              </Button>
            </Flex>
          </Flex>
        </Card>

        <Flex align="center" justify="space-between">
          <Typography.Title level={3} strong className="primary--color">
            MAGAZINES
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Flex align="center" gap="large">
          {ProductData.map((magazine) => (
            <Card
              key={magazine.id}
              hoverable
              className="product-card"
              onClick={() => handlePreview(magazine)}
              style={{ cursor: 'pointer' }}
            >
              {/* Display cover image */}
              <Image
                src={magazine.cover}
                style={{ width: '130px' }}
              />
              <Meta title={magazine.name} style={{ marginTop: '1rem' }} />
            </Card>
          ))}
        </Flex>
      </Flex>

      {/* Modal for preview */}
      {selectedMagazine && (
        <Modal
          title={selectedMagazine.name}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={
            <Flex key="actions" align="center" justify="space-between" style={{ width: '100%' }}>
              <Flex gap="10px">
                <Button icon={<LikeOutlined />} />
                <Button icon={<DislikeOutlined />} />
              </Flex>
              <Flex gap="10px">
                <Button type="primary" onClick={() => handleReserve(selectedMagazine)}>
                  Reserve
                </Button>
                <Button onClick={handleRead}>
                  Read
                </Button>
              </Flex>
            </Flex>
          }
        >
          <Flex vertical align="center" gap="16px">
            <Image
              src={selectedMagazine.cover}
              alt={selectedMagazine.name}
              style={{ width: '100%', maxWidth: '300px' }}
            />
            <Typography.Text><strong>Author:</strong> {selectedMagazine.author}</Typography.Text>
            <Typography.Text><strong>Description:</strong> {selectedMagazine.description}</Typography.Text>
          </Flex>
        </Modal>
      )}
    </div>
  );
};

export default Magazines;
