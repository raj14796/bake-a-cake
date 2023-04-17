## Libraries used other than react
1. Redux for state management.
2. Material UI for better UI experience.
3. commerce.js to store and fetch data.
4. stripe.js for payment.

## Key Features
1. User is able to select a product and add it to cart.
2. User is able to decrease/increase the count or remove a single item.
3. User is able to empty the cart.
4. User is able to checkout(Please put real email id in checkout option).
5. As this project is using free test version of stripe.js, 
        Only acceptable value for card : 4242 4242 4242 4242
        Only acceptable value for MM / YY CVC : 04 / 24 242 42424
6. After placing order, user will get email with the invoice in their email id.


## NOTE
1. As this project is using free test version of commerce.js, please do not mind if data is loading slow.


## Steps to run in local
1. run 'npm i' in terminal to install the packages.
2. run 'npm start' to run in local