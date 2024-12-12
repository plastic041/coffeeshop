CREATE TABLE `orderDetails` (
	`id` integer PRIMARY KEY NOT NULL,
	`product_id` integer,
	`quantity` integer
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY NOT NULL,
	`phonenumber` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now'))
);
