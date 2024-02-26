const Loading: React.FC = () => {
  return (
    <div className="flex space-x-1 justify-center items-center bg-white h-fit mt-3 px-6 w-fit">
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
