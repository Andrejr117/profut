"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { signOut, singOut, useSession } from "next-auth/react";
import logo from '../../public/logo.jpeg'

export default function Header(){

    const { status, data: session } = useSession();

    if (status !== "authenticated"){
        return null;
    }



    return(
        <div className="flex gap-3 justify-center p-2 flex-wrap text-xl text-black  bg-gradient-to-r from-green-500">
            <img class="h-9 w-auto " src="logo.jpeg" alt="" />
            <Link href="/">Home</Link>
            <Link href="/perfil">Perfil</Link>
            <Link href="/times">Times</Link>
            <span className="bg-zinc-300 text-black rounded-sm px-2">{`Olá ${
                session?.user?.nome ? session.user.nome[0] : ""}`}
            </span>
            <Button
                text="Sair"
                className="bg-red-600 text-black rounded px-2 cursor-pointer" 
                onClick={()=>signOut()}/>
        </div>
    );
}