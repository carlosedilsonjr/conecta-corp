import type { FormData } from '../types'

interface ConfirmationFormProps {
  formData: FormData
  onSubmit: () => void
}

export default function ConfirmationForm({
  formData,
  onSubmit,
}: ConfirmationFormProps) {
  return (
    <div>
      <h1 className='font-bold text-lg'>Confirmation</h1>

      <div className='mt-4 flex w-full flex-col items-start gap-1 px-4 py-2'>
        <p className='text-sm'>Full name: {formData.fullName}</p>
        <p className='text-sm'>Email: {formData.email}</p>
      </div>

      <button type='button' onClick={onSubmit}>
        Submit
      </button>
    </div>
  )
}
