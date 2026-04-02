import { Link } from "react-router-dom";
interface ButtonProps {
    label: string;
    className?: string;
    to?: string;
}
const  Button:React.FC<ButtonProps>=({ label, className, to }) => {
  return (
    <a href={to || "/"} className={`  border z-20 px-6 py-2 rounded-full capitalize  cursor-pointer   ${className}`}>
      {label}
    </a >
  )
}

export default Button
