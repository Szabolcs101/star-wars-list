'use client';
import { Menu } from '@base-ui/react/menu';
import styles from './login-menu.module.css';
import { SvgUserSolid } from '../../icons/fontawesome';
import { LoginDialog } from './_components/dialog/login-dialog';
import { useState } from 'react';
import { useAuth } from '@/app/context/auth-context';
import { RegistrationDialog } from './_components/dialog/registration-dialog';

export default function LoginMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [regOpen, setRegOpen] = useState(false);

    const { user, logout } = useAuth();

    const switchToReg = () => { setLoginOpen(false); setRegOpen(true); };
    const switchToLogin = () => { setRegOpen(false); setLoginOpen(true); };

    const isLoggedIn = !!user;

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
    }

    return (
        <>
            <Menu.Root open={menuOpen} onOpenChange={setMenuOpen}>

                <Menu.Trigger
                    render={
                        <button className={styles.trigger} aria-label="User menu">
                            <SvgUserSolid className={styles.icon} />
                        </button>
                    }
                />

                <Menu.Portal className={styles.portal}>
                    <Menu.Positioner sideOffset={8} align="center">
                        <Menu.Popup className={styles.popup}>

                            <div className={styles.list}>
                                {!isLoggedIn ? (
                                    <>
                                        <Menu.Item
                                            className={styles.item}
                                            onClick={() => {
                                                setLoginOpen(true);
                                                setMenuOpen(false);
                                            }}
                                        >
                                            Login
                                        </Menu.Item>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.userInfo}>
                                            {user?.name || 'User'}
                                        </div>

                                        <Menu.Item
                                            className={styles.item}
                                            onClick={() => {
                                                handleLogout();
                                            }}
                                        >
                                            Logout
                                        </Menu.Item>
                                    </>
                                )}
                            </div>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>

            <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} onSwitchToRegister={switchToReg} />
            <RegistrationDialog open={regOpen} onOpenChange={setRegOpen} onSwitchToLogin={switchToLogin} />
        </>
    );
}
