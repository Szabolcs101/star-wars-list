"use client";
import { Dialog } from '@base-ui/react/dialog';
import styles from './login-dialog.module.css';
import { useAuth } from '@/app/context/auth-context';
import { useState } from 'react';

interface RegistrationDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSwitchToLogin: () => void;
}

export function RegistrationDialog({ open, onOpenChange, onSwitchToLogin}: RegistrationDialogProps) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setError('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (username.length > 20) {
            setError('Username must be at most 20 characters');
            return;
        }
        if (/\s/.test(username)) {
            setError('Username cannot contain spaces');
            return;
        }

        setLoading(true);

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim(), password, name: username.trim() }),
        });

        if (!res.ok) {
            const data = await res.json();
            setError(data.error ?? 'Registration failed');
            setLoading(false);
            return;
        }

        await login(email.trim(), password);
        setLoading(false);
        onOpenChange(false);
        setEmail('');
        setPassword('');
        setUsername('');
    };

    return (
        <>
            <Dialog.Root open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Dialog.Backdrop className={styles.overlay} />
                    <Dialog.Popup className={styles.modal}>
                        <Dialog.Title className={styles.title}>
                            Register
                        </Dialog.Title>

                        <div className={styles.container}>
                            <div>
                                <label className={styles.label}>Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    className={styles.input}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

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
                                    type="password"
                                    value={password}
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
                            <button
                                className={styles.submit}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                        </div>

                        <div className={styles.registrationContainer}>
                            <p onClick={onSwitchToLogin} className={styles.registrationPara}>Have an account already? Login here!</p>
                        </div>
                    </Dialog.Popup>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}