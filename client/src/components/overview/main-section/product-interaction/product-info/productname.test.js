import renderer from 'react-test-renderer';
import ProductName from './productname.jsx';

it('Product name renders to the page', () => {
  const colorScheme = { textColorBackground: 'black' };
  const component = renderer.create(
    <ProductName colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
