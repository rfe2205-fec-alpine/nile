import renderer from 'react-test-renderer';
import AddToBag from './addtobag.js';

it('Add To Bag renders to the page', () => {
  const component = renderer.create(
    <AddToBag />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
