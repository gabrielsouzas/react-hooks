import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './services/api';
import initialData from './helpers/initialData';

function App() {
  // Uso do useState do Hooks (Dica: Use sempre o Hooks no inicio do código, nunca no meio)
  /* city: variavel, setCity: função de set da variavel
  Explicando: O useState vai armazenar a variavel city através do método setCity */
  const [city, setCity] = useState('');

  // useState para armazenar o retorno da API
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    // O THEN vai esperar a execução da função
    // abaixo que vem de services/api por causa da promise da API
    // Depois ele executa uma função anonima pasando a resposta da API e setando no useState data
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify center p-4">

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />

    </div>
  );
}

export default App;
