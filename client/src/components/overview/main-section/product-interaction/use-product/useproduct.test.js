import renderer from 'react-test-renderer';
import UseProduct from './useproduct.jsx';

it('Use Product component renders to the page', () => {
  const component = renderer.create(
    <UseProduct />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
