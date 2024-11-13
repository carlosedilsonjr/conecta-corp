import type { FormData } from '../types'

interface PreferencesFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
}

export default function PreferencesForm({
  formData,
  setFormData,
}: PreferencesFormProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({ [name]: value })
  }

  return (
    <div>
      <h1 className='font-bold text-lg'>Preferences</h1>

      <div className='mt-4 flex w-full flex-col items-start gap-1 px-4 py-2'>
        <label htmlFor='products' className='text-sm'>
          Products
        </label>
        <input
          type='text'
          name='products'
          value={formData.products || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />

        <label htmlFor='findOut' className='text-sm'>
          Find out
        </label>
        <input
          type='text'
          name='findOut'
          value={formData.findOut || ''}
          onChange={handleChange}
          className='h-9 w-full rounded border shadow'
        />
      </div>
    </div>
  )
}
