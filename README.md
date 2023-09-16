# Prisma Bookstore Assignment API

This is the documentation for the Prisma Bookstore Assignment API. Below, you will find a list of available routes along with their descriptions.

**Live Link:** [https://prisma-bookstore-assignment.vercel.app/](https://prisma-bookstore-assignment.vercel.app/)

## User Routes

### Create a New User
- Route: `api/v1/auth/signup` (POST)
  - Description: Allows users to sign up and create a new account.

### Get All Users
- Route: `api/v1/users` (GET)
  - Description: Retrieves a list of all users.

### Get a Single User
- Route: `api/v1/users/{userId}` (GET)
  - Description: Retrieves information about a specific user based on their ID.

### Update User Information
- Route: `api/v1/users/{userId}` (PATCH)
  - Description: Updates the information of a specific user.

### Delete a User
- Route: `api/v1/users/{userId}` (DELETE)
  - Description: Deletes a specific user account.

### Get User Profile
- Route: `api/v1/profile` (GET)
  - Description: Retrieves the profile information of the currently logged-in user.

## Category Routes

### Create a New Category
- Route: `api/v1/categories/create-category` (POST)
  - Description: Allows the creation of a new book category.

### Get All Categories
- Route: `api/v1/categories` (GET)
  - Description: Retrieves a list of all book categories.

### Get a Single Category
- Route: `api/v1/categories/{categoryId}` (GET)
  - Description: Retrieves information about a specific book category based on its ID.

### Update Category Information
- Route: `api/v1/categories/{categoryId}` (PATCH)
  - Description: Updates the information of a specific book category.

### Delete a Category
- Route: `api/v1/categories/{categoryId}` (DELETE)
  - Description: Deletes a specific book category.

## Book Routes

### Create a New Book
- Route: `api/v1/books/create-book` (POST)
  - Description: Allows the creation of a new book entry.

### Get All Books
- Route: `api/v1/books` (GET)
  - Description: Retrieves a list of all books.

### Get Books by Category
- Route: `api/v1/books/{categoryId}/category` (GET)
  - Description: Retrieves a list of books belonging to a specific category based on the category's ID.

### Get a Single Book
- Route: `api/v1/books/{bookId}` (GET)
  - Description: Retrieves information about a specific book based on its ID.

### Update Book Information
- Route: `api/v1/books/{bookId}` (PATCH)
  - Description: Updates the information of a specific book.

### Delete a Book
- Route: `api/v1/books/{bookId}` (DELETE)
  - Description: Deletes a specific book.

## Order Routes

### Create a New Order
- Route: `api/v1/orders/create-order` (POST)
  - Description: Allows the creation of a new order.

### Get All Orders
- Route: `api/v1/orders` (GET)
  - Description: Retrieves a list of all orders.

### Get a Single Order
- Route: `api/v1/orders/{orderId}` (GET)
  - Description: Retrieves information about a specific order based on its ID.


