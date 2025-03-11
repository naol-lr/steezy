import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className=\"container mx-auto py-8\">
        <h1 className="text-4xl font-bold text-center my-8">About LuxuryBrand</h1>
        <div className="text-lg leading-relaxed">
          <p>
            LuxuryBrand is dedicated to providing the finest quality products that embody sophistication, elegance, and timeless style. Our curated collection is designed for discerning customers who appreciate excellence in every detail.
          </p>
          <p className="mt-4">
            Our journey began with a passion for luxury and a commitment to deliver unparalleled service. We believe that every purchase should be an experience, a celebration of life’s exquisite moments.
          </p>
          <p className="mt-4">
            Join us and be a part of a legacy that redefines luxury shopping.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
