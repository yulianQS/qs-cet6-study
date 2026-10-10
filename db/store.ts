import {env} from 'cloudflare:workers';
export function database():D1Database {if(!env.DB)throw new Error('学习记录暂时无法连接，请稍后重试。');return env.DB;}
