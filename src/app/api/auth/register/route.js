import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export async function POST(req) {
    try {
        const { nome, email, senha, nacionalidade, altura, posição } = await req.json();
        await connect();

        const emailExist = await User.findOne({ email });

        if (emailExist) {
            return NextResponse.json({
                message: "E-mail já cadastrado !",
                status: 409,
            });
        }

        const hashedPassword = await bcrypt.hash(senha, 5);

        const newUser = new User({
            nome,
            email,
            senha: hashedPassword,
            nacionalidade,
            altura,
            posição,
        });

        await newUser.save();

        return NextResponse.json({
            message: "Usuário criado com sucesso !",
            status: 201,
        });

    } catch (error) {
        return NextResponse.json({
            error: "Erro ao cadastrar usuário",
            status: 500,
        });

    }
}

