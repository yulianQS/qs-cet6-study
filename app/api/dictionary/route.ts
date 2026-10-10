import {loadDictionary} from '@/lib/dictionary';
export const dynamic='force-dynamic';
export async function GET(){try{return Response.json(await loadDictionary(),{headers:{'Cache-Control':'private, max-age=300'}})}catch(error){console.error('Dictionary load failed',error);return Response.json({error:'在线词库暂时未连接成功。请稍后重试；已有学习卡仍可使用。'},{status:503,headers:{'Cache-Control':'no-store'}})}}
