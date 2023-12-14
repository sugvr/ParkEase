import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  full?: boolean;
  bgColor: string;
}

const Button = ({ type, title, icon, full, bgColor }: ButtonProps) => {
  return (
    <button
    className={`bg-${bgColor} text-black font-bold py-2 px-4 hover:bg-neutral-200 rounded-full flexCenter border border-black  ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} className="m-2"/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button