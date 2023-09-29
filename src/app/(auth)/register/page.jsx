"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { Form, Formik } from "formik";
import React from 'react'
import * as Yup from "yup";


export default function Register() {
  const initialValues = {
    nome: "",
    email: "",
    senha: "",
    nacionalidade: "",
    altura: "",
    posição: "",
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo nome é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O campo e-mail é obrigatório"),
    senha: Yup.string().required("O campo senha é obrigatório"),
    nacionalidade: Yup.string().required("O campo nacionalidade é obrigatório"),
    altura: Yup.number().required("O campo altura é obrigatório"),
    posição: Yup.string().required("O campo posição é obrigatório"),
  });

  async function handleSubmit(values) {
    console.log(values);
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form 
          noValidate 
          className="flex flex-col gap-2 p-4 border rounded border-zinc-300 min-w-[300px] bg-white">
            <Input
              name="nome"
              type="text"
              placeholder="Nome"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              required
            />
            <Input
              name="senha"
              type="password"
              placeholder="Senha"
              required
              autoComplete="off"
            />
            <Input
              name="nacionalidade"
              type="text"
              placeholder="Nacionalidade"
              required
            />
            <Input
              name="altura"
              type="number"
              placeholder="Altura"
              required
            />
            <Input
              name="posição"
              type="text"
              placeholder="Posição"
              required
            />
            <Button
              type="submit"
              text="Criar conta"
              className="bg-green-500 text-white rounded p-2 cursor-pointer"
            />
            <span className="text-xs text-zinc-500">
              Já possui uma conta? 
              <strong className="text-zinc-700">
                <Link href="/login"> Clique aqui para logar</Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  )
}
