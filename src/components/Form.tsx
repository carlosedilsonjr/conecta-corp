import { AddressForm } from './AddressForm'
import { PersonalInfoForm } from './PeersonalInfoForm'

interface FormProps {
  step: number
  changeStep: (step: number) => void
}

export function Form({ step, changeStep }: FormProps) {
  return (
    <div className='flex grow flex-col justify-between'>
      {step === 1 && <PersonalInfoForm />}
      {step === 2 && <AddressForm />}
      {step === 3 && <PersonalInfoForm />}
      {step === 4 && <PersonalInfoForm />}
      {step === 5 && <PersonalInfoForm />}

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
