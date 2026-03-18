interface ButtonProps {
    label: string;
    className?: string;
}
const  Button:React.FC<ButtonProps>=({ label, className }) => {
  return (
    <div className={`  border z-80 px-6 py-2 rounded-full capitalize  cursor-pointer   ${className}`}>
      {label}
    </div>
  )
}

export default Button
