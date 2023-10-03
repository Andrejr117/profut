import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export async function POST(req) {
    try {
        console.log("Recebendo solicitação de registro..."); // Adicione esta linha
        const { nome, email, senha, nacionalidade, posição } = await req.json();
        await connect();

        const emailExist = await User.findOne({ email });

        if (emailExist) {
            console.log("E-mail já cadastrado!"); // Adicione esta linha
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
            posição,
        });

        await newUser.save();

        console.log("Usuário criado com sucesso!"); // Adicione esta linha

        return NextResponse.json({
            message: "Usuário criado com sucesso !",
            status: 201,
        });

    } catch (error) {
        console.error("Erro durante o registro:", error); // Adicione esta linha
        return NextResponse.json({
            error: "Erro ao cadastrar usuário",
            status: 500,
        });
    }
}
