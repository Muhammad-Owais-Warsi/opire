import { Badge } from "@mantine/core"

interface OpireSKillTypes  {
    index:number;
    badge:string;
}

export default function OpireSkill({index,badge} : OpireSKillTypes) {
    return (
        <>
            <Badge
                key={index}
                color="teal"
                variant="filled"
                style={{ backgroundColor: 'rgba(0, 128, 128, 0.2)', color: 'teal' }}
            >
                {badge}
            </Badge>
        </>
    )
}