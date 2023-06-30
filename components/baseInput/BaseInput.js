export default function BaseInput({
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  onBlur,
}) {
  return (
    <input
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      id={id}
      className="bg-white border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
    />
  );
}
