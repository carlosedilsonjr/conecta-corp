export interface AddressType {
  country: string
  state: string
  city: string
  street: string
  CEP: string
}

export interface FormData {
  // Personal Information
  fullName: string
  dateBirth: string
  email: string
  phone: string

  // Adddress
  address: AddressType
  billAdddress: AddressType

  // Professional Information
  role: string
  companyName: string
  service: string
  salary: string

  // Preferences
  products: string[]
  findOut: string[]

  // resume and terms
}

export const FormDataDefaultValues = {
  fullName: '',
  dateBirth: '',
  email: '',
  phone: '',

  address: {
    country: '',
    state: '',
    city: '',
    street: '',
    CEP: '',
  },
  billAdddress: {
    country: '',
    state: '',
    city: '',
    street: '',
    CEP: '',
  },

  role: '',
  companyName: '',
  service: '',
  salary: '',

  products: [],
  findOut: [],
}
