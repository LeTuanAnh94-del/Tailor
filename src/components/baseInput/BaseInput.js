const classInput = {
  form: "bg-white border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2",
  order:
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#a98b6a] peer",
};

export const inputType = {
  form: "form",
  order: "order",
};

export default function BaseInput({
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  onBlur,
  required,
  types = inputType.form,
  label,
}) {
  return (
    <>
      <input
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        id={id}
        className={`${classInput[types]}`}
        required={required}
      />
      {classInput.order && (
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#a98b6a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {label}
        </label>
      )}
    </>
  );
}
