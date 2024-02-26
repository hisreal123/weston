interface LoadingProps {
  custom_style?: string;
}

const Loading: React.FC<LoadingProps> = ({ custom_style }) => {
  return (
    <div
      className={`${custom_style} flex space-x-1 justify-center items-center bg-white h-fit mt-3 px-6 w-fit`}
    >
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
