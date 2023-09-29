"use client";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Link from "next/link";
import { Form, Formik } from "formik";
import React from 'react'
import * as Yup from "yup";


export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    nationality: "",
    height: "",
    position: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O campo nome é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),
    nationality: Yup.string().required("O campo nacionalidade é obrigatório"),
    height: Yup.number().required("O campo altura é obrigatório"),
    position: Yup.string().required("O campo posição é obrigatório"),
  });

  async function handleSubmit(values) {
    // Implemente a lógica de envio do formulário aqui
    // Os valores dos campos estarão disponíveis em "values"
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
          <Form noValidate className="flex flex-col gap-2 p-4 border rounded border-zinc-300 min-w-[300px] bg-white">
            <Input
              name="Nome"
              type="text"
              placeholder="Nome"
              required
            />
            <Input
              name="Email"
              type="email"
              placeholder="E-mail"
              required
            />
            <Input
              name="Senha"
              type="password"
              placeholder="Senha"
              required
              autoComplete="off"
            />
            <Input
              name="Nacionalidade"
              type="text"
              placeholder="Nacionalidade"
              required
            />
            <Input
              name="Altura"
              type="number"
              placeholder="Altura"
              required
            />
            <Input
              name="Posição"
              type="text"
              placeholder="Posição"
              required
            />
            <Button
              type="submit"
              text="Entrar"
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
