const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50'>
      <div className='w-24 h-24 border-8 border-t-8 border-gray-200 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;
