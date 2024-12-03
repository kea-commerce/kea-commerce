import { type Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    // Use UUID type for GUID
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    // Use decimal for price to handle currency properly
    table.decimal('price', 10, 2).notNullable();
    table.string('product_image').notNullable();
    table.integer('stock').notNullable();
    table.text('description');
    table.string('category');
    // Use decimal for rating to allow fractional ratings
    table.decimal('rating', 3, 2);
    // Use timestamp with time zone for proper datetime handling
    table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
  });

  // Create an updated_at trigger
  await knex.raw(`
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `);

  await knex.raw(`
    CREATE TRIGGER update_products_updated_at
      BEFORE UPDATE ON products
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP TRIGGER IF EXISTS update_products_updated_at ON products');
  await knex.raw('DROP FUNCTION IF EXISTS update_updated_at_column');
  await knex.schema.dropTable('products');
}
