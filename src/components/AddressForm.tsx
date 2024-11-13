import type { FormData } from '../types'

interface AddressFormProps {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
}

export function AddressForm({ formData, setFormData }: AddressFormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ address: { [name]: value } })
  }

  return (
    <div>
      <h1 className='font-bold text-lg'>Address Information</h1>

      <div className='mt-4 flex w-full flex-col items-start gap-1 px-4 py-2'>
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
      </div>
    </div>
  )
}
