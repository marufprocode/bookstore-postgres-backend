# Prisma Bookstore Backend Application

This is the documentation for the Prisma Bookstore Backend Application. Below, you will find a list of available routes along with their descriptions.

## Live Link: https://bookstore-postgres-backend.vercel.app/


## User Routes
- Route: `api/v1/auth/signup` (POST)
  - Description: Allows users to sign up and create a new account.
- Route: `api/v1/users` (GET)
  - Description: Retrieves a list of all users.
- Route: `api/v1/users/f5343c02-124b-49ec-943e-879d955dc748` (GET)
  - Description: Retrieves information about a specific user based on their ID.
- Route: `api/v1/users/9663d8a1-6ee7-45aa-b47f-b455aa5863b2` (PATCH)
  - Description: Updates the information of a specific user.
- Route: `api/v1/users/9663d8a1-6ee7-45aa-b47f-b455aa5863b2` (DELETE)
  - Description: Deletes a specific user account.
- Route: `api/v1/profile` (GET)
  - Description: Retrieves the profile information of the currently logged-in user.

## Category Routes
- Route: `api/v1/categories/create-category` (POST)
  - Description: Allows the creation of a new book category.
- Route: `api/v1/categories` (GET)
  - Description: Retrieves a list of all book categories.
- Route: `api/v1/categories/6803ea77-97e9-4253-a887-519c9d3f5d0c` (GET)
  - Description: Retrieves information about a specific book category based on its ID.
- Route: `api/v1/categories/6803ea77-97e9-4253-a887-519c9d3f5d0c` (PATCH)
  - Description: Updates the information of a specific book category.
- Route: `api/v1/categories/b7e364b7-b805-442d-a33a-5c6ab28ecf2b` (DELETE)
  - Description: Deletes a specific book category.

## Book Routes
- Route: `api/v1/books/create-book` (POST)
  - Description: Allows the creation of a new book entry.
- Route: `api/v1/books` (GET)
  - Description: Retrieves a list of all books.
- Route: `api/v1/books/6803ea77-97e9-4253-a887-519c9d3f5d0c/category` (GET)
  - Description: Retrieves a list of books belonging to a specific category based on the category's ID.
- Route: `api/v1/books/ca1e8850-8da2-44ef-897e-be85f0820800` (GET)
  - Description: Retrieves information about a specific book based on its ID.
- Route: `api/v1/books/ca1e8850-8da2-44ef-897e-be85f0820800` (PATCH)
  - Description: Updates the information of a specific book.
- Route: `api/v1/books/b8322f34-04a2-4132-a433-30ac3b3fd48a` (DELETE)
  - Description: Deletes a specific book.

## Order Routes
- Route: `api/v1/orders/create-order` (POST)
  - Description: Allows the creation of a new order.
- Route: `api/v1/orders` (GET)
  - Description: Retrieves a list of all orders.
- Route: `api/v1/orders/37fb28ac-5091-4a9a-8e05-9df292771c34` (GET)
  - Description: Retrieves information about a specific order based on its ID.


