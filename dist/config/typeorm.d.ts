import { DataSource } from 'typeorm';
declare const _default: (() => import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions | import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions) & import("@nestjs/config").ConfigFactoryKeyHost<import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions | import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>;
export default _default;
export declare const conectionSource: DataSource;
