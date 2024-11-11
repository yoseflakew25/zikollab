const Button = ({text}) => {
  return (
    <button
      type='button'
      className="flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md">
      {text}
    </button>
  );
}
export default Button