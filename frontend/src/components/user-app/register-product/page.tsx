'use client';

import { z, preprocess } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required').max(500),
  category: z.string().min(1, 'Category is required'),
  amount: preprocess(
    (value: unknown) => (value === '' ? undefined : Number(value)),
    z.number({ required_error: 'Amount is required' }).min(1, 'Minimum is 1')
  ),
  price: preprocess(
    (value: unknown) => (value === '' ? undefined : Number(value)),
    z
      .number({ required_error: 'Price is required' })
      .min(0.01, 'Must be greater than 0')
  ),
  timeUsed: z.string().min(1, 'Time used is required'),
});

export default function RegisterProductPage() {
  const [tab, setTab] = useState('1');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      amount: 1,
      price: 0,
      timeUsed: '1 month',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Enviando...:', values);
  }

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <div className="relative flex flex-col justify-center w-[24em] mx-auto p-8 rounded-2xl bg-card border border-border shadow-md">
        <TabsList className="absolute top-4 left-4 bg-transparent gap-1 p-0">
          <TabsTrigger
            value="1"
            className="cursor-pointer border border-border"
          >
            1
          </TabsTrigger>
          <TabsTrigger
            value="2"
            className="cursor-pointer border border-border"
          >
            2
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="pt-12 flex flex-col gap-8 transition-opacity duration-300 animate-fade"
          >
            {tab === '1' ? <StepOneFields /> : <StepTwoFields />}
            <Button type="submit" className="cursor-pointer">
              Create Product
            </Button>
          </form>
        </Form>
      </div>
    </Tabs>
  );
}

function StepOneFields() {
  return (
    <>
      <FormField
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

function StepTwoFields() {
  return (
    <>
      <FormField
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  R$
                </span>
                <Input type="number" className="pl-8" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="timeUsed"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Time Used</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
