import { Avatar, Text } from "@mantine/core"

interface OpireUserTypes {
    avatar: string;
    name: string;
    title: string;

}

export default function OpireUser({ avatar, name, title }: OpireUserTypes) {
    return (
        <>
            <Avatar src={avatar} />
            <div>
                <Text size="lg" style={{ weight: "600" }} color="white">
                    {name}
                </Text>
                <Text size="xs" color="dimmed">
                    {title}
                </Text>
            </div>
        </>
    )
}