'use client'

import { Controller } from 'react-hook-form'
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@/components/ui/form'
import { useEffect, useState } from 'react'
import MyLexicalEditor from '@/components/LexicalTextEditor'

const TextEditor = ({
  name,
  form,
  label,
  className = '',
  placeholder = '',
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <FormItem className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Controller
          name={name}
          control={form.control}
          defaultValue={null}
          render={({ field }) => (
            <MyLexicalEditor
              value={field.value}
              onChange={field.onChange}
              placeholder={placeholder}
            />
          )}
        />
      </FormControl>
      <FormDescription />
      <FormMessage />
    </FormItem>
  )
}

export default TextEditor
