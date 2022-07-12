import renderer from 'react-test-renderer';
import ProductImage from './productimage.jsx';

it('Product Image component renders to the page', () => {
  const component = renderer.create(
    <ProductImage />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
