import renderer from 'react-test-renderer';
import FeaturesList from './featureslist.jsx';

it('List of Features renders to the page', () => {
  const component = renderer.create(
    <FeaturesList />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
