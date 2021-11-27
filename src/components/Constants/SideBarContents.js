import { HiDatabase, HiGlobeAlt, HiMail, HiOutlineClock, HiTrendingUp, HiUserCircle } from "react-icons/hi";
import { AiOutlineFileZip } from 'react-icons/ai'
export const SideBarContents = [
    {
        label: "users",
        Icon: HiUserCircle,
        to: "/users",
        sub: {
            label: "users",
            menu: [
                {
                    label: "users",
                    badgeCount: 2
                },
                {
                    label: "Suspended",
                    badgeCount: 0
                },
            ]
        }
    },
    {
        label: "Stats",
        Icon: HiTrendingUp,
        to: "/stats",
        sub: {
            label: "DOMAINS",
            menu: [
                {
                    label: "DOMAINS",
                    badgeCount: 2
                },
                {
                    label: "Aliases",
                    badgeCount: 0
                },
            ]
        }
    },
    {
        label: "WEB",
        Icon: HiGlobeAlt,
        to: "/domains",
        sub: {
            label: "DOMAINS",

            menu: [
                {
                    label: "DOMAINS",
                    badgeCount: 2
                },
                {
                    label: "Aliases",
                    badgeCount: 0
                },
            ]
        }
    }, {
        label: "Mail",
        Icon: HiMail,
        to: "/mail",
        sub: {
            label: "Mail",
            menu: [
                {
                    label: "DOMAINS",
                    badgeCount: 2
                },
                {
                    label: "ACCOUNTS",
                    badgeCount: 0
                },
            ]
        }
    }, {
        label: "DB",
        Icon: HiDatabase,
        to: "/database",

        sub: {
            label: "DB",
            menu: [
                {
                    label: "DATABASES",
                    badgeCount: 2
                },
            ]
        }
    }, {
        label: "Cron",
        Icon: HiOutlineClock,
        to: "/cron",

        sub: {
            label: "Cron",
            menu: [
                {
                    label: "jobs",
                    badgeCount: 2
                },
                {
                    label: "Suspended",
                    badgeCount: 0
                },
            ]
        }
    },
    {
        label: "Backups",
        to: "/backups",
        Icon: AiOutlineFileZip,
        sub: {
            label: "Backups",
            menu: [
                {
                    label: "backups",
                    badgeCount: 2
                },
            ]
        }
    }
]