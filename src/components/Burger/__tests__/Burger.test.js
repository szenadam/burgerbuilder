import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import Burger from '../Burger';

configure({ adapter: new Adapter() });

describe('<Burger />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Burger ingredients={{ salad: 0, meat: 0, cheese: 0, bacon: 0 }} />);
  });

  it('should render <Burger />', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show message if there are no ingredients', () => {
    expect(wrapper.find(BurgerIngredient)).toHaveLength(2);
    expect(wrapper.find('p').text()).toEqual('Please start adding ingredients!');
  });

  it('should have the proper number of ingredients', () => {
    wrapper.setProps({ ingredients: { salad: 2, meat: 2 } });
    expect(wrapper.find(BurgerIngredient)).toHaveLength(6);
  });
});
