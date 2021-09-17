import React, { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function Success() {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return <h1>You gave me your money dude!!! awesome</h1>;
}
