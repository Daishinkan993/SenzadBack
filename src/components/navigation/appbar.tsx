"use client"

import {Button, Flex, Heading} from "@radix-ui/themes";

import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Link from "next/link";

export default function AppBar() {
    const {data: session} = useSession()
    const router = useRouter()

    return (
        <Flex style={{borderBottom: "1px solid #ccc", height: 48, width: 1024}} mx={"auto"} justify={"between"}
              align={"center"}>
            <Flex gap={"4"} align={"center"}>
                <Heading size={"4"}>
                    <Link href={"/"}>Senzad</Link>
                </Heading>
                <Flex gap={"4"}>
                    <Button variant={"ghost"}>
                        <Link href={"/posts/new"}>Свеженькое</Link>
                    </Button>
                    <Button variant={"ghost"}>
                        <Link href={"/users/best"}>Авторы</Link>
                    </Button>
                    <Button variant={"ghost"}>
                        <Link href={"/chat"}>Флудилка</Link>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}