import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SplitCardForm from '../PaymentForm/SplitCardForm';

const stripePromise = loadStripe('pk_test_51IhHcNJWiTsGykf5SEHeGp8genuIXFfgR9NJDcMEX3VXHsXSBkDLjCjAn2jIt4hP9Du5NOpIZMo2Wh6hsWaPWqpG00BpL41BER');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm></SplitCardForm>

        </Elements>
    );
};

export default Payment;