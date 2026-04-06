import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <AuthProvider>
          <CartProvider>
            <WishlistProvider>

              <Navbar />

              <main className="pt-20 md:pt-24 max-w-6xl mx-auto">
                {children}
              </main>

            </WishlistProvider>
          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}