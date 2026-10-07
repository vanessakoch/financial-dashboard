'use client'

import transactions from "@/app/data/transactions.json";

const data = [
  { title: "Balance", value: "R$ 24.580" },
  { title: "Income", value: "R$ 8.500" },
  { title: "Expenses", value: "R$ 5.230" },
  { title: "Savings", value: "38.5%" },
];

export default function Home() {
  console.log(transactions);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen w-full">
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Financial Dashboard</h1>
              <p className="mt-2 text-muted-foreground">
                Overview of your financial activity
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              {currentDate}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map(item => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
                <h2 className="text-sm text-muted-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-2xl font-semibold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 shadow-sm h-64">
            grafico
          </div>
        
          <div className="mt-8 grid grid-cols-2 divide-x divide-gray-200 rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <p>Aqui</p>
            </div>

            <div className="p-6">
              <p>Ali</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
