import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {
    Avatar,
    Button,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRoot,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Flex
} from "@radix-ui/themes"

export default function AvatarMenu() {
    const {data: session} = useSession()
    const router = useRouter()

    return (
        <Flex gap={"3"}>
            <DropdownMenuRoot>
                <DropdownMenuTrigger onClick={() => {
                    alert("dd")
                }}>
                    {
                        session.user?.image
                            ? (<Avatar src={session.user.image} radius="full"/>)
                            : (<Button variant={"ghost"}>Профиль</Button>)
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"center"}>
                    <DropdownMenuItem onClick={() => router.push("/profile")}>Профиль</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/profile/setting")}>Настройки</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem color={"red"} onClick={() => {
                        signOut()
                    }}>Выйти</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuRoot>
        </Flex>
    )
}
