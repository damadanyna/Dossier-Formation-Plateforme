import React, { FC } from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'primary-b' | 'secondary-b' | 'border-r' | 'border-r-w' |'secondary-b-sm' |'border-r-sm';
  children: React.ReactNode;
  className?:string;
};

const Boutton: FC<ButtonProps> = ({
  onClick,
  type = 'primary',
  children,
  className = ''
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

/*asiana div className='w-max' rehef ts ampitombiana le width sinon className='w-[x]' le x variable  */
  const classNames = `btn px-6 py-3 rounded-lg  font-[700] min-w-[130px] ${
    type === 'primary' ? 'bg-[#9D007B]  text-white ' : type === 'secondary' ? 'border border-black' : 
    type === 'primary-b' ? 'bg-black  text-white  ' : type ==='secondary-b' ? 'bg-[#2B2626]  text-white  ':
    type === 'border-r' ? 'border border-[#9D007B] text-[#9D007B] bg-[#EEEEEE]' :
    type === 'border-r-w' ? 'border border-[#9D007B] text-[#9D007B] ' :
    type ==='secondary-b-sm' ? 'bg-[#2B2626]  text-white px-5 py-2 font-[400]  rounded-[5px] w-max':
    type === 'border-r-sm' ? 'border border-[#9D007B] text-[#9D007B] bg-[#EEEEEE] px-5 py-2 font-[400] rounded-[5px] hover:border-[#2B2626] hover:bg-gradient-to-b hover:from-[#FFE2FE] hover:to-[transparent] hover:bg-[transparent] ' :''
  } ${className}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames}
    >
      {children}
    </button>
  );
};

export default Boutton;
