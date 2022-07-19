import renderer from 'react-test-renderer';
import ProductImage from './productimage.jsx';

it('Product Image component renders to the page', () => {
  const selection = { thumbnail_url: 'https://wegotthiscovered.com/wp-content/uploads/2021/08/free-guy-dude-1200x900.jpg' };
  const colorScheme = { foreground: 'black' };
  const component = renderer.create(
    <ProductImage photos={[selection]} selection={selection} selectionIndex={0} colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
