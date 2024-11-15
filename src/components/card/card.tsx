import { Card, Group, Divider, Text, ActionIcon, Badge } from '@mantine/core';
import { BrandGithub, BrandTwitter } from 'tabler-icons-react';
import OpireUser from '../User/user';
import OpireStats from '../stats/stat';
import OpireSkill from '../skills/skill';
import avatar from "../../../public/avatar.png";
import opire_logo from "../../../public/opire_logo.svg";

const user = {
    name: 'Jane Doe',
    avatar: avatar,
    title: 'Full Stack Developer',
    issuesResolved: 250,
    moneyEarned: 3500,
    challengesWon: 15,
    badges: ['React', 'Tailwind', 'Docker'],
    contributorStatus: 'Top Contributor',
};

export default function OpireCard() {
    const handleMouseMove = (e: { currentTarget: any; clientX: number; clientY: number; }) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        card.style.transform = `perspective(1500px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
    };

    const handleMouseLeave = (e: { currentTarget: any; }) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <Card
            radius="md"
            padding="lg"
            withBorder
            style={{
                background: 'linear-gradient(135deg, rgba(36, 36, 36, 0.85), rgba(58, 58, 58, 0.85))',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                maxWidth: 320,
                minHeight: 350,
                margin: '0 auto',
                transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, background 0.3s ease-in-out',
                transformStyle: 'preserve-3d',
                position: 'relative',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            styles={{
                root: {
                    '&:hover': {
                        boxShadow: '0 8px 24px rgb(32, 57, 61)',
                        background: 'linear-gradient(135deg, rgba(58, 58, 58, 0.9), rgba(36, 36, 36, 0.9))',
                    },
                },
            }}
        >
            <Group align="center" mb="md" >
                <OpireUser avatar={user.avatar} name={user.name} title={user.title} />
                <Group style={{ position: 'relative', left: '20px' }}>
                    <ActionIcon variant="transparent">
                        <a href='https://github.com/Muhammad-Owais-Warsi'>
                            <BrandGithub size={16} color="white" />
                        </a>
                    </ActionIcon>
                    <ActionIcon variant="transparent">
                        <a href='https://x.com/MO_warsi786'>
                            <BrandTwitter size={16} color="white" />
                        </a>
                    </ActionIcon>
                </Group>
            </Group>


            <Badge
                color="teal"
                style={{
                    marginTop: -10,
                    fontSize: '14px',
                    backgroundColor: '#00bfae',  // Neon teal background
                    color: '#000',                // Dark text color for contrast
                    boxShadow: '0 0 10px 2px #00bfae',  // Neon glow effect
                }}
            >
                {user.contributorStatus}
            </Badge>



            <Divider my="sm" color="rgba(255, 255, 255, 0.2)" />

            <Group style={{ marginTop: '8px', marginBottom: '16px' }}>
                <OpireStats
                    issues={user.issuesResolved}
                    earned={user.moneyEarned}
                    won={user.challengesWon}
                />
            </Group>

            <Group style={{ spacing: "xs" }} mt="md">
                {user.badges.map((badge, index) => (
                    <OpireSkill key={index} index={index} badge={badge} />
                ))}
            </Group>

            <Text
                size="sm"
                style={{
                    position: 'absolute',
                    bottom: '20px', // Adjusted position for better alignment
                    right: '10px',
                    opacity: 0.5,
                    fontWeight: 200,
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                color="white"
            >
                <img
                    src={opire_logo}
                    alt="Opire Logo"
                    style={{
                        height: "10px",
                        width: "10px",
                        marginLeft: "5px",
                        marginRight: "3px",
                    }}
                />
                Powered by Opire
            </Text>
        </Card>
    );
}
