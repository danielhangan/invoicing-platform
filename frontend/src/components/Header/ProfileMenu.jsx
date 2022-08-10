import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
    Link
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

export const ProfileMenu = () => {
    const router = useRouter()

    return (
        <Menu>
            <MenuButton as={Button} size="sm" rounded="md">
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem onClick={() => router.push("/user/profile")}>My Account</MenuItem>
                    <MenuItem onClick={() => router.push("/dashboard")}>Dashboard</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                <MenuItem onClick={() => signOut()}>
                    Logout
                </MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
