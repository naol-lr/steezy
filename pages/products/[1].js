import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const docSnap = await getDoc(doc(db, 'products', id));
      if (docSnap.exists()) {
        setProduct({ id, ...docSnap.data() });
      }
    };
    fetchProduct();
  }, [id]);

  const handleOrder = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product })
    }).then(res => res.json());
    
    await stripe.redirectToCheckout({ sessionId: checkoutSession.id });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        {product ? (
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img 
                src={product.image || '/placeholder.jpg'} 
                alt={product.name} 
                className="w-full h-auto rounded-lg" 
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-2xl text-gray-700 mt-4">${product.price}</p>
              <p className="mt-4">{product.description}</p>
              <button onClick={handleOrder} className="mt-8 px-6 py-3 bg-black text-white rounded">
                Buy Now
              </button>
              <Link href=\"/\">\n                <a className=\"mt-4 inline-block text-blue-500\">Back to Shop</a>\n              </Link>\n            </div>\n          </div>\n        ) : (\n          <p>Loading...</p>\n        )}\n      </main>\n      <Footer />\n    </>\n  );\n}\n"}
