import renderer from 'react-test-renderer';
import StyleSelected from './styleselected.jsx';

it('Style Selected renders to the page', () => {
  const name = 'larry';
  const colorScheme = { textColorBackground: 'black' };

  const component = renderer.create(
    <StyleSelected name={name} colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
