import { TextInput } from './TextInput'

export function AddressForm() {
  return (
    <div>
      <div>
        <h1 className='font-bold text-lg'>Address</h1>

        <p className='px-4 text-center text-zinc-500'>
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>

      <div className='mt-4'>
        <TextInput label='Street' />
        <TextInput label='Number' />
        <TextInput label='Estate' />
        <TextInput label='Same for receeipt?' />
      </div>
    </div>
  )
}
