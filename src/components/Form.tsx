import type { FormData } from '../types'
import { AddressForm } from './AddressForm'
import ConfirmationForm from './ConfirmationForm'
import { PersonalInfoForm } from './PersonalInfoForm'
import PreferencesForm from './PreferencesForm'
import ProfessionalInfoForm from './ProfessionalInfoForm'

interface FormProps {
  step: number
  changeStep: (step: number) => void
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  onSubmit: () => void
}

export function Form({
  step,
  changeStep,
  formData,
  setFormData,
  onSubmit,
}: FormProps) {
  return (
    <div className='flex grow flex-col justify-between'>
      {step === 1 && (
        <PersonalInfoForm formData={formData} setFormData={setFormData} />
      )}
      {step === 2 && (
        <AddressForm formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && (
        <ProfessionalInfoForm formData={formData} setFormData={setFormData} />
      )}
      {step === 4 && (
        <PreferencesForm formData={formData} setFormData={setFormData} />
      )}
      {step === 5 && (
        <ConfirmationForm formData={formData} onSubmit={onSubmit} />
      )}

      <button
        type='button'
        className='mt-4 mb-10 w-[90%] self-center rounded-full bg-green-500 py-2 text-white'
        onClick={() => changeStep(step + 1)}
      >
        Next
      </button>
    </div>
  )
}
