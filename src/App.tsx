import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { Header } from './components/Header'

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  function changeStep(step: number) {
    if (step < 1 || step > 5) return

    setCurrentStep(step)
  }

  return (
    <div className='flex h-screen w-screen flex-col'>
      <Header step={currentStep} changeStep={changeStep} />

      <Form step={currentStep} changeStep={changeStep} />
    </div>
  )
}

export default App
