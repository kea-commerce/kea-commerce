CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
                          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          name VARCHAR(255) NOT NULL,
                          price DECIMAL(10, 2) NOT NULL,
                          product_image VARCHAR(255) NOT NULL,
                          stock INTEGER NOT NULL,
                          description TEXT,
                          category VARCHAR(100),
                          rating DECIMAL(2, 1),
                          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at timestamp
CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert seed data
INSERT INTO products (name, price, product_image, stock, description, category, rating) VALUES
                                                                                            (
                                                                                                'Mechanical Keyboard',
                                                                                                129.99,
                                                                                                'https://example.com/images/keyboard.jpg',
                                                                                                50,
                                                                                                'Professional mechanical keyboard with Cherry MX switches',
                                                                                                'Electronics',
                                                                                                4.5
                                                                                            ),
                                                                                            (
                                                                                                'Wireless Mouse',
                                                                                                49.99,
                                                                                                'https://example.com/images/mouse.jpg',
                                                                                                100,
                                                                                                'Ergonomic wireless mouse with long battery life',
                                                                                                'Electronics',
                                                                                                4.3
                                                                                            ),
                                                                                            (
                                                                                                'Ultra-wide Monitor',
                                                                                                499.99,
                                                                                                'https://example.com/images/monitor.jpg',
                                                                                                25,
                                                                                                '34-inch curved ultra-wide monitor with HDR support',
                                                                                                'Electronics',
                                                                                                4.8
                                                                                            ),
                                                                                            (
                                                                                                'USB-C Dock',
                                                                                                199.99,
                                                                                                'https://example.com/images/dock.jpg',
                                                                                                75,
                                                                                                'Universal USB-C dock with multiple ports and 4K support',
                                                                                                'Accessories',
                                                                                                4.2
                                                                                            ),
                                                                                            (
                                                                                                'Laptop Stand',
                                                                                                39.99,
                                                                                                'https://example.com/images/stand.jpg',
                                                                                                150,
                                                                                                'Adjustable aluminum laptop stand with cooling design',
                                                                                                'Accessories',
                                                                                                4.6
                                                                                            );