"use client";
import React, { useState } from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import styles from "./Times.module.css";
import Input from "@/components/Input";
import { Formik, Field, Form } from "formik";

export default function Times() {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

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

  const shuffleAndDistribute = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    const middleIndex = Math.ceil(shuffledNames.length / 2);
    const team1Names = shuffledNames.slice(0, middleIndex);
    const team2Names = shuffledNames.slice(middleIndex);

    setTeam1(team1Names);
    setTeam2(team2Names);
  };

  return (
    <LayoutAdmin>
      <Formik
        initialValues={{ fieldName: "" }}
        onSubmit={addName}
      >
        {({ values }) => (
          <main className="min-h-screen flex justify-center pt-6">
            <div className={styles.container}>
              <h1 className={styles.title}>Sorteio e Distribuição de Times</h1>
              <Form>
                <div className={styles.shuffleContainer}>
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
                    <button className={styles.addButton} type="submit">
                      Adicionar
                    </button>
                  </div>
                   {/* Nova seção para mostrar nomes antes do sorteio */}
                  <div className={styles.namesListContainer}>
                    <h2>Nomes Adicionados:</h2>
                    <ul>
                      {names.map((name, index) => (
                        <li key={index}>
                          {name}
                          <button className={styles.removeButton} type="submit"
                          onClick={() => removeName(index)}
                          >  X </button>
                          </li>
                      ))}
                    </ul>
                  </div>
                    {/* Fim da nova seção */}
                  <div className={styles.shuffleButtonContainer}>
                    <button
                      className={styles.shuffleButton}
                      type="button"
                      onClick={shuffleAndDistribute}
                    >
                      Sortear e Distribuir
                    </button>
                  </div>
                  <div className={styles.teamContainer}>
                    <div className={styles.team}>
                      <h2>Time 1:</h2>
                      <ul>
                        {team1.map((name, index) => (
                          <li key={index}>{name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.team}>
                      <h2>Time 2:</h2>
                      <ul>
                        {team2.map((name, index) => (
                          <li key={index}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </main>
        )}
      </Formik>
    </LayoutAdmin>
  );
}

