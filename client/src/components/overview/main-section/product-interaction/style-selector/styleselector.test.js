import renderer from 'react-test-renderer';
import StyleSelector from './styleselector.jsx';

it('Style Selector component renders to the page', () => {
  const component = renderer.create(
    <StyleSelector />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
