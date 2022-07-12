import renderer from 'react-test-renderer';
import Price from './price.jsx';

it('price renders to the page', () => {
  const component = renderer.create(
    <Price />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
