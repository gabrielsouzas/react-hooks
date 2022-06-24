import React from 'react';
// Usado para definir o tipo de dado, ou seja, validar uma variavel passada, por exemplo
// se o método aguardar uma String, o propType deve verificar se foi realmente passada uma String
import propTypes from 'prop-types';

function Card({ data }) {
  // Usa o destruction para tirar os objetos do obj data
  const {
    location,
    current,
  } = data;

  return (
    // Os dados são passados pelas chaves, assim é possivel passar objetos para o código
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center">
        <span className="block text-lg font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
      </div>

      <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2">
        <span className="text-7xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">ºC</span>
      </div>

      <div className="flex justify center flex-col items-center">
        <img src={current.condition.icon} alt="wheater icon" />
        <span className="text-slate-700 font-medium">{current.condition.text}</span>
      </div>
    </div>

  );
}

export default Card;

// Aqui é definido o tipo de dado que a função Card deve aguardar usando o propTypes
Card.propTypes = {
  data: propTypes.object,
}.isRequired;
