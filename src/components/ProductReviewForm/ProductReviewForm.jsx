import { Component } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';

const ErrorText = styled.p`
    color: red;
`;

const FormError = ({ name }) => {
    return (
        <ErrorMessage 
        name={ name }
        render={message => <ErrorText>{message}</ErrorText>}/>
    );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = yup.object({
    product: yup.string().required('Please select a product').oneOf(products),
    name: yup.string().required(),
    email: yup.string().email().required(),
    title: yup.string().required(),
    review: yup.string().required(),
    rating: yup.number().min(1).max(10).required(),
    date: yup.date().default(() => new Date()),
    wouldRecommend: yup.boolean().default(false),
});

const initialValues = {
    name: '',
    email: '',
    title:'',
    review: '',
    rating: '',
    date: new Date(),
    wouldRecommend: false,
    product: '',
}

export class ProductReviewForm extends Component {
    handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    }
    render(){
        return(
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={this.handleSubmit}
            >
                <Form autoComplete='off'>
                    <div>
                        <label htmlFor='name'>Full name</label>
                        <div>
                            <Field name="name" type="text" placeholder="Full name" />
                            <FormError name="name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='email'>Email address</label>
                        <div>
                            <Field name="email" type="text" placeholder="Email address" />
                            <FormError name="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='product'>Product</label>
                        <div>
                            <Field name="product" as="select">
                                <option value="">Select a product</option>
                                {products.map((product, idx) => (
                                    <option value={product} key={idx}>
                                        {product}
                                    </option>
                                ))}
                            </Field>
                            <FormError name="product"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <div>
                            <Field name="title" type="text" placeholder="Title"/>
                            <ErrorMessage name="title"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="review">Review</label>
                        <div>
                            <Field name="review" as="textarea" placeholder="Review" />
                            <FormError name="review"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <div>
                                <Field name="rating" type="number" placeholder="Rating" />
                                <FormError name="rating"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <div>
                            <Field name="date" type="date"/>
                            <FormError name="date"/>
                        </div>                        
                    </div>
                    <div>
                        <label htmlFor="wouldRecommend">                           
                            <Field name="wouldRecommend" type="checkbox"/>
                            Would recommend
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        );
    };
};