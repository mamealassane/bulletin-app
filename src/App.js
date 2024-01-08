// import './App.css';
// import { useState } from 'react';
// import Info from './Info';
// import UE1 from './UE1';
// import UE2 from './UE2';
// import UE3 from './UE3';
// import TableauResultat from './ResultsTable';

// function App() {
//   const [step , setStep] = useState(0);

//   const nextStep = () => { 
//     setStep((prevStep)=>prevStep +1);
//   };



//   return (
//     <div className="App">
      
//     {step === 0 && <Info nextStep={nextStep} />}
//     {step === 1 && <UE1 nextStep={nextStep}/>}
//     {step === 2 && <UE2 nextStep={nextStep}/>}
//     {step === 3 && <UE3 nextStep={nextStep}/>}
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import { useState } from 'react';
// import Info from './Info';
// import UE1 from './UE1';
// import UE2 from './UE2';
// import UE3 from './UE3';
// import TableauResultat from './ResultsTable';

// function App() {
//   const [step, setStep] = useState(0);
//   const [showTable, setShowTable] = useState(false); // Nouvel état pour gérer l'affichage du tableau

//   const nextStep = () => {
//     if (step < 3) {
//       setStep((prevStep) => prevStep + 1);
//     } else {
//       setShowTable(true); // Afficher le tableau lorsque l'utilisateur atteint l'étape finale
//     }
//   };

//   return (
//     <div className="App">
//       {!showTable && (
//         <>
//           {step === 0 && <Info nextStep={nextStep} />}
//           {step === 1 && <UE1 nextStep={nextStep} />}
//           {step === 2 && <UE2 nextStep={nextStep} />}
//           {step === 3 && <UE3 nextStep={nextStep} />}
//         </>
//       )}

//       {showTable && <TableauResultat />}
//     </div>
//   );
// }

// export default App;
import './App.css';
import { useState } from 'react';
import Info from './Info';
import UE1 from './UE1';
import UE2 from './UE2';
import UE3 from './UE3';
import TableauResultat from './ResultsTable'; 
import { Context } from './context';

function App() {
  const [step, setStep] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [cont , setCont] = useState({})

  const nextStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setShowTable(true);
    }
  };

  return (
    <Context.Provider value={[cont , setCont]}>
    <div className="App">
      {!showTable && (
        <>
          {step === 0 && <Info nextStep={nextStep} />}
          {step === 1 && <UE1 nextStep={nextStep} />}
          {step === 2 && <UE2 nextStep={nextStep} />}
          {step === 3 && <UE3 nextStep={nextStep} />}
        </>
      )}

      {showTable && <TableauResultat />}
    </div>
    </Context.Provider>
  );
}

export default App;

