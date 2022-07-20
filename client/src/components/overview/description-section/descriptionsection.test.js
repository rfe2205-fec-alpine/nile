import renderer from 'react-test-renderer';
import DescriptionSection from './descriptionsection.jsx';

it('Description Section renders to the page', () => {
  const colorScheme = { foreground: 'black' };
  const data = {
    slogan: 'catchphrase',
    description: 'one ring to rule them all',
  };
  const component = renderer.create(
    <DescriptionSection colorScheme={colorScheme} data={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
