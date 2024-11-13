interface StepLabelProps {
  step: number
  currentStep: number
}

export function StepLabel({ step, currentStep }: StepLabelProps) {
  const statusVariant = {
    Completed: 'text-green-600',
    'In progress': 'text-blue-600',
    '': 'text-zinc-400',
  }

  const status = () => {
    if (step < currentStep) return 'Completed'
    if (step === currentStep) return 'In progress'

    return ''
  }

  return (
    <div className='flex items-center justify-center gap-4'>
      <div className=' flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500'>
        <span>icon</span>
      </div>

      <div className='flex flex-col items-start border-2'>
        <span className='font-medium text-sm text-zinc-400'>Step {step}</span>
        <p className=''>Details</p>
        <span className={`${statusVariant[status()]} font-medium text-xs`}>{status()}</span>
      </div>
    </div>
  )
}
