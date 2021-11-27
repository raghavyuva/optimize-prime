import { HiDatabase, HiGlobeAlt, HiMail, HiOutlineClock, HiTrendingUp, HiUserCircle } from "react-icons/hi";
import { AiOutlineFileZip } from 'react-icons/ai'
export const SideBarContents = [
    {
        label: "users",
        Icon: HiUserCircle,
        to: "/dashboard",
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
        to: "/widgets",
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
        to: "/dashboard",
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
        to: "/dashboard",
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
        to: "/dashboard",

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
        to: "/dashboard",

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
        to: "/dashboard",
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