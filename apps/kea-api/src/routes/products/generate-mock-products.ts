import { faker } from '@faker-js/faker';

import { type Product } from '@kea-commerce/shared/models';

interface GenerateProductsOptions {
  count?: number;
  minPrice?: number;
  maxPrice?: number;
  includeDescription?: boolean;
  includeCategory?: boolean;
  includeStock?: boolean;
  includeRating?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

const DEFAULT_OPTIONS: GenerateProductsOptions = {
  count: 10,
  minPrice: 0,
  maxPrice: 100,
  includeDescription: true,
  includeCategory: true,
  includeStock: true,
  includeRating: true,
  imageWidth: 200,
  imageHeight: 200,
};

/**
 * Generates a placeholder product image URL
 * @param {string} name the product name on the image
 * @param {number} width the width in pixels
 * @param {number} height the height in pixels
 * @returns {string} the URL of the image
 */
const generateProductImage = (name: string, width: number, height: number): string => {
  const backgroundColor = faker.color.rgb({
    prefix: '',
    format: 'hex',
    casing: 'lower',
  });
  const textColor = faker.color.rgb({
    prefix: '',
    format: 'hex',
    casing: 'lower',
  });
  const encodedName = encodeURIComponent(name);

  return `https://dummyimage.com/${width}x${height}/${backgroundColor}/${textColor}&text=${encodedName}`;
};

/**
 * Generate an array of mock Products
 * @param {GenerateProductsOptions} options the options for the mock products to generate. Defaults to using {@link DEFAULT_OPTIONS}
 * @returns {Product[]} The array of mock products
 */
export const generateMockProducts = (options: GenerateProductsOptions = {}): Product[] => {
  const config = { ...DEFAULT_OPTIONS, ...options };

  return Array.from({ length: config.count! }, () => {
    const name = faker.commerce.productName();
    const baseProduct: Product = {
      id: faker.string.uuid(),
      name,
      price: faker.number.float({
        min: config.minPrice,
        max: config.maxPrice,
        fractionDigits: 2,
      }),
      productImage: generateProductImage(name, config.imageWidth!, config.imageHeight!),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    // Conditionally add optional fields
    if (config.includeDescription) {
      baseProduct.description = faker.commerce.productDescription();
    }

    if (config.includeCategory) {
      baseProduct.category = faker.commerce.department();
    }

    if (config.includeStock) {
      baseProduct.stock = faker.number.int({ min: 0, max: 1000 });
    }

    if (config.includeRating) {
      baseProduct.rating = faker.number.float({
        min: 1,
        max: 5,
        fractionDigits: 1,
      });
    }

    return baseProduct;
  });
};
