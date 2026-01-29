import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 font-medium transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-brand-accent hover:shadow-lg",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-brand-dark hover:bg-gray-100 hover:shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;