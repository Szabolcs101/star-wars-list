import { NextResponse } from 'next/server';
import { validateCredentials } from '@/lib/db/queries/users';

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const user = await validateCredentials(email, password);

    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json(user);
}