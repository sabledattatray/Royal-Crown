import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TrackingStatus =
  | 'placed'
  | 'confirmed'
  | 'packed'
  | 'out_for_delivery'
  | 'delivered';

export interface TrackingEvent {
  status: TrackingStatus;
  label: string;
  description: string;
  timestamp: string; // ISO string
  done: boolean;
}

export interface TrackedOrder {
  orderId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: { name: string; qty: number; price: number }[];
  grandTotal: number;
  paymentMethod: 'razorpay' | 'cod';
  shippingMethod: 'home' | 'pickup';
  placedAt: string; // ISO string
  currentStatus: TrackingStatus;
  events: TrackingEvent[];
}

interface TrackingStore {
  orders: TrackedOrder[];
  placeOrder: (order: Omit<TrackedOrder, 'events' | 'currentStatus'>) => void;
  advanceStatus: (orderId: string) => void; // for admin simulation
  getOrder: (orderId: string) => TrackedOrder | undefined;
}

const STATUS_FLOW: TrackingStatus[] = [
  'placed',
  'confirmed',
  'packed',
  'out_for_delivery',
  'delivered',
];

function buildEvents(
  currentStatus: TrackingStatus,
  placedAt: string,
  shippingMethod: 'home' | 'pickup'
): TrackingEvent[] {
  const placed = new Date(placedAt);
  const offsets = [0, 15, 45, shippingMethod === 'pickup' ? 120 : 240, shippingMethod === 'pickup' ? 180 : 480]; // minutes after placing

  const defs: { status: TrackingStatus; label: string; description: string }[] = [
    {
      status: 'placed',
      label: 'Order Placed',
      description: 'Your order has been successfully placed and payment received.',
    },
    {
      status: 'confirmed',
      label: 'Order Confirmed',
      description: 'Royal Crown has confirmed your order and assigned it for packing.',
    },
    {
      status: 'packed',
      label: 'Packed & Ready',
      description: shippingMethod === 'pickup'
        ? 'Your order is packed. Ready for self-pickup at Gandhi Chowk, Badlapur East.'
        : 'Your order is securely packed and ready to be dispatched for delivery.',
    },
    {
      status: 'out_for_delivery',
      label: shippingMethod === 'pickup' ? 'Ready for Pickup' : 'Out for Delivery',
      description: shippingMethod === 'pickup'
        ? 'Your order is ready at the store. Visit us at Shop No 05 - Nav Sai Krupa society, Gandhi Chowk.'
        : 'Our delivery partner is on the way to your address in Badlapur.',
    },
    {
      status: 'delivered',
      label: shippingMethod === 'pickup' ? 'Picked Up' : 'Delivered',
      description: shippingMethod === 'pickup'
        ? 'Order successfully picked up. Thank you for visiting Royal Crown!'
        : 'Order delivered successfully! Thank you for shopping with Royal Crown! 👑',
    },
  ];

  const currentIdx = STATUS_FLOW.indexOf(currentStatus);

  return defs.map((def, i) => {
    const eventTime = new Date(placed.getTime() + offsets[i] * 60 * 1000);
    return {
      ...def,
      timestamp: i <= currentIdx ? eventTime.toISOString() : '',
      done: i <= currentIdx,
    };
  });
}

// Pre-seeded demo orders for the track-order demo
const RAW_ORDERS = [
  {
    orderId: 'TS-482910',
    customerName: 'Rahul Deshmukh',
    customerPhone: '9820012345',
    customerAddress: 'Flat 402, Shiv Shakti Tower, Katrap Road, Badlapur East, MH 421503',
    items: [{ name: 'Super High-Speed RC Rally Car', qty: 1, price: 2499 }],
    grandTotal: 2499,
    paymentMethod: 'razorpay' as const,
    shippingMethod: 'home' as const,
    placedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    currentStatus: 'delivered' as const,
  },
  {
    orderId: 'TS-103948',
    customerName: 'Amit Sharma',
    customerPhone: '9876543210',
    customerAddress: 'B-12, Sunrise Heights, Station Road, Badlapur West, MH 421503',
    items: [{ name: 'Hot Wheels 10-Car Pack', qty: 1, price: 999 }],
    grandTotal: 999,
    paymentMethod: 'cod' as const,
    shippingMethod: 'home' as const,
    placedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    currentStatus: 'out_for_delivery' as const,
  },
  {
    orderId: 'TS-504938',
    customerName: 'Sneha Patil',
    customerPhone: '9011234567',
    customerAddress: 'Shop No 05 - Nav Sai Krupa society, Gandhi Chowk, Badlapur East, MH 421503',
    items: [{ name: 'Smart Coding Robot Kit', qty: 1, price: 3499 }],
    grandTotal: 3499,
    paymentMethod: 'razorpay' as const,
    shippingMethod: 'pickup' as const,
    placedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    currentStatus: 'packed' as const,
  },
];

const DEMO_ORDERS: TrackedOrder[] = RAW_ORDERS.map(o => ({
  ...o,
  events: buildEvents(o.currentStatus, o.placedAt, o.shippingMethod),
}));



export const useTrackingStore = create<TrackingStore>()(
  persist(
    (set, get) => ({
      orders: DEMO_ORDERS,

      placeOrder: (orderData) => {
        const newOrder: TrackedOrder = {
          ...orderData,
          currentStatus: 'placed',
          events: buildEvents('placed', orderData.placedAt, orderData.shippingMethod),
        };
        set(state => ({ orders: [newOrder, ...state.orders] }));
      },

      advanceStatus: (orderId) => {
        set(state => ({
          orders: state.orders.map(o => {
            if (o.orderId !== orderId) return o;
            const currentIdx = STATUS_FLOW.indexOf(o.currentStatus);
            if (currentIdx >= STATUS_FLOW.length - 1) return o;
            const nextStatus = STATUS_FLOW[currentIdx + 1];
            return {
              ...o,
              currentStatus: nextStatus,
              events: buildEvents(nextStatus, o.placedAt, o.shippingMethod),
            };
          }),
        }));
      },

      getOrder: (orderId) => {
        return get().orders.find(o => o.orderId === orderId);
      },
    }),
    { name: 'royal-crown-tracking' }
  )
);
