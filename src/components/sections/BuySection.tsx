'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEthereum, FaCreditCard } from 'react-icons/fa';

export default function BuySection() {
  const [amount, setAmount] = useState('1000');
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  return (
    <section id="buy" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea15,transparent_70%)] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Buy KASST Token In Presale Now!
            </span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Join the revolution and be among the first to own K2S tokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card backdrop-blur-sm p-8"
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-light/70">Raised</span>
                <span className="text-light font-bold">$2,161,020.05 / $5,828,309</span>
              </div>
              <div className="w-full h-4 bg-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: '37%' }}
                ></div>
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="text-secondary text-xl font-bold">1.6M</span>
              <span className="text-light ml-2">Remaining Tokens</span>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-light mb-4">Buy KASST</h3>

              <div className="flex justify-center space-x-4 mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="currency"
                    value="usd"
                    checked={paymentMethod === 'usd'}
                    onChange={() => setPaymentMethod('usd')}
                    className="hidden"
                  />
                  <div
                    className={`w-full px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all ${
                      paymentMethod === 'usd'
                        ? 'bg-primary text-white'
                        : 'bg-dark-light text-light/70 border border-primary/30'
                    }`}
                  >
                    <span className="text-2xl">$</span>
                    <span>USD</span>
                  </div>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="currency"
                    value="crypto"
                    checked={paymentMethod === 'crypto'}
                    onChange={() => setPaymentMethod('crypto')}
                    className="hidden"
                  />
                  <div
                    className={`w-full px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all ${
                      paymentMethod === 'crypto'
                        ? 'bg-primary text-white'
                        : 'bg-dark-light text-light/70 border border-primary/30'
                    }`}
                  >
                    <FaEthereum className="text-2xl" />
                    <span>CRYPTO</span>
                  </div>
                </label>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <button
                  className={`px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all ${
                    paymentMethod === 'usd'
                      ? 'bg-primary text-white'
                      : 'bg-dark-light text-light/70 border border-primary/30'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <FaCreditCard className="mr-2" />
                  <span>Card</span>
                </button>

                <button
                  className={`px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all ${
                    paymentMethod === 'crypto'
                      ? 'bg-primary text-white'
                      : 'bg-dark-light text-light/70 border border-primary/30'
                  }`}
                  onClick={() => setPaymentMethod('crypto')}
                >
                  <FaEthereum className="mr-2" />
                  <span>Crypto</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Purchase form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card backdrop-blur-sm p-8"
          >
            <h3 className="text-2xl font-bold text-light mb-6 text-center">Receive KASST</h3>

            <div className="mb-6">
              <label className="block text-light/70 mb-2">Amount of tokens to purchase</label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-dark border border-primary/30 rounded-lg px-4 py-3 text-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 px-2 py-1 rounded text-primary font-medium">
                  K2S
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => setAmount('1000')}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  1,000
                </button>
                <button
                  onClick={() => setAmount('5000')}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  5,000
                </button>
                <button
                  onClick={() => setAmount('10000')}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  10,000
                </button>
                <button
                  onClick={() => setAmount('50000')}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  50,000
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-light/70 mb-2">
                <span>Price per token</span>
                <span>€10.00</span>
              </div>
              <div className="flex justify-between text-light font-bold text-xl">
                <span>Total</span>
                <span>€{(parseInt(amount.replace(/,/g, '')) * 10).toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Complete Purchase
            </button>

            <p className="text-center text-light/50 text-sm mt-4">
              By purchasing, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
