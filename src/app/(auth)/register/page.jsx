"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from './styles.module.css';
import Link from "next/link";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import next from "next";
import campodecima from '../../../../public/campodecima.png'



export default function Register() {
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated"){
      router.push("/");
    }
  }, [status, router]);

  if (status !== "unauthenticated"){
    return null;
  }

  const initialValues = {
    nome: "",
    email: "",
    senha: "",
    nacionalidade: "",
    posição: "",
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo nome é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O campo e-mail é obrigatório"),
    senha: Yup.string().required("O campo senha é obrigatório"),
    nacionalidade: Yup.string().required("O campo nacionalidade é obrigatório"),
    posição: Yup.string().required("O campo posição é obrigatório"),
  });

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      console.log("Submetendo formulário..."); // Adicione esta linha
  
      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: values.nome,
          email: values.email,
          senha: values.senha,
          nacionalidade: values.nacionalidade,
          posição: values.posição,
        }),
      }).then(async (res) => {
        console.log("Resposta do servidor recebida..."); // Adicione esta linha
        const result = await res.json();
  
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
      console.error("Erro ao submeter formulário:", error); // Adicione esta linha
      setFormSubmitting(false);
      renderError("Erro ao criar conta, tente novamente mais tarde!");
    }
  }
  

  function renderError(msg) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="relative z-10 text-4xl text-green-500 mb-8">Registro</h1>
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="campodecima.png" alt="" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
      {({ values }) => (
        <Form noValidate className="flex flex-col gap-2 p-4 border rounded-lg border-zinc-300 min-w-[300px] bg-white backdrop-blur-md bg-opacity-80">
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
              name="posição"
              type="text"
              placeholder="Posição"
              required
            />
            <Button
              type="submit"
              text={isFormSubmitting ? "Carregando ..." : "Inscrever-se"}
              disable={isFormSubmitting}
              className="bg-green-500 text-white rounded p-2 cursor-pointer"
            />
            {!values.nome && !values.email && !values.senha && !values.nacionalidade && !values.posição && error && (
              <span className="text-red-500 text-sm text-center">{error}</span>    
            )}
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