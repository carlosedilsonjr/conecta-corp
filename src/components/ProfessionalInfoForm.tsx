import { useState } from 'react'
import type { FormData } from '../types'

interface ProfessionalInfoFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  nextStep: (step: number) => void
}

const emptyErrors = {
  role: '',
  companyName: '',
  service: '',
  salary: '',
}

export default function ProfessionalInfoForm({ formData, setFormData, nextStep }: ProfessionalInfoFormProps) {
  const [errors, setErrors] = useState(emptyErrors)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setErrors(emptyErrors)
    const { name, value } = event.target
    setFormData({ [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formData.role) setErrors((prev) => ({ ...prev, role: 'Role is required' }))
    if (!formData.companyName) setErrors((prev) => ({ ...prev, companyName: 'Company name is required' }))
    if (!formData.service) setErrors((prev) => ({ ...prev, service: 'Service is required' }))
    if (!formData.salary) setErrors((prev) => ({ ...prev, salary: 'Salary is required' }))

    if (!formData.role || !formData.companyName || !formData.service || !formData.salary) return

    nextStep(4)
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8 flex h-full flex-col justify-between'>
      <h1 className='font-bold text-lg'>Professional Information</h1>

      <div className='flex w-full flex-col items-start gap-1 px-4'>
        <label htmlFor='role' className='text-sm'>
          Role
        </label>
        <input
          type='text'
          name='role'
          value={formData.role || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.role && <p className='text-red-500 text-sm'>{errors.role}</p>}

        <label htmlFor='companyName' className='text-sm'>
          Company Name
        </label>
        <input
          type='text'
          name='companyName'
          value={formData.companyName || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.companyName && <p className='text-red-500 text-sm'>{errors.companyName}</p>}

        <label htmlFor='service' className='text-sm'>
          Service
        </label>
        <input
          type='text'
          name='service'
          value={formData.service || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.service && <p className='text-red-500 text-sm'>{errors.service}</p>}

        <label htmlFor='salary' className='text-sm'>
          Salary
        </label>
        <input
          type='number'
          name='salary'
          value={formData.salary || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
        {errors.salary && <p className='text-red-500 text-sm'>{errors.salary}</p>}
      </div>

      <button type='submit' className='mt-4 mb-10 w-[90%] self-center rounded-full bg-green-500 py-2 text-white'>
        Next
      </button>
    </form>
  )
}
