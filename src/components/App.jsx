import { Component } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
// import {ProductReviewForm} from "./ProductReviewForm/ProductReviewForm";

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <LoginForm />
        {/* <ProductReviewForm /> */}
      </div>
    );
  }
 
};
