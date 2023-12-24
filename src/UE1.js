import React from "react";
import {useForm , } from 'react-hook-form'

const UE1 = ({nextStep}) => {
  const {register , handleSubmit} = useForm();
  
  const onSubmit = async(data) =>{
    try  {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Données du formulaire soumises avec succès');
        nextStep();
      } else {
        console.error('Échec de la soumission des données du formulaire');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la soumission des données du formulaire', error);
    }
  }
  return (
    <div className="UE flex items-center justify-center h-screen">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl p-6 bg-white rounded-md shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-bold leading-9 text-gray-900 mb-6">
          UE1 - Outils de developpement
        </h2>

        {/* Matière 1 */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Python</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <label
                htmlFor="matiere1Devoir"
                className="block text-sm font-medium leading-6 text-gray-900 mr-4"
              >
                Devoir
              </label>
              <input
                id="PythonDevoir"
                name="PythonDevoir"
                type="number"
                autoComplete="off"
                required
                className="block w-32 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('PythonDevoir')}
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="matiere1Examen"
                className="block text-sm font-medium leading-6 text-gray-900 mr-4"
              >
                Examen
              </label>
              <input
                id="PythonExamen"
                name="PythonExamen"
                type="number"
                autoComplete="off"
                required
                className="block w-32 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('PythonExamen')}
              />
            </div>
          </div>
        </div>

        {/* Matière 2 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Methode d'analyse pour <br />application cooperante
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <label
                htmlFor="matiere2Devoir"
                className="block text-sm font-medium leading-6 text-gray-900 mr-4"
              >
                Devoir
              </label>
              <input
                id="AnalyseDevoir"
                name="AnalyseDevoir"
                type="number"
                autoComplete="off"
                required
                className="block w-32 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('AnalyseDevoir')}
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="matiere2Examen"
                className="block text-sm font-medium leading-6 text-gray-900 mr-4"
              >
                Examen
              </label>
              <input
                id="AnalyseExamen"
                name="AnalyseExamen"
                type="number"
                autoComplete="off"
                required
                className="block w-32 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('AnalyseExamen')}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit 
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UE1;
