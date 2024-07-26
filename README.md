# Mini E-commerce Website Project

Welcome to the Mini E-commerce Website Project! This project is a practice implementation of a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce website with a focus on frontend development.

## Features

- **User Interface**: Built with React.js and styled with Bootstrap-react and Tailwind CSS.
- **Animations**: Engaging animations using GSAP.
- **Product Management**: View, search, and add products to the cart.
- **Order Processing**: Place orders and store order information in the MongoDB database.
- **Backend**: Node.js and Express.js for creating APIs and handling order information.

## Screenshot

![Screenshot of the application](/frontend/src/templates/Screenshot.png)

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/miniecommerce.git

2. Navigate to the frontend directory:
    cd Ecommerce-Mini/frontend

3. Install the dependencies:
    npm install

4. Start the development server:
    npm start

The frontend should now be running on `http://localhost:3000`.


# Backend Setup

1. Navigate to the frontend directory:
    cd ../backend

2. Install the dependencies:
    npm install

3. Set up your MongoDB connection:
    - Create a `.env` file in the backend directory.
    - Add your MongoDB connection string to the `.env` file:
        ["MONGODB_URI=your_mongodb_connection_string"]
    
4. Start the backend server:
    npm start

The backend should now be running on `http://localhost:5000`.

Usage
    - Open your browser and go to `http://localhost:3000`.
    - Browse and search for products.
    - Add products to your cart and proceed to checkout.
    - Place your order and check the console/logs to see the order information stored in the database.

Technologies Used

    Frontend:
        - React.js (CRA)
        - Bootstrap-react
        - Tailwind CSS
        - GSAP for animations

    Backend:

        - Node.js
        - Express.js
        - MongoDB

Contributing

    Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License

    This project is licensed under the `MIT` License. See the `LICENSE` file for details.
