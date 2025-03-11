import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-100">
        {/* Hero Section */}  
        <section 
          className="bg-cover bg-center h-96 flex items-center justify-center" 
          style={{ backgroundImage: 'url(/luxury-hero.jpg)' }}
        >
          <div className="text-center">
            <h1 className="text-white text-5xl font-serif font-bold">Welcome to LuxuryBrand</h1>
            <p className="text-white mt-4 text-xl">Experience the epitome of elegance and style</p>
            <Link href="/">
              <button className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded">Shop Now</button>
            </Link>
          </div>
        </section>

        {/* Product Grid */}  
        <section className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-center my-8">Our Exclusive Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={product.image || '/placeholder.jpg'} 
                  alt={product.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-gray-700">${product.price}</p>
                  <Link href={`/product/${product.id}`}>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
