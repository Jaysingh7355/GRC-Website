export async function GET() {
    return Response.json({
        ok: true,
        message:
            'Auth API is available. NextAuth handlers are configured in /api/auth/[...nextauth].',
    });
}
