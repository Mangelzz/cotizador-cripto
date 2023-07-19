const Error = ({ children }) => {
  return (
    <div className="bg-red-500 font-bold text-center p-3 text-2xl text-white rounded-md">
      {children}
    </div>
  );
};
export default Error;
