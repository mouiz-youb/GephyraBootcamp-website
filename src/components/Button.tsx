interface ButtonProps {
    label: string;
    className?: string;
}
const  Button:React.FC<ButtonProps>=({ label, className }) => {
  return (
    <div className={` btn-gold px-6 py-2 rounded-full  cursor-pointer  text-white ${className}`}>
      {label}
    </div>
  )
}

export default Button
