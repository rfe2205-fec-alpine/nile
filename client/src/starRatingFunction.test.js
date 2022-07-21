import renderer from 'react-test-renderer';
import QuarterStars from './starRatingFunction.jsx';

it('Quarter star function renders to the page', () => {
  const component = renderer.create(
    <QuarterStars rating={3.7} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
