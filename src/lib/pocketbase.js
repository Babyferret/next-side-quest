import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_REST_API);

export default pb;
