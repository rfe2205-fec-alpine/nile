import renderer from 'react-test-renderer';
import AnnouncementBar from './announcementbar.jsx';

it('Announcement bar renders to the page', () => {
  const component = renderer.create(
    <AnnouncementBar />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
