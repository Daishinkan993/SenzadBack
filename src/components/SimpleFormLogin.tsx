import {
    Button,
    DialogContent,
    DialogDescription,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    Flex,
    Inset,
    Text,
    TextFieldInput,
    TextFieldRoot,
    TextFieldSlot
} from "@radix-ui/themes";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Link from "next/link";

export default function SimpleFormLogin() {
    return (
        <DialogRoot>
            <DialogTrigger>
                <Button>Вход</Button>
            </DialogTrigger>
            <DialogContent style={{maxWidth: 450}}>
                <DialogTitle>Вход</DialogTitle>
                <DialogDescription>Быстрая форма входа</DialogDescription>
                <Inset mx="5" mt="4" side="x">
                    <form>
                        <Flex justify="center" mx="auto" direction="column" gap="3">
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
                        </Flex>
                    </form>
                </Inset>
            </DialogContent>
        </DialogRoot>
    )
}