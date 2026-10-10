import {integer,sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const learningState=sqliteTable('learning_state',{id:integer('id').primaryKey(),revision:integer('revision').notNull().default(0),data:text('data').notNull(),updatedAt:integer('updated_at').notNull()});
export const userLearningState=sqliteTable('user_learning_state',{userId:text('user_id').primaryKey(),revision:integer('revision').notNull().default(0),data:text('data').notNull(),updatedAt:integer('updated_at').notNull()});
export const dictionaryCache=sqliteTable('dictionary_cache',{key:text('key').primaryKey(),data:text('data').notNull(),updatedAt:integer('updated_at').notNull()});
export const aiSettings=sqliteTable('ai_settings',{userId:text('user_id').primaryKey(),theme:text('theme').notNull().default('mint'),language:text('language').notNull().default('zh-CN'),deepseekApiKey:text('deepseek_api_key'),updatedAt:integer('updated_at').notNull()});
