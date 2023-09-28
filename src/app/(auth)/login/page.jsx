"use client";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Link from "next/link";
import { Form, Formik } from "formik";
import React from 'react'
import * as Yup from "yup";

// Importando css
import styles from './styles.module.css';


export default function Login() {

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: 
      Yup
      .string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password:
      Yup
      .string()
      .required("O campo senha é obrigatório"),
  });

  async function handleSubmit() {

  }
  // criação de texto linha 38
  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <h1 className={styles.textForm}> Profut </h1> 
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form noValidate className="flex flex-col gap-2 p-4 border rounded border-zinc-300 min-w-[300px] bg-white">
            <Input
              name="Email"
              type="email"
              required />
            <Input
              name="Senha"
              type="password"
              required
              autoComplete="off"
            />
            <Button
              type="submit"
              text="Entrar"
              className="bg-green-500 text-white rounded p-2 cursor-pointer"
              />
            <span className="text-xs text-zinc-500">
              Não possui uma conta ? 
              <strong className="text-zinc-700">
                <Link href="/register"> Clique aqui e marque um golaço !!!</Link>
              </strong>
            </span>
          </Form>
          )}
      </Formik>

    </main>
  )
}