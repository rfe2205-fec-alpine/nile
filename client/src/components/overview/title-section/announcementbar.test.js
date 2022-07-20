import renderer from 'react-test-renderer';
import AnnouncementBar from './announcementbar.jsx';

it('Announcement bar renders to the page', () => {
  const colorScheme = { foreground: 'black', name: 'light' };
  const component = renderer.create(
    <AnnouncementBar colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
