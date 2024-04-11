export interface Product {
    itemId: number;
    itemName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

export interface OrderItems {
    orderId: number;
    orderDate: any;
    customerName:string;
    items: Product[],
    totalAmount: number,
    status: string;
}