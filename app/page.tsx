import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Open Land for Sale in Noida Sector 62</h1>
        <p className="mt-4 text-xl">Noida Prime Property: Your trusted partner in real estate.</p>
      </header>

      <section className="p-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold">Looking for open land for sale in Noida Sector 62?</h2>
        <p className="mt-4 text-gray-700">Whether you are planning a property investment, exploring land for commercial use, or searching for a suitable plot for your future plans, choosing the right location is an important step.</p>
        <p className="mt-4 text-gray-700">Noida Sector 62 is a well-known area with established commercial activity, office spaces, educational institutions, and connectivity to other parts of Noida and Delhi NCR.</p>
      </section>

      <section className="bg-gray-100 p-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold">Why Explore Land for Sale in Noida Sector 62?</h2>
        <ul className="mt-4 space-y-4 list-disc list-inside text-gray-700">
          <li><strong>Established Commercial Location:</strong> Sector 62 has a recognised presence of offices, businesses, educational institutions, and other commercial establishments.</li>
          <li><strong>Connectivity Across Noida and Delhi NCR:</strong> The area has road connectivity to different parts of Noida and the wider Delhi NCR region.</li>
          <li><strong>Opportunities for Long-Term Property Investment:</strong> Land may be considered as part of a long-term real estate investment strategy.</li>
        </ul>
      </section>

      <section className="p-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold">Commercial Land for Sale in Noida Sector 62</h2>
        <p className="mt-4 text-gray-700">If you are searching for commercial land for sale in Noida Sector 62, review the property&apos;s permitted use and applicable development regulations before proceeding.</p>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-semibold">Important factors to consider:</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>Exact location and plot dimensions</li>
            <li>Permitted commercial or institutional use</li>
            <li>Road access and surrounding infrastructure</li>
            <li>Ownership and title documents</li>
            <li>Applicable development approvals and restrictions</li>
            <li>Asking price and additional transaction costs</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 p-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "Is open land available for sale in Noida Sector 62?", a: "Availability depends on current listings and individual property owners. Contact us to enquire about available land, exact locations, plot sizes, and asking prices." },
            { q: "What is the price of open land in Noida Sector 62?", a: "Land prices vary according to location, plot size, permitted use, legal status, road access, and market conditions." },
            { q: "Can I buy commercial land in Noida Sector 62?", a: "You may explore commercial land opportunities, but the specific property&apos;s approved land use and applicable development regulations must be verified before purchasing." },
            { q: "What documents should I check before buying land in Noida?", a: "Review the title and ownership records, relevant allotment or transfer documents where applicable, encumbrances, plot boundaries, approved land use, and required permissions." },
          ].map((faq, i) => (
            <div key={i} className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-blue-800">{faq.q}</h4>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-blue-600 text-white p-6 text-center">
        <h2 className="text-2xl font-semibold">Enquire About Open Land for Sale in Noida Sector 62</h2>
        <p className="mt-2">Contact us today for information about open land for sale in Noida Sector 62.</p>
        <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
          Contact Us
        </button>
      </footer>
    </main>
  );
}
