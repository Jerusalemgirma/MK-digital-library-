import React, { useState } from 'react';
import { Card, Flex, Typography, Image, Button, message, Modal } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ProductData from '../../Data/ProductData';

const { Meta } = Card;

const Ebook = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);

  const handleRead = () => {
    if (selectedEbook) {
      navigate(`/read/${selectedEbook.id}`);
      setIsModalVisible(false);
    }
  };

  const handleReserve = (ebook) => {
    message.success(`You have reserved ${ebook.name} successfully!`);
  };

  const handlePreview = (ebook) => {
    setSelectedEbook(ebook);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedEbook(null);
  };

  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Card style={{ height: 260, padding: '20px' }}>
          <Flex vertical gap="30px">
            <Flex vertical align="flex-start">
              <Typography.Title level={2} strong>
                Here are your Ebooks
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
                Review
              </Button>
            </Flex>
          </Flex>
        </Card>

        <Flex align="center" justify="space-between">
          <Typography.Title level={3} strong className="primary--color">
            E-BOOKS
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Flex align="center" gap="large">
          {ProductData.map((ebook) => (
            <Card
              key={ebook.id}
              hoverable
              className="product-card"
              onClick={() => handlePreview(ebook)}
              style={{ cursor: 'pointer', width: 240, background: '#fff' }}
            >
              <Image
                src={ebook.cover}
                style={{ width: '130px', cursor: 'pointer', marginBottom: '10px' }}
              />
              <Meta title={ebook.name} style={{ marginBottom: '1rem' }} />
            </Card>
          ))}
        </Flex>
      </Flex>

      {/* Modal for preview */}
      {selectedEbook && (
        <Modal
          title={selectedEbook.name}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Flex key="actions" align="center" justify="space-between" style={{ padding: '0 20px' }}>
              <Flex gap="10px">
                <Button icon={<LikeOutlined />} />
                <Button icon={<DislikeOutlined />} />
              </Flex>
              <Flex gap="10px">
                <Button type="primary" onClick={() => handleReserve(selectedEbook)}>
                  Reserve
                </Button>
                <Button onClick={handleRead}>
                  Read
                </Button>
              </Flex>
            </Flex>,
          ]}
        >
          <Flex vertical align="center" gap="16px">
            <Image
              src={selectedEbook.cover}
              alt={selectedEbook.name}
              style={{ width: '100%', maxWidth: '300px' }}
            />
            <Typography.Text><strong>Author:</strong> {selectedEbook.author}</Typography.Text>
            <Typography.Text><strong>Description:</strong> {selectedEbook.description}</Typography.Text>
          </Flex>
        </Modal>
      )}
    </div>
  );
};

export default Ebook;
