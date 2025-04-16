// features/AuthForm/ui/LoginForm.tsx
import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormInput } from '@shared/ui/FormInput/FormInput';
import { Button } from '@shared/ui/Button/Button';
import { Checkbox } from '@shared/ui/Checkbox/Checkbox';

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const methods = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
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
        <FormInput name="email" label="Email" required />
        <FormInput name="password" label="Пароль" type="password" needEye required />        
        <Checkbox required label='I Agree' type='checkbox'/>
        <Button text={'Войти'} variant='primary' type='submit'/>
      </form>
    </FormProvider>
  );
};
