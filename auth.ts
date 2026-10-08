import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Admin from '@/lib/models/admin';

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI as string);
};

export const authConfig = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    await connectDB();

                    const username =
                        typeof credentials?.username === 'string' ? credentials.username : '';
                    const password =
                        typeof credentials?.password === 'string' ? credentials.password : '';

                    const user = await Admin.findOne({ username });
                    if (!user) {
                        throw new Error('Invalid username');
                    }

                    const isValid = await bcrypt.compare(password, user.password);
                    if (!isValid) {
                        throw new Error('Invalid password');
                    }

                    return {
                        id: user._id.toString(),
                        name: user.username,
                        username: user.username,
                    };
                } catch (err) {
                    console.error('Authorize error:', err);
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        strategy: 'jwt' as const,
    },
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET,
    trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
