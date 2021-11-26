import { HiDatabase, HiGlobeAlt, HiMail, HiOutlineClock, HiUserCircle } from "react-icons/hi";
import { AiOutlineFileZip } from 'react-icons/ai'
export const SideBarContents = [
    {
        label: "users",
        Icon: HiUserCircle,
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
        label: "WEB",
        Icon: HiGlobeAlt,
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