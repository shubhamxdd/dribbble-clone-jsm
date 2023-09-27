import React from "react";

interface Props {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
}

const FormField = ({
  type,
  title,
  state,
  setState,
  placeholder,
  isTextArea,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label htmlFor="" className="w-full text-gray-100">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
