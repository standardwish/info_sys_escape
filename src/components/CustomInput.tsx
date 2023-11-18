type inputProps = {
  id: string;
  type: inputType;
  labelName: string;
  placeholder: string;
  required: boolean;
};

export enum inputType {
  text = "text",
  password = "password",
  email = "email",
  phone = "phone",
}

export default function CustomInput({
  id,
  labelName,
  placeholder,
  required = false,
}: inputProps) {
  return (
    <div>
      <input
        type="text"
        id={id}
        className="border-gray-300 bg-white border-2 rounded-md transition-all duration-200 text-gray-900 text-sm focus:ring-lightGreen focus:border-lightGreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkGreen dark:focus:border-darkGreen"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
