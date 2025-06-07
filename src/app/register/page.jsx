'use client'
import Header from '@/components/Header';
import { useState, useEffect } from 'react';

const InputField = ({ id, name, type, placeholder, label, value, onChange, required = true }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative transition-transform duration-300 ${isFocused ? '-translate-y-0.5' : ''}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-slate-200'}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full px-5 py-4 bg-gray-800/80 border-2 border-blue-500/30 rounded-xl text-white text-base backdrop-blur-sm transition-all duration-300 ease-out placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800/95 focus:shadow-blue-500/30 focus:shadow-lg focus:-translate-y-0.5"
        placeholder={placeholder}
      />
    </div>
  );
};

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 70; i++) {
      particleArray.push({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 6,
        animationDuration: Math.random() * 4 + 4
      });
    }
    setParticles(particleArray);
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData)
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
    alert('გთხოვთ შეავსოთ ყველა ველი');
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
    alert('გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი');
    return;
    }


    try {
    const response = await fetch("http://localhost:8069/web/registration", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("წარმატება:", data);
    setIsSuccess(true);
    alert('რეგისტრაცია წარმატებით დასრულდა!');
    
    // ფორმის გასუფთავება
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    setTimeout(() => {
        setIsSuccess(false);
    }, 3000);

    } catch (error) {
    console.error("შეცდომა:", error);
    alert('დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.');
    } finally {
    setIsLoading(false);
    }
    };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-5 overflow-x-hidden font-sans">
    {/* <Header /> */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-60 glow"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6)',
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-md">
        <div className="absolute -inset-0.5 rounded-3xl opacity-0 blur-sm bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-pulse" />
        <div 
          className={`relative bg-gray-900/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl shadow-black/80 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl ${isSuccess ? 'animate-pulse border-green-500' : 'border-blue-500/30'}`}
        >
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            რეგისტრაცია
          </h1>

          <div className="space-y-6">
            <InputField
              id="firstName"
              name="firstName"
              type="text"
              placeholder="სახელი"
              label="სახელი"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              id="lastName"
              name="lastName"
              type="text"
              placeholder="გვარი"
              label="გვარი"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              label="ელ-ფოსტა"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputField
              id="phone"
              name="phone"
              type="tel"
              placeholder="+995 XXX XXX XXX"
              label="ტელეფონი"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <button
              onClick={handleSubmit}
              className="w-full py-4 px-6 text-white text-lg font-bold rounded-xl transition-all duration-300 ease-out relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 active:-translate-y-0 mt-2 group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <span className="relative z-10">რეგისტრაცია</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
