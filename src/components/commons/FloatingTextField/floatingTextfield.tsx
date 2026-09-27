import { FieldError, Input, Label, TextField } from "@heroui/react";
import { forwardRef } from "react";

interface FloatingTextFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  isInvalid?: boolean;
  errorMessage?: string;
}

const FloatingTextField = forwardRef<HTMLInputElement, FloatingTextFieldProps>(
  (
    { id, name, label, type = "text", isInvalid, errorMessage, ...rest },
    ref,
  ) => (
    <TextField
      name={name}
      isInvalid={isInvalid}
      className="group relative w-full max-w-sm gap-0.5"
    >
      <Input
        ref={ref}
        id={id}
        type={type}
        placeholder=" "
        className="peer border-border bg-surface text-foreground focus:border-accent data-[invalid]:border-danger data-[invalid]:focus:border-danger box-border w-full rounded-xl !border px-3.5 pt-5 pb-2 text-sm transition-colors outline-none"
        {...rest}
      />
      <Label
        htmlFor={id}
        className="text-muted peer-focus:text-accent group-data-[invalid]:!text-danger pointer-events-none absolute top-3.5 left-3.5 origin-[0] -translate-y-2.5 scale-75 text-sm transition-all duration-150 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-sm"
      >
        {label}
      </Label>
      <FieldError className="text-danger text-sm">{errorMessage}</FieldError>
    </TextField>
  ),
);

FloatingTextField.displayName = "FloatingTextField";

export default FloatingTextField;
