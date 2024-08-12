import { Card, Flex, Typography, Image, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductData from '../../Data/ProductData';

const { Meta } = Card;

const Magazines = () => {
  const navigate = useNavigate();

  const handleRead = (plant) => {
    navigate(`/read/${plant.id}`);
  };

  const handleReserve = (plant) => {
    // Logic for reserving the magazine
    message.success(`You have reserved ${plant.name} successfully!`);
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
          {ProductData.map((plant) => (
            <Card key={plant.id} hoverable className="product-card">
              {/* Display cover image */}
              <Image
                src={plant.cover}
                style={{ width: '130px', cursor: 'pointer' }}
                onClick={() => handleRead(plant)}
              />
              <Meta title={plant.name} style={{ marginTop: '1rem' }} />
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

export default Magazines;
