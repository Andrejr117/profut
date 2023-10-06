"use client"
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";


export default function Times(){
    return 
    <LayoutAdmin>
        <main className="min-h-screen flex justify-center pt-6">
        function ShuffleAndDistribute() {
  const [input, setInputText] = useState('');
  const [names, setNames] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addName = () => {
    if (inputText.trim() !== '') {
      setNames([...names, inputText]);
      setInputText('');
    }
  };

  const shuffleAndDistribute = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    const middleIndex = Math.ceil(shuffledNames.length / 2);
    const team1Names = shuffledNames.slice(0, middleIndex);
    const team2Names = shuffledNames.slice(middleIndex);

    setTeam1(team1Names);
    setTeam2(team2Names);
  };

  return (
    <div>
      <h1>Sorteio e Distribuição de Times</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Digite um nome"
        />
        <button onClick={addName}>Adicionar</button>
      </div>
      <div>
        <button onClick={shuffleAndDistribute}>Sortear e Distribuir</button>
      </div>
      <div>
        <h2>Time 1:</h2>
        <ul>
          {team1.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Time 2:</h2>
        <ul>
          {team2.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


        </main>;
    </LayoutAdmin>
}


export default ShuffleAndDistribute;