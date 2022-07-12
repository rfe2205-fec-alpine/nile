import renderer from 'react-test-renderer';
import Category from './category.jsx';

it('Category renders to the page', () => {
  const component = renderer.create(
    <Category />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
