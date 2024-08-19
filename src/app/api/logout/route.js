import pb from '@/lib/pocketbase';

export async function POST(req) {
    try {
        pb.authStore.clear();

        const response = new Response(JSON.stringify({ message: 'Logged out successfully' }), { status: 200 });
        response.headers.set('Set-Cookie', `pb_auth_token=; Path=/; HttpOnly; SameSite=Lax expires=Thu, 01 Jan 1970 00:00:00 GMT`);

        return response;
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
