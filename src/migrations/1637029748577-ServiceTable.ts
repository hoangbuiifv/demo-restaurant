import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ServiceTable1637029748577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'service',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'res_id',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      false,
    );
    await queryRunner.createForeignKey(
      'service',
      new TableForeignKey({
        columnNames: ['res_id'],
        referencedTableName: 'restaurant',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE service`);
  }
}
