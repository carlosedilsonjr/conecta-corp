import { useState } from 'react'
import type { FormData } from '../types'

interface PreferencesFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  nextStep: (step: number) => void
}

const emptyErrors = {
  products: '',
  findOut: '',
}

export default function PreferencesForm({ formData, setFormData, nextStep }: PreferencesFormProps) {
  const [errors, setErrors] = useState(emptyErrors)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setErrors(emptyErrors)
    const { name, value } = event.target
    setFormData({ [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (formData.products.length === 0) setErrors((prev) => ({ ...prev, products: 'Products is required' }))
    if (formData.findOut.length === 0) setErrors((prev) => ({ ...prev, findOut: 'Find out is required' }))

    if (formData.products.length === 0 || formData.findOut.length === 0) return

    nextStep(5)
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8 flex h-full flex-col justify-between lg:h-fit'>
      <h1 className='font-bold text-lg lg:mb-8'>Preferences</h1>

      <div className='flex w-full flex-col items-start gap-1 px-4'>
        <label htmlFor='products' className='text-sm lg:mt-6'>
          Products
        </label>
        <input
          type='text'
          name='products'
          value={formData.products || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.products && <p className='text-red-500 text-xs'>{errors.products}</p>}

        <label htmlFor='findOut' className='text-sm lg:mt-6'>
          Find out
        </label>
        <input
          type='text'
          name='findOut'
          value={formData.findOut || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.findOut && <p className='text-red-500 text-xs'>{errors.findOut}</p>}
      </div>

      <button type='submit' className='mt-4 mb-10 w-[90%] self-center rounded-full bg-green-500 py-2 text-white'>
        Next
      </button>
    </form>
  )
}
