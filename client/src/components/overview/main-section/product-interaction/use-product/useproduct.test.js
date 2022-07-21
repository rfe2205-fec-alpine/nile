import renderer from 'react-test-renderer';
import UseProduct from './useproduct.jsx';

it('Use Product component renders to the page', () => {
  const styleSelected = { name: 'Tyrone' };
  const stock = {
    '12345' : {
      size: 'M',
      quantity: 67,
    },
    '11245' : {
      size: 'M',
      quantity: 0,
    },
    '90345' : {
      size: 'M',
      quantity: 78,
    },
    '145645' : {
      size: 'M',
      quantity: 12,
    },
    '12345' : {
      size: 'M',
      quantity: 90,
    }
  };

  const component = renderer.create(
    <UseProduct stock={stock} styleSelected={styleSelected} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
