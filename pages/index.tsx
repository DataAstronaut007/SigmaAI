import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">SigmaAI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📦 Sprzedaż</h2>
          <p>Lista ostatnich transakcji i analizy sprzedaży.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">💬 Wiadomości</h2>
          <p>Wiadomości od kupujących z wielu kont.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🛡️ Dyskusje</h2>
          <p>Aktywne dyskusje i zgłoszenia.</p>
        </div>
      </div>
    </div>
  );
}