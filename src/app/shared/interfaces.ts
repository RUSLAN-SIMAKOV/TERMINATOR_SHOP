export interface IProducts {
  productId: number;
  productName: string;
  productCode: string;
  availability: boolean;
  price: number;
  starRating: number;
  imageUrl?: string;
}
