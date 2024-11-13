interface TextInputProps {
  label: string
}

export function TextInput({ label }: TextInputProps) {
  return (
    <div className='flex w-full flex-col items-start gap-1 px-4 py-2'>
      <label htmlFor='name' className='text-sm'>
        {label}
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='h-9 w-full rounded border shadow'
      />
    </div>
  )
}
