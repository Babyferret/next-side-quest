import pb from '@/lib/pocketbase'

export async function POST(req) {
    
    const { identity, password } = await req.json();
    console.log(identity, password)

    try {
        const auth = await pb.collection('users').authWithPassword(
            identity,
            password
        )

        console.log("isValid: ", pb.authStore.isValid);
        console.log("token: ", pb.authStore.token);
        console.log("model: ", pb.authStore.model.id);

        return new Response(JSON.stringify(auth), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    }
}