import { useParams, useLocation } from 'react-router-dom';
import { getProductById } from 'components/services/fakeAPI';
import productImg from '../../images/default.png';
import BackLink from 'components/BackLink/BackLink';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src={productImg} alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          suscipit placeat magni quidem hic accusantium necessitatibus, nobis
          enim velit maiores adipisci impedit dignissimos pariatur recusandae
          harum modi animi corporis! Accusamus deleniti ullam dicta maxime
          itaque ducimus iste, mollitia eveniet temporibus sequi corporis
          provident perspiciatis, blanditiis quaerat soluta fuga eligendi
          reiciendis id quos totam ipsum dignissimos ad impedit? Ex, pariatur!
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;
