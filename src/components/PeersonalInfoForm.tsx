import { TextInput } from './TextInput'

export function PersonalInfoForm() {
  return (
    <div>
      <div>
        <h1 className='font-bold text-lg'>Personal Information</h1>

        <p className='px-4 text-center text-zinc-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestias
        </p>
      </div>

      <div className='mt-4'>
        <TextInput label='Full Name' />
        <TextInput label='Email' />
        <TextInput label='Date of Birth' />
        <TextInput label='Phone Number' />
      </div>
    </div>
  )
}
