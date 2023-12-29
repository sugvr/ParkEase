'use client';


import { set, useForm } from 'react-hook-form';
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
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import Getcolor from "@/Constants/GetColors";
import { compare } from 'bcrypt';
import { generateToken } from '../../app/(auth)/Authentication/Auth';
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    router.push('/myaccount');
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
          <Button className={`px-6 py-2 mt-6 border bg-${Getcolor(1)} rounded-full`} type='submit'>
            Sign in
          </Button>
        </div>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <div className='flex items-center justify-center'>
        <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
      </div>
      <p className='text-center text-sm text-gray-600 mt-4'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-up'>
          <span className={`text-${Getcolor(1)}`}>Sign Up</span>
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;