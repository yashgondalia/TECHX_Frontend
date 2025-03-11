
import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className="mb-5 w-full">
      <label className="block text-white text-sm font-medium mb-2">{label}</label>
      <input
        className="neon-input"
        {...props}
      />
    </div>
  );
};

export default InputField;
