export type IOrderRequest = {
  orderedBooks: {
    bookId: string
    quantity: number
  }[]
  userId: string
}

export type IOrder = {
    id: string;
    userId: string;
    orderedBooks: Array<{
      bookId: string;
      quantity: number;
    }>;
    status: string;
    createdAt: Date; 
  };
  