import renderer from 'react-test-renderer';
import MainSection from './mainsection.jsx';

it('Description Section renders to the page', () => {
  const component = renderer.create(
    <MainSection />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
