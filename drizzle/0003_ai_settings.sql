CREATE TABLE `ai_settings` (
	`user_id` text PRIMARY KEY NOT NULL,
	`theme` text DEFAULT 'mint' NOT NULL,
	`language` text DEFAULT 'zh-CN' NOT NULL,
	`deepseek_api_key` text,
	`updated_at` integer NOT NULL
);
