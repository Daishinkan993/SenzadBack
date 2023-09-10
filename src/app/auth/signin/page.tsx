import {Button, Flex, Text, TextFieldInput, TextFieldRoot, TextFieldSlot} from "@radix-ui/themes";

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Link from "next/link";
import GoogleButton from "@/components/auth/google-button";

export default function SignIn() {
    return (
        <form>
            <Flex style={{maxWidth: 360}} justify="center" mx="auto" direction="column" gap="3">
                <TextFieldRoot>
                    <TextFieldSlot>
                        <EmailIcon/>
                    </TextFieldSlot>
                    <TextFieldInput placeholder="Электронный адрес"/>
                </TextFieldRoot>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <PasswordIcon/>
                    </TextFieldSlot>
                    <TextFieldInput placeholder="Пароль"/>
                </TextFieldRoot>
                <Flex gap="4" align={"center"} justify="between">
                    <Link href="/auth">
                        <Text color={"blue"}>Полная страница</Text>
                    </Link>
                    <Button>Вход</Button>
                </Flex>
                <GoogleButton/>
            </Flex>
        </form>
    )
}