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

it ('price renders sale price properly', () => {
  const colorScheme = { textColorBackground: 'black' };
  const component = renderer.create(
    <Price colorScheme={colorScheme} salePrice={'80'} price={'90'} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
