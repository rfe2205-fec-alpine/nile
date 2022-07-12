import renderer from 'react-test-renderer';
import ProductName from './productname.jsx';

it('Product name renders to the page', () => {
  const component = renderer.create(
    <ProductName />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
