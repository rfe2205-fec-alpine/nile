import renderer from 'react-test-renderer';
import CarouselThumbnail from './carouselthumbnail.jsx';

it('Carousel Thumbnail renders to the page', () => {
  const component = renderer.create(
    <CarouselThumbnail />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Carousel Thumbnail works for fullscreen too', () => {
  const component = renderer.create(
    <CarouselThumbnail fullScreen={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
