import renderer from 'react-test-renderer';
import Price from './price.jsx';

it('price renders to the page', () => {
  const colorScheme = { textColorBackground: 'black' };
  const component = renderer.create(
    <Price colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
