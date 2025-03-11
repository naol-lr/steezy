import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-serif font-bold">LuxuryBrand</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/">Shop</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
