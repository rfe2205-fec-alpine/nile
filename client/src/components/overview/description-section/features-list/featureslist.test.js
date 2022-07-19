import renderer from 'react-test-renderer';
import FeaturesList from './featureslist.jsx';

it('List of Features renders to the page', () => {
  const colorScheme = { textColorForeground: 'black' };
  const features = [
    { entry: 'come', value: 'on' },
    { entry: 'come', value: 'on' },
    { entry: 'come', value: 'on' },
    { entry: 'come', value: 'on' },
  ];
  const component = renderer.create(
    <FeaturesList colorScheme={colorScheme} features={features} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
