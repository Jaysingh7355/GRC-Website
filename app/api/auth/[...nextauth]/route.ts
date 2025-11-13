import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Connect from '@/lib/db';
import Admin from '@/lib/models/admin';
import bcrypt from 'bcrypt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) { 
                
                const username = credentials?.username as string | undefined;
                const password = credentials?.password as string | undefined;

                if (!username || !password) {
                    throw new Error('Username and password are required');
                }

                await Connect();

                const admin = await Admin.findOne({ username });
                if (!admin) throw new Error('Admin not found');

                const isValid = await bcrypt.compare(password, admin.password);
                if (!isValid) throw new Error('Invalid credentials');

                return { id: admin._id.toString(), name: admin.username };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
});

export { handler as GET, handler as POST };
