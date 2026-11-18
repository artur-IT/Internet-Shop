export const orderHistory = [
  {
    id: 'order-1',
    userId: 'user-1',
    status: 'COMPLETED',
    totalAmount: 1300,
    items: [
      {
        productId: 'product-1',
        productName: 'Gaming Mouse RGB',
        price: 150,
        quantity: 1,
        thumbnailPath: '/images/mouse-rgb.jpg',
      },
      {
        productId: 'product-2',
        productName: 'Mechanical Keyboard',
        price: 100,
        quantity: 2,
        thumbnailPath: '/images/keyboard-mech.jpg',
      },
    ],
    orderDate: '2023-05-15T10:30:00Z',
  },
  {
    id: 'order-2',
    userId: 'user-1',
    status: 'PENDING',
    totalAmount: 900,
    items: [
      {
        productId: 'product-3',
        productName: '4K Monitor 27"',
        price: 350,
        quantity: 1,
        thumbnailPath: '/images/monitor-4k.jpg',
      },
    ],
    orderDate: '2023-06-20T14:15:00Z',
  },
  {
    id: 'order-3',
    userId: 'user-2',
    status: 'COMPLETED',
    totalAmount: 2200,
    items: [
      {
        productId: 'product-4',
        productName: 'Gaming Laptop RTX 4070',
        price: 1900,
        quantity: 1,
        thumbnailPath: '/images/laptop-gaming.jpg',
      },
      {
        productId: 'product-5',
        productName: 'Wireless Headset RGB',
        price: 300,
        quantity: 1,
        thumbnailPath: '/images/headset-rgb.jpg',
      },
    ],
    orderDate: '2023-07-10T09:45:00Z',
  },
  {
    id: 'order-4',
    userId: 'user-1',
    status: 'CANCELLED',
    totalAmount: 600,
    items: [
      {
        productId: 'product-6',
        productName: 'USB-C Hub 10 Port',
        price: 100,
        quantity: 2,
        thumbnailPath: '/images/hub-usb.jpg',
      },
    ],
    orderDate: '2023-08-05T16:20:00Z',
  },
  {
    id: 'order-5',
    userId: 'user-3',
    status: 'COMPLETED',
    totalAmount: 500,
    items: [
      {
        productId: 'product-7',
        productName: 'External SSD 1TB',
        price: 300,
        quantity: 1,
        thumbnailPath: '/images/ssd-external.jpg',
      },
      {
        productId: 'product-8',
        productName: 'USB-C Cable 3m',
        price: 20,
        quantity: 2,
        thumbnailPath: '/images/cable-usbc.jpg',
      },
    ],
    orderDate: '2023-09-12T11:30:00Z',
  },
];
