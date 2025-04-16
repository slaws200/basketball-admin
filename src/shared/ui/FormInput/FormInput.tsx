// shared/ui/FormInput/FormInput.tsx
import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '../Input/Input';
import { InputProps } from '../Input/Input';

interface FormInputProps extends InputProps{
  name: string;
  type?: string;
}

export const FormInput: FC<FormInputProps> = ({ name, label, needEye, type = 'text' }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...field}
          label={label}
          type={type}
          needEye={needEye}
          error={fieldState?.error?.message}
          passwordVisible={false}
        />
      )}
    />
  );
};
