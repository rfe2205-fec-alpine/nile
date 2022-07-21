import renderer from 'react-test-renderer';
import ReviewSection from './reviewsection.jsx';

it('Review Section component renders to the page', () => {
  const colorScheme = { textColorBackground: 'black', foreground: 'black' };
  const component = renderer.create(
    <ReviewSection colorScheme={colorScheme} reviewScore={3.7} numberOfReviews={100} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
