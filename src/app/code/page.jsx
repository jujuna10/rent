'use client'
import { UserContext } from '@/context/UserContext';
import { useState, useEffect, useRef, useContext, useTransition } from 'react';


const CodeInput = ({ value, onChange, onKeyDown, inputRef, index }) => {
const [isFocused, setIsFocused] = useState(false);

return (
    <input
    ref={inputRef}
    type="text"
    maxLength="1"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    className={`w-14 h-14 text-center text-2xl font-bold bg-gray-800/80 border-2 rounded-xl text-white backdrop-blur-sm transition-all duration-300 ease-out focus:outline-none ${
        isFocused 
        ? 'border-blue-500 bg-gray-800/95 shadow-blue-500/30 shadow-lg -translate-y-0.5' 
        : 'border-blue-500/30'
    } ${value ? 'border-green-500/50 bg-green-900/20' : ''}`}
    />
);
};

const Page = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const inputRefs = useRef([]);
  const {user,setUser} = useContext(UserContext)
  console.log(user,'code')
  const [codeAuth,setCodeAuth] = useState(null)
  
  // console.log(codeAuth.code)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch("http://localhost:8069/web/code", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          // credentials: 'include' 
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Server response: ${errorText}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCodeAuth(data)
        console.log("Loaded data:", data);
      } catch (error) {
        console.error("Error during loading:", error);
      }
    };

    fetchInitialData();
  }, []);



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

  // useEffect(() => {
  //   if (timeLeft > 0) {
  //     const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    const newCode = [...code];
    
    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);
    
    const nextEmptyIndex = newCode.findIndex(digit => !digit);
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fullCode = code.join('');
    if (fullCode.length !== 4) {
      alert('გთხოვთ შეიყვანოთ 4-ციფრიანი კოდი');
      return;
    }
    const intFullcode = parseInt(fullCode)
    if(codeAuth){
      if(intFullcode === codeAuth?.code){
        setIsLoading(false)
        setCode(['', '', '', ''])
        alert('correct')
      }
      else{
        alert('incorrect')
      }

    }

    if (timeLeft === 0) {
      alert('კოდის ვადა ამოიწურა. გთხოვთ მოითხოვოთ ახალი კოდი.');
      return;
    }
    
    // setIsLoading(true);
    if(user){
        try {
          const response = await fetch("http://localhost:8069/web/code", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log("წარმატება:", data);
          
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
    
        } catch (error) {
          console.error("შეცდომა:", error);
          alert('არასწორი კოდი. გთხოვთ სცადოთ თავიდან.');
          setCode(['', '', '', '']);
          inputRefs.current[0]?.focus();
        } finally {
          setIsLoading(false);
        }
    }

    // try {
    // const response = await fetch("http://localhost:8069/web/registration", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    // });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const data = await response.json();
    // console.log("წარმატება:", data);
    // router.push('/code')
    // setIsSuccess(true);
    
    // // ფორმის გასუფთავება
    // setFormData({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: ''
    // });

    // setTimeout(() => {
    //     setIsSuccess(false);
    // }, 3000);

    // } catch (error) {
    // console.error("შეცდომა:", error);
    // alert('დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.');
    // }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch("http://localhost:8069/web/resend-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setTimeLeft(300);
        setCode(['', '', '', '']);
        inputRefs.current[0]?.focus();
        alert('ახალი კოდი გაიგზავნა!');
      }
    } catch (error) {
      console.error("შეცდომა:", error);
      alert('კოდის ხელახალი გაგზავნა ვერ მოხერხდა.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-5 overflow-x-hidden font-sans">
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              დადასტურების კოდი
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              ჩვენ გამოგიგზავნეთ 4-ციფრიანი კოდი<br />
              თქვენს ელ-ფოსტაზე
            </p>
          </div>

          <div>
            <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
              {code.map((digit, index) => (
                <CodeInput
                  key={index}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center mb-6">
              <div className={`text-sm font-medium ${timeLeft <= 60 ? 'text-red-400' : 'text-slate-400'}`}>
                კოდის ვადა: {formatTime(timeLeft)}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || code.join('').length !== 4}
              className="w-full py-4 px-6 text-white text-lg font-bold rounded-xl transition-all duration-300 ease-out relative overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 active:-translate-y-0 mb-4 group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <span className="relative z-10">
                {isLoading ? 'მუშავდება...' : 'დადასტურება'}
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>

            <button
              onClick={handleResendCode}
              disabled={timeLeft > 240}
              className="w-full py-3 px-6 text-slate-300 text-sm font-medium rounded-xl transition-all duration-300 ease-out border border-slate-600 hover:border-blue-500/50 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {timeLeft > 240 
                ? `კოდის ხელახალი გაგზავნა (${formatTime(timeLeft - 240)})` 
                : 'კოდის ხელახალი გაგზავნა'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;