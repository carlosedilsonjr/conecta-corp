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

export function Form({ step, changeStep, formData, setFormData, onSubmit }: FormProps) {
  return (
    <div className='flex grow flex-col justify-between lg:justify-center'>
      {step === 1 && <PersonalInfoForm formData={formData} setFormData={setFormData} nextStep={changeStep} />}
      {step === 2 && <AddressForm formData={formData} setFormData={setFormData} nextStep={changeStep} />}
      {step === 3 && <ProfessionalInfoForm formData={formData} setFormData={setFormData} nextStep={changeStep} />}
      {step === 4 && <PreferencesForm formData={formData} setFormData={setFormData} nextStep={changeStep} />}
      {step === 5 && <ConfirmationForm formData={formData} onSubmit={onSubmit} />}
    </div>
  )
}
