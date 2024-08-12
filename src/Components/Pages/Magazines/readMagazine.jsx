import { useParams } from 'react-router-dom';
import ProductData from '../../Data/ProductData';

const ReadMagazine = () => {
  const { id } = useParams();
  const magazine = ProductData.find(item => item.id === parseInt(id));

  return (
    <div>
      <h2>{magazine.name}</h2>
      <iframe
        src={magazine.book}
        width="100%"
        height="600px"
        title={magazine.name}
      />
    </div>
  );
};

export default ReadMagazine;
