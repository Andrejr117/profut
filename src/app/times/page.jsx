"use client";
import React, { useState } from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import styles from "./Times.module.css";
import Input from "@/components/Input";
import { Formik, Field, Form } from "formik";
import next from "next";
import Image from "next/image";
import gol from '../../../public/imggol.jpg';


export default function Times() {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [numTeams, setNumTeams] = useState(2);
  const [playersPerTeam, setPlayersPerTeam] = useState(5);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addName = (values) => {
    if (values.fieldName.trim() !== "") {
      setNames([...names, values.fieldName]);
      values.fieldName = "";
    }
  };

  const removeName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  const handleNumTeamsChange = (e) => {
    setNumTeams(parseInt(e.target.value, 10));
  };

  const handlePlayersPerTeamChange = (e) => {
    setPlayersPerTeam(parseInt(e.target.value, 10));
  };

  const shuffleAndDistribute = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    const teamSize = Math.ceil(shuffledNames.length / numTeams);

    const newTeams = Array.from({ length: numTeams }, (_, i) => {
      const startIndex = i * teamSize;
      const endIndex = startIndex + teamSize;
      return shuffledNames.slice(startIndex, endIndex);
    });

    setTeams(newTeams);
  };

  return (
    <LayoutAdmin>
      <Formik initialValues={{ fieldName: "" }} onSubmit={addName} >
        {({ values }) => (
          <main className={styles.container} style={{ backgroundImage: `url(/imggol.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1 className={styles.title}>Sorteio e Distribuição de Times</h1>
            <Form>
              <div className={styles.contentContainer}>
                <div className={styles.inputSection}>
                  <div className={styles.inputContainer}>
                    <Field name="fieldName">
                      {({ field }) => (
                        <Input
                          className={styles.myInput}
                          type="text"
                          {...field}
                          placeholder="Digite um nome"
                          />
                          )}
                    </Field>
                    <button className={styles.addButton} type="button" onClick={() => addName(values)}>
                      Adicionar
                    </button>
                  </div>
                  <div className={styles.namesListContainer}>
                    <h2>Nomes Adicionados:</h2>
                    <ul>
                      {names.map((name, index) => (
                        <li key={index}>
                          {name}
                          <button className={styles.removeButton} type="button" onClick={() => removeName(index)}>
                            X
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.configContainer}>
                    <label>
                      Número de Times:
                      <input
                        type="number"
                        value={numTeams}
                        onChange={handleNumTeamsChange}
                        min="2"
                      />
                    </label>
                    <label>
                      Jogadores por Time:
                      <input
                        type="number"
                        value={playersPerTeam}
                        onChange={handlePlayersPerTeamChange}
                        min="1"
                      />
                    </label>
                    <button
                      className={styles.shuffleButton}
                      type="button"
                      onClick={shuffleAndDistribute}
                    >
                      Sortear e Distribuir
                    </button>
                  </div>
                </div>
                <div className={styles.teamsSection}>
                  <div className={styles.teamContainer}>
                    {teams.map((team, index) => (
                      <div key={index} className={styles.team}>
                        <h2>Time {index + 1}:</h2>
                        <ul>
                          {team.map((name, innerIndex) => (
                            <li key={innerIndex}>{name}</li>
                            ))}
                        </ul>
                      </div>
                  ))}
                  </div>
                </div>
              </div>
            </Form>
          </main>)}
      </Formik>
    </LayoutAdmin>
  );
}
