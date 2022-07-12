import renderer from 'react-test-renderer';
import DescriptionSection from './descriptionsection.jsx';

it('Description Section renders to the page', () => {
  const component = renderer.create(
    <DescriptionSection />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
