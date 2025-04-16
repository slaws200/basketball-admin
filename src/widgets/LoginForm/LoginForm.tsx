// features/AuthForm/ui/LoginForm.tsx
import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormInput } from '@shared/ui/FormInput/FormInput';
import { Button } from '@shared/ui/Button/Button';
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';

interface LoginFormInputs {
  login: string;
  password: string;
}

export const LoginForm: FC = () => {
  const methods = useForm<LoginFormInputs>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Форма отправлена:', data);
    // тут можно стучаться в API
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="login" label="Login" required />
        <FormInput name="password" label="Password" type="password" needEye required />     
        <Button text={'Sign In'} variant='primary' type='submit'/>
      </form>
    </FormProvider>
  );
};
