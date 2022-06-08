import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const ProfileMenu = () => {
    const router = useRouter()

    return (
        <Menu>
            <MenuButton as={Button} size="sm" rounded="md">
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                <MenuItem onClick={() => router.push("/user")}>My Account</MenuItem>
                <MenuItem>Dashboard</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
