"use client";
import { Dialog } from '@base-ui/react/dialog';
import styles from './login-dialog.module.css';
import { useAuth } from '@/app/context/auth-context';
import { useState } from 'react';

interface LoginDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        const success = login(email.trim(), password);

        setLoading(false);

        if(success){
            onOpenChange(false);
            setEmail('');
            setPassword('');
        } else {
            setError('Wrong Email or Password');
        }
    }

    return (
        <>
            <Dialog.Root open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Dialog.Backdrop className={styles.overlay} />

                    <Dialog.Popup className={styles.modal}>
                        <Dialog.Title className={styles.title}>
                            Login
                        </Dialog.Title>

                        <div className={styles.container}>
                            <div>
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    className={styles.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className={styles.label}>Password</label>
                                <input
                                    value={password}
                                    type="password"
                                    className={styles.input}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                />
                            </div>

                            {error && <div className={styles.error}>{error}</div>}
                        </div>

                        <div className={styles.buttonContainer}>
                            <button
                                onClick={() => onOpenChange(false)}
                                className={styles.cancel}
                                disabled={loading}
                            >
                                Cancel
                            </button>
                            <button className={styles.submit} onClick={handleSubmit} disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </Dialog.Popup>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}