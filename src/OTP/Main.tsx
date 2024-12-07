import React, { createContext, useContext, useState, useRef } from "react";

// Define the context type
type ValueType = {
  isFocused: boolean;
  index: number;
  value: number | string;
};

type ContextOTP = {
  digits: Array<ValueType>;
  setDigit: (updatedDigit: ValueType) => void;
};

// Create the context with a default value of `null`
const CreateOTPContext = createContext<ContextOTP | null>(null);

// OTPProvider Component
const OTPProvider = ({ children }: { children: React.ReactNode }) => {
  const [digits, setDigits] = useState<ValueType[]>([
    { isFocused: true, index: 0, value: "" },
    { isFocused: false, index: 1, value: "" },
    { isFocused: false, index: 2, value: "" },
    { isFocused: false, index: 3, value: "" },
    { isFocused: false, index: 4, value: "" },
    { isFocused: false, index: 5, value: "" },
  ]);

  const setDigit = (updatedDigit: ValueType) => {
    setDigits((prevDigits) =>
      prevDigits.map((digit) =>
        digit.index === updatedDigit.index ? updatedDigit : digit
      )
    );
  };

  return (
    <CreateOTPContext.Provider value={{ digits, setDigit }}>
      {children}
    </CreateOTPContext.Provider>
  );
};

// Custom hook for consuming the OTP context
const useOTPContext = () => {
  const context = useContext(CreateOTPContext);
  if (!context) {
    throw new Error("useOTPContext must be used within an OTPProvider");
  }
  return context;
};

// Custom Input Component
const CustomInput = () => {
  const { digits, setDigit } = useOTPContext();
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only single-digit numbers

    const nextIndex = index + 1;

    // Update the current digit
    setDigit({
      index,
      value: value || "",
      isFocused: false,
    });

    // Move focus to the next input
    if (nextIndex < digits.length && value !== "") {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    const prevIndex = index - 1;

    if (e.key === "Backspace" && !digits[index].value && prevIndex >= 0) {
      setDigit({
        index,
        value: "",
        isFocused: false,
      });
      inputRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {digits.map((digit, idx) => (
        <input
          key={digit.index}
          ref={(el) => (inputRefs.current[idx] = el!)}
          type="text"
          value={digit.value}
          onChange={(e) => handleChange(digit.index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(digit.index, e)}
          maxLength={1}
          style={{
            width: "50px",
            textAlign: "center",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
          }}
        />
      ))}
    </div>
  );
};

// App Component
export default function Main() {
  return (
    <OTPProvider>
      <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Enter OTP</h1>
        <CustomInput />
      </div>
    </OTPProvider>
  );
}
