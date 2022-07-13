import renderer from 'react-test-renderer';
import SearchBar from './searchbar.jsx';

it('Search bar renders to the page', () => {
  const component = renderer.create(
    <SearchBar />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
