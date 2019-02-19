import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
  onCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  onCheckoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          onCheckoutCancelled={this.onCheckoutCancelled}
          onCheckoutContinued={this.onCheckoutContinued}
        />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
