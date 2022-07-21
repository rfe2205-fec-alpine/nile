import renderer from 'react-test-renderer';
import FullScreenButton from './fullscreenbutton.jsx';

it('Full Screen Button renders to the page', () => {
  const setFullScreen = () => {
    console.log('yay!');
  };
  const component = renderer.create(
    <FullScreenButton setFullScreen={setFullScreen} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
