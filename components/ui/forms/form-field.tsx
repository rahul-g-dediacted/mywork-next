export interface FormFieldProps {
  readonly label: string;
  readonly id: string;
}

export default function FormField(props: FormFieldProps) {
  const { label, id } = props;

  return (
    <div className="w-full mb-2">
      <label htmlFor={id} className="block text-sm">
        {label}
      </label>
      <input id={id} className="w-full px-4 py-2" />
    </div>
  );
}
