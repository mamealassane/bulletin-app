import React from "react";
import {useForm , } from "react-hook-form"

const Info = ({nextStep}) => {

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
    <div className="Info flex items-center justify-center h-screen">
        <>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md p-6 bg-white rounded-md shadow-md flex flex-col items-center">
            <h2 className="text-2xl font-bold leading-9 text-gray-900 mb-6">
            Connexion
            </h2>

            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                First Name
                </label>
            <div className="mt-2">
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('firstName')}
                />
            </div>
            </div>

            <div>
                <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                Last Name
                </label>
            <div className="mt-2">
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register('lastName')}
                />
            </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Submit
                </button>
            </div>
        </form>
        </div>
    </>
    </div>
  );
};

export default Info;
