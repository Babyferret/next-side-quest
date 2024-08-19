import pb from '@/lib/pocketbase'

export async function POST(req) {
    const { username, email, password, passwordConfirm } = await req.json();
    try {
        const result = await pb.collection('users').create({
            username,
            email,
            password,
            passwordConfirm,
        })
        return new Response(JSON.stringify(result), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    }
}