import renderer from 'react-test-renderer';
import ReviewSection from './reviewsection.jsx';

it('Review Section component renders to the page', () => {
  const colorScheme = { textColorBackground: 'black', foreground: 'black' };
  const component = renderer.create(
    <ReviewSection colorScheme={colorScheme} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
