import renderer from 'react-test-renderer';
import Feature from './feature.jsx';

it('Feature renders to the page', () => {
  const component = renderer.create(
    <Feature />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
