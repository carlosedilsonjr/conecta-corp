interface HeaderProps {
  step: number
  changeStep: (step: number) => void
}

const stepVariant: { [key: number]: string } = {
  '1': 'after:w-[0%]',
  '2': 'after:w-[25%]',
  '3': 'after:w-[50%]',
  '4': 'after:w-[75%]',
  '5': 'after:w-[100%]',
}

export function Header({ step, changeStep }: HeaderProps) {
  const stepMarkerVariant = [
    checkStepMarker(1),
    checkStepMarker(2),
    checkStepMarker(3),
    checkStepMarker(4),
    checkStepMarker(5),
  ]

  function checkStepMarker(markerNumber: number) {
    if (step > markerNumber || markerNumber === 1) return 'bg-green-500'

    return 'bg-zinc-300'
  }

  return (
    <header className='p-4'>
      <div className='flex justify-between'>
        {step !== 1 ? (
          <button
            type='button'
            className='flex items-center justify-center rounded-md bg-zinc-200 px-2 py-1 text-sm lg:px-6 lg:font-semibold lg:text-lg'
            onClick={() => changeStep(step - 1)}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        <p className='flex items-center justify-center rounded-md bg-zinc-200 px-2 py-1 text-xs lg:hidden'>
          Steps {step}/5
        </p>

        <div className='hidden lg:flex lg:items-center lg:gap-4'>
          <span className='font-semibold text-lg'>Need help?</span>
          <img src='https://github.com/carlosedilsonjr.png' alt='profile avatar' className='h-12 w-12 rounded-full' />
        </div>
      </div>

      <div
        className={`${stepVariant[step]} relative mt-8 mb-4 flex h-1 w-full rounded-full bg-zinc-300 after:left-0 after:rounded-full after:bg-green-500 lg:hidden`}
      >
        <div
          className={`-translate-x-1/2 -translate-y-[30%] absolute left-[0%] h-2 w-2 rounded-full ${stepMarkerVariant[0]}`}
        />
        <div
          className={`-translate-x-1/2 -translate-y-[30%] absolute left-[25%] h-2 w-2 rounded-full ${stepMarkerVariant[1]}`}
        />
        <div
          className={`-translate-x-1/2 -translate-y-[30%] absolute left-[50%] h-2 w-2 rounded-full ${stepMarkerVariant[2]}`}
        />
        <div
          className={`-translate-x-1/2 -translate-y-[30%] absolute left-[75%] h-2 w-2 rounded-full ${stepMarkerVariant[3]}`}
        />
        <div
          className={`-translate-x-1/2 -translate-y-[30%] absolute left-[100%] h-2 w-2 rounded-full ${stepMarkerVariant[4]}`}
        />
        <div
          className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 h-8 w-8 overflow-hidden rounded-full ${stepMarkerVariant[5]}`}
        >
          <img src='https://github.com/carlosedilsonjr.png' alt='profile avatar' />
        </div>
      </div>
    </header>
  )
}
