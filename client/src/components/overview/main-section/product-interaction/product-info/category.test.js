import renderer from 'react-test-renderer';
import Category from './category.jsx';

it('Category renders to the page', () => {
  const colorScheme = { textColorBackground: 'black' };
  const component = renderer.create(
    <Category colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
