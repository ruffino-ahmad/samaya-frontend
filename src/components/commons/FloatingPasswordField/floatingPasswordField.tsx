import {
  Button,
  FieldError,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { ChangeEventHandler, forwardRef } from "react";

interface FloatingPasswordFieldProps {
  id: string;
  name: string;
  label: string;
  visible: boolean;
  onToggle: () => void;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  isInvalid?: boolean;
  errorMessage?: string;
}

const FloatingPasswordField = forwardRef<
  HTMLInputElement,
  FloatingPasswordFieldProps
>(
  (
    { id, name, label, visible, onToggle, isInvalid, errorMessage, ...rest },
    ref,
  ) => {
    return (
      <TextField
        name={name}
        isInvalid={isInvalid}
        className="group relative w-full max-w-sm gap-0.5"
      >
        <InputGroup className="relative w-full">
          <InputGroup.Input
            ref={ref}
            id={id}
            type={visible ? "text" : "password"}
            placeholder=" "
            className="peer border-border bg-surface text-foreground focus:border-accent data-[invalid]:border-danger data-[invalid]:focus:border-danger box-border w-full rounded-xl !border px-3.5 pt-5 pr-10 pb-2 text-sm transition-colors outline-none"
            {...rest}
          />

          <Label
            htmlFor={id}
            className="text-muted peer-focus:text-accent group-data-[invalid]:!text-danger pointer-events-none absolute top-3.5 left-3.5 origin-[0] -translate-y-2.5 scale-75 text-sm transition-all duration-150 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-sm"
          >
            {label}
          </Label>

          <InputGroup.Suffix className="absolute inset-y-0 right-2 z-10 flex items-center">
            <Button
              isIconOnly
              size="sm"
              variant="ghost"
              aria-label={visible ? "Hide password" : "Show password"}
              onPress={onToggle}
              className="h-8 w-8 min-w-8"
            >
              {visible ? (
                <EyeSlash aria-hidden="true" className="text-muted size-4" />
              ) : (
                <Eye aria-hidden="true" className="text-muted size-4" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
        <FieldError className="text-danger text-sm">{errorMessage}</FieldError>
      </TextField>
    );
  },
);

FloatingPasswordField.displayName = "FloatingPasswordField";

export default FloatingPasswordField;
