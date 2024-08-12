import { Card, Flex, Typography, Button, Image, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductData from '../../Data/ProductData';

const { Meta } = Card;

const Ebook = () => {
  const navigate = useNavigate();

  const handleRead = (plant) => {
    navigate(`/read/${plant.id}`);
  };

  const handleReserve = (plant) => {
    message.success(`You have reserved ${plant.name} successfully!`);
  };

  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Card style={{ height: 260, padding: '20px' }}>
          <Flex vertical gap="30px">
            <Flex vertical align="flex-start">
              <Typography.Title level={2} strong>
                Here are your Ebooks found
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
          {ProductData.map((plant) => (
            <Card
              key={plant.id}
              hoverable
              className="product-card"
              style={{ width: 240, background: '#fff' }} // Set the card background to white
            >
              <Image
                src={plant.cover}
                style={{ width: '130px', cursor: 'pointer', marginBottom: '10px' }}
                onClick={() => handleRead(plant)}
              />
              <Meta title={plant.name} style={{ marginBottom: '1rem' }} />
              <Button
                type="primary"
                onClick={() => handleReserve(plant)}
                style={{ marginTop: '10px' }}
              >
                Reserve
              </Button>
            </Card>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default Ebook;
