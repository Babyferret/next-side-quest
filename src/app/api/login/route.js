import pb from '@/lib/pocketbase'

export async function POST(req) {
    const { identity, password } = await req.json();
    try {
        const authData = await pb.collection('users').authWithPassword(
            identity,
            password
        );

        const response = new Response(JSON.stringify(authData), { status: 200 });
        response.headers.set('Set-Cookie', `pb_auth_token=${pb.authStore.token}; Path =/; HttpOnly; SameSite=Lax`);
        response.headers.append('Set-Cookie', `user_id = ${pb.authStore.model.id}; Path =/; HttpOnly; SameSite=Lax`);

        return response
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    }
}