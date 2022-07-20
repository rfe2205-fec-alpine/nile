import renderer from 'react-test-renderer';
import StyleSelector from './styleselector.jsx';

it('Style Selector component renders to the page', () => {
  const colorScheme = { textColorBackground: 'black' };
  const component = renderer.create(
    <StyleSelector colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
