CREATE TABLE `records`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `date` DATETIME NOT NULL,
    `goal_id` BIGINT NOT NULL,
    `products_id` BIGINT NOT NULL,
    `type_id` BIGINT NOT NULL,
    `status` TEXT NOT NULL,
    `disposal_method` BIGINT NOT NULL,
    `create_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);
CREATE TABLE `goal`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` DATETIME NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `goal_type` VARCHAR(255) NOT NULL,
    `target_value_g` BIGINT NOT NULL,
    `create_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);
CREATE TABLE `types`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `image` TEXT NOT NULL,
    `disposal` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `going_to_landfill_percentage` BIGINT NOT NULL,
    `landfill_contribution_percentage` BIGINT NOT NULL,
    `create_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);
CREATE TABLE `products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `type_id` BIGINT NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `instructions` BIGINT NOT NULL,
    `reuse_status` BIGINT NOT NULL,
    `unit` VARCHAR(255) NOT NULL,
    `create_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `garbage_collection_date` DATE NOT NULL,
    `create_at` TIMESTAMP NOT NULL,
    `updated_at` BIGINT NOT NULL
);
ALTER TABLE
    `records` ADD CONSTRAINT `records_id_foreign` FOREIGN KEY(`id`) REFERENCES `goal`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_username_foreign` FOREIGN KEY(`username`) REFERENCES `records`(`id`);
ALTER TABLE
    `records` ADD CONSTRAINT `records_date_foreign` FOREIGN KEY(`date`) REFERENCES `types`(`id`);
ALTER TABLE
    `products` ADD CONSTRAINT `products_name_foreign` FOREIGN KEY(`name`) REFERENCES `records`(`type_id`);