export default function ButtonBase({
  type,
  children,
  disabled,
  onClick,
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`uppercase font-medium text-sm relative px-14 py-3.5 overflow-hidden group bg-primary hover:bg-gradient-to-r hove:bg-primary_hover text-white transition-all ease-out duration-300 ${className}`}
    >
      <span className="absolute right-0 w-8 h-24 -mt-12 transition-all duration-300 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-44 ease" />
      {children}
    </button>
  );
}
