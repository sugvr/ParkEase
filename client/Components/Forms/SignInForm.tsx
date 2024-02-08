'use client';
<<<<<<< HEAD:client/Components/Forms/SignInPage.tsx
import { set, useForm } from 'react-hook-form';
=======

import { useForm } from 'react-hook-form';
>>>>>>> 7ca866d (BREAKING THE CODEBASE \0/):client/Components/Forms/SignInForm.tsx
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../LoginComponents/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../LoginComponents/input';
import { Button } from '../LoginComponents/button';
import Getcolor from "@/Constants/GetColors";
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../loading';


const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
});

const SignInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if (signInData?.error) {
      console.log(signInData.error);
    }

    if (!signInData?.ok) {
      return;
    }
    //router.push('/myaccount');
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex items-center justify-center'>
<<<<<<< HEAD:client/Components/Forms/SignInPage.tsx
          <Button className={`px-6 py-2 mt-6 border bg-${Getcolor(1)} rounded-full`} type='submit'>
          {isLoading ? <Loading /> : 'Sign In'}
=======
          <Button className={`px-6 py-2 mt-6 bg-${Getcolor(1)} rounded-full`} type='submit'>
            {isLoading ? <Loading /> : 'Sign in'}
>>>>>>> 7ca866d (BREAKING THE CODEBASE \0/):client/Components/Forms/SignInForm.tsx
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;