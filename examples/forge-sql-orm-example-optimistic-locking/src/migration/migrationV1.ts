import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
        .enqueue("v1_MIGRATION0", "create table `test_data` (`id` int not null auto_increment primary key, `test_date_column` datetime null, `test_name_column` varchar(100) null)")
        .enqueue("v1_MIGRATION1", "create table `test_data_optimistic_date` (`id` int not null auto_increment primary key, `test_date_column` datetime null, `version` datetime not null, `test_name_column` varchar(255) null)")
        .enqueue("v1_MIGRATION2", "create table `test_data_optimistic_number` (`id` int not null auto_increment primary key, `test_date_column` datetime null, `test_name_column` varchar(100) null, `version` int not null)")
        .enqueue("v1_MIGRATION3", "create table `test_data_optimistic_timestamp` (`id` int not null auto_increment primary key, `test_date_column` datetime null, `test_name_column` varchar(100) null, `version` timestamp not null)");
};