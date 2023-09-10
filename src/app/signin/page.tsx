"use client"

import {signIn, useSession} from "next-auth/react";
import {useState} from "react";
import {
    Blockquote,
    Button,
    Flex,
    Link,
    Separator,
    Strong,
    Text,
    TextFieldInput,
    TextFieldRoot,
    TextFieldSlot,
    Tooltip,
} from "@radix-ui/themes";
import GoogleButton from "react-google-button";
import {useRouter} from "next/navigation";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {
    const {data: session} = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordShow, setPasswordShow] = useState(false)

    const handleSignIn = () => {
        if (email != "" && password != "") {
            signIn("credentials", {
                email, password, redirect: false
            })
            return
        }

    };

    if (session) {
        const router = useRouter();
        router.push("/profile");
        return (
            <>
                Вы уже авторизованы{" "}
                <Link href="/profile">
                    <Text color="blue">профиль</Text>
                </Link>
            </>
        );
    }

    return (
        <Flex style={{width: 360}} direction={"column"} justify={"center"} align={"stretch"} gap={"3"}>
            <Blockquote my={"4"}>
                <Strong>В случае отсутствия аккаунта он будет создан</Strong>
            </Blockquote>
            <TextFieldRoot>
                <TextFieldSlot>
                    <PersonIcon/>
                </TextFieldSlot>
                <TextFieldInput
                    size={"3"}
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                />
            </TextFieldRoot>
            <TextFieldRoot>
                <TextFieldSlot>
                    <PasswordIcon/>
                </TextFieldSlot>
                <TextFieldInput
                    size={"3"}
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                />
                <TextFieldSlot>
                    <Tooltip
                        multiline
                        content="Показать/Скрыть пароль">
                        <Button size={"2"} variant={"ghost"} onClick={() => setPasswordShow(!passwordShow)}>
                            {passwordShow ? (
                                <VisibilityOffIcon/>
                            ) : (
                                <RemoveRedEyeIcon/>
                            )}
                        </Button>
                    </Tooltip>
                </TextFieldSlot>
            </TextFieldRoot>
            <Text>Забыли пароль? <Link href={"/restore"} color={"blue"} underline={"hover"}>Восстановить</Link></Text>
            <Button size={"3"} onClick={() => handleSignIn()}>Войти</Button>

            <Flex width={"100%"} direction={"row"} justify={"center"} align={"center"} gap={"2"}>
                <Separator orientation="horizontal" size="4"/>
                <Text>или</Text>
                <Separator orientation="horizontal" size="4"/>
            </Flex>

            <GoogleButton style={{width: 260}}
                          onClick={() => signIn("google", {callbackUrl: "http://localhost:3000/api/auth/callback/google"})}/>
        </Flex>
    );
}
