import { NextResponse } from 'next/server';
import { createUser, getUserByEmail, getUserByUsername } from '@/lib/db/queries/users';

export async function POST(req: Request) {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (password.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    if (name.length > 20) {
        return NextResponse.json({ error: 'Username must be at most 20 characters' }, { status: 400 });
    }

    if (/\s/.test(name)) {
        return NextResponse.json({ error: 'Username cannot contain spaces' }, { status: 400 });
    }

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    const existingName = await getUserByUsername(name);
    if (existingName) {
        return NextResponse.json({ error: 'Username already taken' }, { status: 409 });
    }

    const user = await createUser(email, password, name);
    return NextResponse.json(user);
}