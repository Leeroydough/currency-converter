import React from 'react';
import Header from './Header';
import CurrencyForm from './CurrencyForm';
import Footer from './Footer';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <CurrencyForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
