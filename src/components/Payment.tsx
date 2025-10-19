import React, { useState, FormEvent, ChangeEvent } from "react";
// Added
interface PaymentForm {
  name: string;
  email: string;
  amount: string;
}

const SSLPaymentPage: React.FC = () => {
  const [formData, setFormData] = useState<PaymentForm>({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data?.GatewayPageURL) {
        window.location.href = data.GatewayPageURL; // Redirect to SSLCommerz
      } else {
        alert("Payment initialization failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-green-700">
          SSL Payment
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
        />

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default SSLPaymentPage;
