import renderer from 'react-test-renderer';
import ProductDescription from './productdescription.jsx';

it('Product Description renders to the page', () => {
  const colorScheme = { background: 'black' };
  const data = {
    catchphrase: 'catchphrase',
    description: 'one ring to rule them all',
  };
  const component = renderer.create(
    <ProductDescription colorScheme={colorScheme} data={data} />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
