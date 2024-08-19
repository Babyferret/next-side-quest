import pb from '@/lib/pocketbase';

export async function GET(req) {
    const token = req.cookies.get('pb_auth_token')['value']
    const id = req.cookies.get('user_id')['value']

    if (!token || token === '') {
        return new Response(JSON.stringify({ error: 'Token is missing or invalid' }), { status: 400 });
    }
    pb.authStore.save(token);

    try {
        const user = await pb.collection('users').getOne(id)
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}
