export const dynamic = 'force-dynamic';

export async function GET() {
    return Response.json({
        ok: true,
        message: 'Frontend deployment mode: auth is disabled for now.',
    });
}

export async function POST() {
    return Response.json({
        ok: true,
        message: 'Frontend deployment mode: auth is disabled for now.',
    });
}
