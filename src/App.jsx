import React, { useState } from 'react';

const App = () => {
  //state
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedOptionFiliere, setSelectedOptionFiliere] = useState("option3")
  const [selectedOptionSituation, setSelectedOptionSituation] = useState("option7")
  const [selectedOptionSouscription, setSelectedOptionSouscription] = useState("option12")
  const [selectedOptionChoix, setSelectedOptionChoix] = useState("option14")
  const [firstname, setFirsname] = useState('');
  const [lastName, setLastName] = useState('');
  const [lieuNaissance, setLieuNaissance] = useState('');
  const [autreApreciser, setAutreApreciser] = useState('');
  const [pieceNumber, setPieceNumber] = useState(Array(15).fill(''));
  const [dateNaissance, setDateNaissance] = useState(Array(8).fill(''));
  const [telephone, setTelephone] = useState(Array(14).fill(''));
  const [portable, setPortable] = useState(Array(14).fill(''));
  const [nbreEnfant, setNbreEnfant] = useState(Array(2).fill(''));
  const [poids, setPoids] = useState(Array(4).fill(''));
  const [taille, setTaille] = useState(Array(5).fill(''));
  const [lieuHabitation, setLieuHabitation] = useState("");
  const [adresseP, setAdresseP] = useState("");
  const [email, setEmail] = useState("");



  //comportements

  const rows = Array.from({ length: 4 }, (_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: 5 }, (_, colIndex) => (
        <td key={colIndex} className="border border-gray-500  ">
          {colIndex === 0 ? (
           
            <strong className='pl-2'>{["Conjoint(e)", "1er enfant", "2eme enfant", "3eme enfant"][rowIndex]}</strong>
          ) : (

            <input
              type="text"
              className="w-full h-full border-0 border-gray-300 p-2"
            />
          )}
        </td>
      ))}
    </tr>
  ));

  // Gestion fiche Medicale //

  
  const radioTexts = [
    "Avez-vous déjà une couverture santé ?",
    "Fumez-vous ?",
    "Consommez-vous de l'alcool ?",
    "Avez-vous été hospitalisé pendant ces 2 dernières années ?",
    "Avez-vous été dejà opéré ?",
    "Soufrez-vous d'une maladie du coeur ?",
    "Souffez-vous d'une maladie des poumons ?",
    "Souffez-vous d'une maladie des yeux ?",
    "Souffez-vous d'une maladie de l'appareil digestif ?",
    "Souffez-vous d'une maladie des reins ?",
    "Souffez-vous des problemes urinaires ?",
    "Souffez-vous de maladies des organes genitaux ?",
    "Avez-vous la diabete ?",
    "Avez-vous la tension ?",
    "Souffez-vous de problemes gynécologiques ?",
    "Etes-vous porteuse d'une grossese",
    "Souffez-vous de maladies de sang ?",
    "Souffez-vous de rhumatismes ?",
    "Souffez-vous de maladies de systeme nerveux ?",
    "Souffez-vous de dépressions nerveuses ?",
    "Soufrez-vous de maladies ",
    "Soufrez-vous de maladies particulière",
  ];
  const renderRadioGroups = () => {
    return radioTexts.map((text, index) => (
      <div>

        <div className='flex mt- gap-x-8 justify-between' key={`radio-group-${index + 1}`}>
          <p className='text-base font-semibold' htmlFor={`hs-radio-group-${index + 1}`}>{`${index + 1}-${text}`}</p>
          <div className="flex gap-x-8 mt-1">
            <input
              type="radio"
              name={`hs-radio-group-${index + 1}`}
              className="border-gray-600 rounded-3xl text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id={`hs-radio-group-${2 * index + 1}`}
            />
            <input
              type="radio"
              name={`hs-radio-group-${index + 1}`}
              className="border-gray-600 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id={`hs-radio-group-${2 * index + 2}`}
            />
          </div>
        </div>
      </div>

    ));
  };

  ////

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleOptionFiliereChange = (event) => {
    setSelectedOptionFiliere(event.target.value);
  }

  const handleOptionSituationChange = (event) => {
    setSelectedOptionSituation(event.target.value);
  }

  const handleOptionSouscriptionChange = (event) => {
    setSelectedOptionSouscription(event.target.value);
  }

  const handleOptionChoixChange = (event) => {
    setSelectedOptionChoix(event.target.value);
  }

  const handlePieceChange = (index, value) => {
    // Vérifier si la valeur est un chiffre et si la longueur n'est pas dépassée
    if (/^\d*$/.test(value) && value.length <= 1) {
      // Mettre à jour le tableau avec la nouvelle valeur
      const updatedPieceNumber = [...pieceNumber];
      updatedPieceNumber[index] = value;
      setPieceNumber(updatedPieceNumber);
    }
  };

  const handledateChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedDateNaissance = [...dateNaissance];
      updatedDateNaissance[index] = value;
      setDateNaissance(updatedDateNaissance);
    }
  };

  const handletelephoneChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedTelephone = [...telephone];
      updatedTelephone[index] = value;
      setTelephone(updatedTelephone);
    }
  };

  const handleportableChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedPortable = [...portable];
      updatedPortable[index] = value;
      setPortable(updatedPortable);
    }
  };

  const handleNbreEnfantChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedNbreEnfant = [...nbreEnfant];
      updatedNbreEnfant[index] = value;
      setNbreEnfant(updatedNbreEnfant);
    }
  };

  const handlePoidsChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedPoids = [...poids];
      updatedPoids[index] = value;
      setPoids(updatedPoids);
    }
  };

  const handleTailleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedTaille = [...taille];
      updatedTaille[index] = value;
      setTaille(updatedTaille);
    }
  };



  //render
  return (
    <div className='w-full min-h-screen max-w-[] '>

      <div className='flex flex-col items-center mt-2 mb-3'>
        <h2 className='text-3xl font-bold'>Assurance Santé</h2>
        <h4 className='text-lg'>Bulletin d'adhesion</h4>
      </div>

      <form
        action="submit"
        className=' w-full relative'
        autoComplete="off"

      >
        <h2 className='ml-5 absolute mt-[175px] text-base font-bold transform -rotate-90 origin-left'>FICHE SIGNALETIQUE</h2>
        <div className='border-2 border-gray-500 w-full max-w-[] p-3 px-14'>
          <div className='flex mt-2 gap-x-5 '>
            <p className='text-lg font-semibold' htmlFor="">Je soussigné(e)</p>
            <div className='flex gap-x-8'>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="option1"
                  name="hs-radio-vertical-group"
                  className=" border-gray-600 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="hs-radio-vertical-group-1" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-800">M</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group"
                  value="option2"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="hs-radio-vertical-group-2" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-800">Mme</label>
              </div>
            </div>

          </div>

          <div className='flex gap-4'>

            <div className='flex-[1.5]'>
              <div className='flex items-center my-3'>
                <label className='text-lg font-semibold' htmlFor="firsname">Nom : </label>
                <input
                  type="text"
                  value={firstname}
                  className='flex-1 pl-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black focus-border-blue-600 peer'
                  id='firsname'
                  onChange={(event) => setFirsname(event.target.value)}
                />
              </div>
              <div className='flex gap-5 items-center'>
                <label className='text-lg font-semibold' htmlFor="">Date de Naissance : </label>
                <div className="flex">
                  {dateNaissance.slice(0, 2).map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                      onChange={(e) => handledateChange(index, e.target.value)}
                    />
                  ))}
                  <div className="w-4" />
                  {dateNaissance.slice(2, 4).map((digit, index) => (
                    <input
                      key={index + 2}
                      type="text"
                      maxLength="1"
                      value={digit}
                      className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                      onChange={(e) => handledateChange(index + 2, e.target.value)}
                    />
                  ))}
                  <div className="w-2" />
                  {dateNaissance.slice(4).map((digit, index) => (
                    <input
                      key={index + 4}
                      type="text"
                      maxLength="1"
                      value={digit}
                      className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                      onChange={(e) => handledateChange(index + 4, e.target.value)}
                    />
                  ))}
                </div>
              </div>

            </div>

            <div className='flex-[2]' >
              <div className='flex items-center my-3'>
                <label className='text-lg font-semibold' htmlFor="lastname">Prénoms : </label>
                <input
                  type="text"
                  value={lastName}
                  className='flex-1 pl-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus-text-black focus-border-blue-600 peer'
                  id='lastname'
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className='flex items-center'>
                <label className='text-lg font-semibold' htmlFor="lastname">Lieu de Naissance : </label>
                <input
                  type="text"
                  value={lieuNaissance}
                  className='flex-1 ml-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus-text-black focus-border-blue-600 peer'
                  id='lastname'
                  onChange={(event) => setLieuNaissance(event.target.value)}
                />
              </div>

            </div>

          </div>


          <div className='flex w-full gap-x-5 mt-4'>
            <p className='text-lg font-semibold' htmlFor="">Type pièce :</p>
            <div className='flex gap-x-7 grow'>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="option3"
                  name="hs-radio-vertical-group-filiere"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-3"
                  checked={selectedOptionFiliere === 'option3'}
                  onChange={handleOptionFiliereChange}
                />
                <label htmlFor="hs-radio-vertical-group-3" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-500">CNI</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-filiere"
                  value="option4"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-4"
                  checked={selectedOptionFiliere === 'option4'}
                  onChange={handleOptionFiliereChange}
                />
                <label htmlFor="hs-radio-vertical-group-4" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Passeport</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-filiere"
                  value="option5"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-5"
                  checked={selectedOptionFiliere === 'option5'}
                  onChange={handleOptionFiliereChange}
                />
                <label htmlFor="hs-radio-vertical-group-5" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Permis de conduire</label>
              </div>
              <div className="flex items-center grow">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-autre"
                  value="option6"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-6"
                  checked={selectedOptionFiliere === 'option6'}
                  onChange={handleOptionFiliereChange}
                />
                <label htmlFor="hs-radio-vertical-group-6" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Autre (à préciser) : </label>
                <input
                  type="text"
                  value={autreApreciser}
                  className='grow ml-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus-text-black focus-border-blue-600 peer'
                  id='lastname'
                  onChange={(event) => setAutreApreciser(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex mt-4 gap-2">
            <p className='text-lg font-semibold' htmlFor="">N° de la pièce :</p>
            <div>
              {pieceNumber.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                  onChange={(e) => handlePieceChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>

          <div className='mt-4 w-full flex'>
            <label className='text-lg font-semibold' htmlFor="lieuAbitation">Lieu d'habitation : </label>
            <input
              type="text"
              value={lieuHabitation}
              className='grow ml-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black focus-border-blue-600 peer'
              id='lieuAbitation'
              onChange={(event) => setLieuHabitation(event.target.value)}
            />
          </div>

          <div className='mt-4 w-full flex'>
            <label className='text-lg font-semibold' htmlFor="adresseP">Adresse Postale : </label>
            <input
              type="text"
              value={adresseP}
              className='grow ml-3 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black focus-border-blue-600 peer'
              id='adresseP'
              onChange={(event) => setAdresseP(event.target.value)}
            />
          </div>

          <div className='flex gap-7'>
            <div className="flex mt-4 gap-2">
              <p className='text-lg font-semibold' htmlFor="">Téléphone :</p>
              <div>
                {telephone.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                    onChange={(e) => handletelephoneChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <div className="flex mt-4 gap-2">
              <p className='text-lg font-semibold' htmlFor="">Portable :</p>
              <div>
                {portable.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                    onChange={(e) => handleportableChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='mt-4 w-full flex'>
            <label className='text-lg font-semibold' htmlFor="adresseP">Email : </label>
            <input
              type="text"
              value={email}
              className='grow ml-3 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black focus-border-blue-600 peer'
              id='adresseP'
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className='flex w-full gap-x-5 mt-4'>
            <p className='text-lg font-semibold' htmlFor="">Situation matrimoniale :</p>
            <div className='flex gap-x-7'>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="option7"
                  name="hs-radio-vertical-group-situation"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-7"
                  checked={selectedOptionSituation === 'option7'}
                  onChange={handleOptionSituationChange}
                />
                <label htmlFor="hs-radio-vertical-group-7" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Célibataire</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-situation"
                  value="option8"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-8"
                  checked={selectedOptionSituation === 'option8'}
                  onChange={handleOptionSituationChange}
                />
                <label htmlFor="hs-radio-vertical-group-8" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Marié(e)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-situation"
                  value="option9"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-9"
                  checked={selectedOptionSituation === 'option9'}
                  onChange={handleOptionSituationChange}
                />
                <label htmlFor="hs-radio-vertical-group-9" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Veuf(ve)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-vertical-group-situation"
                  value="option10"
                  className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-vertical-group-10"
                  checked={selectedOptionSituation === 'option10'}
                  onChange={handleOptionSituationChange}
                />
                <label htmlFor="hs-radio-vertical-group-10" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Divorcé(e)</label>

              </div>
            </div>
          </div>

          <div className='flex gap-24'>

            <div className="flex mt-4 gap-2">
              <p className='text-lg font-semibold' htmlFor="">Nombre d'enfants :</p>
              <div>
                {nbreEnfant.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                    onChange={(e) => handleNbreEnfantChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <div className="flex mt-4 gap-2">
              <p className='text-lg font-semibold' htmlFor="">Poids :</p>
              <div>
                {poids.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-6 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                    onChange={(e) => handlePoidsChange(index, e.target.value)}
                  />
                ))} <span className='text-sm font-semibold ml-1'>Kg</span>
              </div>
            </div>
            <div className="flex mt-4 gap-2">
              <p className='text-lg font-semibold' htmlFor="">Poids :</p>
              <div>
                {taille.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-7 border-0 border-b-2 border-l-2 border-r-2 h-6 text-center border-gray-600 focus:outline-none focus:border-blue-500"
                    onChange={(e) => handleTailleChange(index, e.target.value)}
                  />
                ))} <span className='text-base font-semibold ml-1'>m</span>
              </div>
            </div>

          </div>
        </div>

        <h2 className='ml-5 absolute mt-[190px] text-base font-bold transform -rotate-90 origin-left'>FICHE SIGNALETIQUE</h2>
        <div className='border-2 border-gray-500 w-full max-w-[] p-3 px-14 mt-4'>
          <div className='flex'>
            <div className='flex gap-x-2 mt-4'>
              <p className='text-lg font-semibold' htmlFor="">Type de souscription :</p>
              <div className='flex gap-x-5'>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="option12"
                    name="hs-radio-vertical-group-souscription"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-12"
                    checked={selectedOptionSouscription === 'option12'}
                    onChange={handleOptionSouscriptionChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-12" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Individuel</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group-souscription"
                    value="option13"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-13"
                    checked={selectedOptionSouscription === 'option13'}
                    onChange={handleOptionSouscriptionChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-13" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Famille</label>
                </div>
              </div>
            </div>
            <div className='flex gap-x-3 mt-4 ml-7'>
              <p className='text-lg font-semibold' htmlFor="">Choix du pack Ael santé :</p>
              <div className='flex gap-x-6'>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="option14"
                    name="hs-radio-vertical-group-choix"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-14"
                    checked={selectedOptionChoix === 'option14'}
                    onChange={handleOptionChoixChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-14" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Gabri-el</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group-choix"
                    value="option15"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-15"
                    checked={selectedOptionChoix === 'option15'}
                    onChange={handleOptionChoixChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-15" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Uri-el</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group-choix"
                    value="option16"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-16"
                    checked={selectedOptionChoix === 'option16'}
                    onChange={handleOptionChoixChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-16" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Raph-el</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group-choix"
                    value="option17"
                    className="border border-gray-200 rounded-none text-blue-600 h-5 w-5 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-17"
                    checked={selectedOptionChoix === 'option17'}
                    onChange={handleOptionChoixChange}
                  />
                  <label htmlFor="hs-radio-vertical-group-17" className="text-base font-semibold text-gray-700 ms-2 dark:text-gray-400">Mich-el</label>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <table className="table-auto border-collapse  border-gray-600">
              <thead>
                <tr>
                  <th className="border border-gray-500 p-2">Bénéficiaires</th>
                  <th className="border border-gray-500 p-2 w-40">Nom</th>
                  <th className="border border-gray-500 p-2 w-[386px]">Prénoms</th>
                  <th className="border border-gray-500 p-2 w-32">Date naissance</th>
                  <th className="border border-gray-500 p-2 w-[234px]">Profession</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>


        <h2 className='ml-5 absolute mt-[190px] text-base font-bold transform -rotate-90 origin-left'>FICHE MEDICALE</h2>
        <div className='border-2 border-gray-500 w-full max-w-[] p-3 px-14 mt-4 '>
          <div className='flex gap-x-4 justify-end ' >
            <p className='text-base font-semibold text-gray-700  dark:text-gray-800'>OUI</p>
            <p className='text-base font-semibold text-gray-700  dark:text-gray-800'>NON</p>
          </div>
          {renderRadioGroups()}
          <div>
            <label className='text-base font-semibold' htmlFor="firsname">à préciser : </label>
            <input
              type="text"
              value={firstname}
              className='w-[92%] pl-2 text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black focus-border-blue-600 peer'
              id='firsname'
              onChange={(event) => setFirsname(event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-1 w-96 my-5 rounded-sm text-gray-300 mt-3 px-4  text-lg font-semibold  border border-transparent bg-gray-600  hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Valider les Infos
        </button>
      </form>
    </div >
  );
};

export default App;