import renderer from 'react-test-renderer';
import NextImageButton from './nextimagebutton.jsx';

it('Full Screen Button renders to the page', () => {
  const component = renderer.create(
    <NextImageButton />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
