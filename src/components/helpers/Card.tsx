import React from 'react';

interface PacketDetail {
  rightsTitle: string;
  rightsValue: number;
  remainingTitle: string;
  remainingValue: number;
}

interface CardProps {
  title: string;
  linkText: string;
  packageDetail: string;
  packetDetails: PacketDetail[];
  className: string;
}

const Card: React.FC<CardProps> = ({
  title,
  linkText,
  packageDetail,
  packetDetails,
  className,
}) => {
  return (
    <div className='w-full lg:w-1/3 xl:w-1/3 h-full bg-white py-10 px-3 border-gray-200 rounded-lg shadow-md'>
      <div className=''>
        <div className='flex justify-between items-center '>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <p className='text-red-600 text-sm m-0 p-0'>{linkText}</p>
        </div>
        <p className='text-slate-500 font-light text-sm'>{packageDetail}</p>
        {packetDetails.map((detail, index) => (
          <div
            key={index}
            className='packetDetail shadow-sm flex justify-between mt-5 items-center border border-slate-300 p-3 rounded-md text-sm'
          >
            <p className='font-semibold'>{detail.rightsTitle}</p>
            <div className='ilanhakki flex flex-col items-center justify-center'>
              <p className='font-semibold'>{detail.rightsTitle}</p>
              <span>{detail.rightsValue}</span>
            </div>
            <div className='kalan flex flex-col items-center justify-center'>
              <p className='font-semibold'>{detail.remainingTitle}</p>
              <span className='text-blue-500 font-bold'>
                {detail.remainingValue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
