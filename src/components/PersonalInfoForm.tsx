import type { FormData } from '../types'

interface PersonalInfoFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
}

export function PersonalInfoForm({
  formData,
  setFormData,
}: PersonalInfoFormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ [name]: value })
  }

  return (
    <div>
      <h1 className='font-bold text-lg'>Personal Information</h1>

      <div className='mt-4 flex w-full flex-col items-start gap-1 px-4 py-2'>
        <label htmlFor='fullName' className='text-sm'>
          Full name
        </label>
        <input
          type='text'
          name='fullName'
          value={formData.fullName || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />

        <label htmlFor='email' className='text-sm'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={formData.email || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />

        <label htmlFor='phone' className='text-sm'>
          Phone
        </label>
        <input
          type='tel'
          name='phone'
          value={formData.phone || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />

        <label htmlFor='dateBirth' className='text-sm'>
          Date of Birth
        </label>
        <input
          type='date'
          name='dateBirth'
          value={formData.dateBirth || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
      </div>
    </div>
  )
}
