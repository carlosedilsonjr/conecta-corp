import type { FormData } from '../types'

interface ProfessionalInfoFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
}

export default function ProfessionalInfoForm({
  formData,
  setFormData,
}: ProfessionalInfoFormProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({ [name]: value })
  }

  return (
    <div>
      <h1 className='font-bold text-lg'>Professional Information</h1>

      <div className='mt-4 flex w-full flex-col items-start gap-1 px-4 py-2'>
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
      </div>
    </div>
  )
}
