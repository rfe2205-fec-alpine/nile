import renderer from 'react-test-renderer';
import AddToBag from './addtobag.jsx';

it('Add To Bag renders to the page', () => {
  const component = renderer.create(
    <AddToBag />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
