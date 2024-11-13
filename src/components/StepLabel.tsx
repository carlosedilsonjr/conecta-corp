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

  const circleVariants = {
    Completed: 'border-green-600 bg-green-600',
    'In progress': 'border-blue-600',
    '': 'border-zinc-400',
  }

  const titleVariants = {
    1: 'Personal Information',
    2: 'Address Information',
    3: 'Professional Information',
    4: 'Preferences',
    5: 'Confirmation',
  }

  const status = () => {
    if (step < currentStep) return 'Completed'
    if (step === currentStep) return 'In progress'

    return ''
  }

  return (
    <div className='flex items-center justify-center gap-4'>
      <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${circleVariants[status()]}`} />

      <div className='flex flex-col items-start'>
        <span className='font-medium text-sm text-zinc-400'>Step {step}</span>
        <p className=''>{titleVariants[step]}</p>
        <span className={`${statusVariant[status()]} font-medium text-xs`}>{status()}</span>
      </div>
    </div>
  )
}
