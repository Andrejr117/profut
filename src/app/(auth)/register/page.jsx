"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from './styles.module.css';
import Link from "next/link";
import { Form, Formik } from "formik";
import React, { useState } from 'react'
import * as Yup from "yup";
import { useRouter } from "next/navigation";


export default function Register() {
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);

  const router = useRouter();
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

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.Stringify({
          nome: values.nome,
          email: values.email,
          senha: values.senha,
          nacionalidade: values.nacionalidade,
          altura: values.altura,
          posição: values.posição,
        }),
      }).then(async (res) => {
        const result = await res.json()

        if (result.status === 201) {
          alert(result.message);
          router.push("/login");
        } else {
          renderError(result.message);
          resetForm();
        }

        setFormSubmitting(false);
      });
    } catch (error) {
      setFormSubmitting(false);
      renderError("Erro ao criar conta, tente novamente mais tarde !");

    }
  }

  function renderError(msg) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <h1 className={styles.textForm}>Crie sua conta e fique pronto para marcar</h1>

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
