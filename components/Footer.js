export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LuxuryBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}
