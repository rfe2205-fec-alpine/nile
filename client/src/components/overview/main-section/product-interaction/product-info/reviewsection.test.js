import renderer from 'react-test-renderer';
import ReviewSection from './reviewsection.jsx';

it('Review Section component renders to the page', () => {
  const component = renderer.create(
    <ReviewSection />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
