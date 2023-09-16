**Live Link: https://prisma-bookstore-assignment.vercel.app/**

**Application Routes:**

**User**
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/f5343c02-124b-49ec-943e-879d955dc748 (Single GET) Include an id that is saved in your database
api/v1/users/9663d8a1-6ee7-45aa-b47f-b455aa5863b2 (PATCH)
api/v1/users/9663d8a1-6ee7-45aa-b47f-b455aa5863b2 (DELETE) Include an id that is saved in your database
api/v1/profile (GET)

**Category**
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/6803ea77-97e9-4253-a887-519c9d3f5d0c (Single GET) Include an id that is saved in your database
api/v1/categories/6803ea77-97e9-4253-a887-519c9d3f5d0c (PATCH)
api/v1/categories/b7e364b7-b805-442d-a33a-5c6ab28ecf2b (DELETE) Include an id that is saved in your database

**Books**
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books/6803ea77-97e9-4253-a887-519c9d3f5d0c/category (GET)
api/v1/books/ca1e8850-8da2-44ef-897e-be85f0820800 (GET)
api/v1/books/ca1e8850-8da2-44ef-897e-be85f0820800 (PATCH)
api/v1/books/b8322f34-04a2-4132-a433-30ac3b3fd48a (DELETE)

**Orders**
api/v1/orders/create-order (POST)
api/v1/orders (GET)
api/v1/orders/37fb28ac-5091-4a9a-8e05-9df292771c34 (GET)
