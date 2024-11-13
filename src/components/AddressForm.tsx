import { useState } from 'react'
import type { FormData } from '../types'

interface AddressFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  nextStep: (step: number) => void
}

const emptyErrors = {
  country: '',
  state: '',
  city: '',
  street: '',
  CEP: '',
}

export function AddressForm({ formData, setFormData, nextStep }: AddressFormProps) {
  const [errors, setErrors] = useState(emptyErrors)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(emptyErrors)
    const { name, value } = e.target
    setFormData({ address: { [name]: value } })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formData.address.country) setErrors((prev) => ({ ...prev, country: 'Country is required' }))
    if (!formData.address.state) setErrors((prev) => ({ ...prev, state: 'State is required' }))
    if (!formData.address.city) setErrors((prev) => ({ ...prev, city: 'City is required' }))
    if (!formData.address.street) setErrors((prev) => ({ ...prev, street: 'Street is required' }))
    if (!formData.address.CEP) setErrors((prev) => ({ ...prev, CEP: 'CEP is required' }))

    if (
      !formData.address.country ||
      !formData.address.state ||
      !formData.address.city ||
      !formData.address.street ||
      !formData.address.CEP
    )
      return

    nextStep(3)
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8 flex h-full flex-col justify-between'>
      <h1 className='font-bold text-lg'>Address Information</h1>

      <div className='flex w-full flex-col items-start gap-1 px-4'>
        <label htmlFor='country' className='text-sm'>
          Country
        </label>
        <input
          type='text'
          name='country'
          value={formData.address?.country || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.country && <span className='text-red-500 text-xs'>{errors.country}</span>}

        <label htmlFor='state' className='text-sm'>
          State
        </label>
        <input
          type='text'
          name='state'
          value={formData.address?.state || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.state && <span className='text-red-500 text-xs'>{errors.state}</span>}

        <label htmlFor='city' className='text-sm'>
          City
        </label>
        <input
          type='text'
          name='city'
          value={formData.address?.city || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.city && <span className='text-red-500 text-xs'>{errors.city}</span>}

        <label htmlFor='street' className='text-sm'>
          Street
        </label>
        <input
          type='text'
          name='street'
          value={formData.address?.street || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.street && <span className='text-red-500 text-xs'>{errors.street}</span>}

        <label htmlFor='CEP' className='text-sm'>
          CEP
        </label>
        <input
          type='text'
          name='CEP'
          value={formData.address?.CEP || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.CEP && <span className='text-red-500 text-xs'>{errors.CEP}</span>}
      </div>

      <button type='submit' className='mt-4 mb-10 w-[90%] self-center rounded-full bg-green-500 py-2 text-white'>
        Next
      </button>
    </form>
  )
}
