import { Text } from "@mantine/core"


interface OpireStatTypes  {
    issues:number;
    earned:number;
    won:number;

}


export default function OpireStats({issues,earned,won}:OpireStatTypes) {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Text size="xl" style={{weight:"700"}} color="white">
                    {issues}
                </Text>
                <Text size="xs" color="rgba(255, 255, 255, 0.6)">
                    Issues Resolved
                </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Text size="xl" style={{weight:"700"}} color="white">
                    ${earned}
                </Text>
                <Text size="xs" color="rgba(255, 255, 255, 0.6)">
                    Bounties Earned
                </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Text size="xl" style={{weight:"700"}} color="white">
                    {won}
                </Text>
                <Text size="xs" color="rgba(255, 255, 255, 0.6)">
                    Challenges Won
                </Text>
            </div>
        </>
    )
}