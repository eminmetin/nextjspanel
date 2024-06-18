// components/Card.tsx

const Card = () => {
  return (
    <div className='w-1/3 p-4'>
      <div className='bg-white border border-gray-200 rounded-lg shadow-md'>
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>Başlık</h2>
          <p className='text-gray-700'>Kart içeriği buraya gelecek.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
