import { StepLabel } from './StepLabel'

interface Props {
  currentStep: number
}

export function Sidebar({ currentStep }: Props) {
  return (
    <div className='flex h-full basis-1/3 flex-col justify-between rounded-2xl bg-zinc-100 p-8'>
      <header>
        <h1 className='font-brand2 font-medium text-6xl'>Conecta Corp</h1>
      </header>

      <main className='flex w-fit flex-col items-start gap-8'>
        <StepLabel step={1} currentStep={currentStep} />
        <StepLabel step={2} currentStep={currentStep} />
        <StepLabel step={3} currentStep={currentStep} />
        <StepLabel step={4} currentStep={currentStep} />
        <StepLabel step={5} currentStep={currentStep} />
      </main>

      <footer>
        <p>
          Already have an account? <b>Log in</b>
        </p>
      </footer>
    </div>
  )
}
