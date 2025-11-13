import connect from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Admin from '@/lib/models/admin';

export async function POST(req: Request) {
    try {
        await connect();
        const { username, password } = await req.json();
        if (!username || !password) {
            return NextResponse.json(
                { success: false, meassage: 'username and password requered' },
                { status: 400 }
            );
        }
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return NextResponse.json(
                { success: false, message: 'Admin already exists' },
                { status: 400 }
            );
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            username,
            password: hashedpassword,
        });
        return NextResponse.json({
            success: true,
            message: 'Admin Created successfully',
            admin: { id: admin._id, username: admin.username },
        });
    } catch (error) {
        console.error('Error creating admin:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
