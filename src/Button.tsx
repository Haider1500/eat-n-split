export function Button({ children, style, onClick }: any) {
  return (
    <button
      className={`w-fit px-2 rounded-md h-fit bg-yellow-600 text-white ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
