import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RestaurantTable1637029741270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurant',
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
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE restaurant`);
  }
}
