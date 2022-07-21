import renderer from 'react-test-renderer';
import Thumbnail from './thumbnail.jsx';

it('Thumbnail renders to the page', () => {
  const size = '5px';
  const imgUrl = 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png/revision/latest?cb=20130313174543';
  const component = renderer.create(
    <Thumbnail imgUrl={imgUrl} size={size} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
