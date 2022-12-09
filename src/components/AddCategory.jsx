import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {

  const [inputValue, setInputValue] = useState([]);


  const onInputChange = (event) => {
   //  seteo el estado
    setInputValue(event.target.value);
  };

  const onSubmit = (submit) => {
   //  previene el submit por defecto del formulario
   submit.preventDefault();
   // no deja añadir un nombre que ya exista para no repetirlo.
   if (categories.includes(inputValue) ) return
    //  paso el estado(inputvalue) como parametro
    setCategories(categories => [inputValue, ...categories])   
    setInputValue('') // limpia el input despues de enviar
  };

  return (
    <form onSubmit={onSubmit}>
      {/* onSubmit={(e) => onSubmit(e)} */}
      <input
        //  properties
        type="text"
        placeholder="busca gifs"
        value={inputValue}
        onChange={onInputChange} // envío la referencia
        // onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};


