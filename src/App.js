import './App.css';
import { useState } from 'react';
import Info from './Info';
import UE1 from './UE1';
import UE2 from './UE2';
import UE3 from './UE3';


function App() {
  const [step , setStep] = useState(0);

  const nextStep = () => { 
    setStep((prevStep)=>prevStep +1);
  };



  return (
    <div className="App">
    {step === 0 && <Info nextStep={nextStep} />}
    {step === 1 && <UE1 nextStep={nextStep}/>}
    {step === 2 && <UE2 nextStep={nextStep}/>}
    {step === 3 && <UE3 nextStep={nextStep}/>}
    </div>
  );
}

export default App;


