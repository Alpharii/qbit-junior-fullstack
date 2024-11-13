type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: 'IMPORT' | 'LOCAL';
  stock: number;
};

const fruits: IFruit[] = [
  { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
  { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
  { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
  { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
  { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
  { fruitId: 5, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
  { fruitId: 5, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 },
];

//soal 1
const fruitNames = fruits.map((fruit) => fruit.fruitName);
console.log(fruitNames);

//soal 2
const separatedFruits = fruits.reduce<Record<string, string[]>>(
  (acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = []; // Inisialisasi array jika tipe buah belum ada
    }
    acc[fruit.fruitType].push(fruit.fruitName); // Tambahkan nama buah ke array yang sesuai
    return acc;
  },
  {}
);

console.log(separatedFruits);

//soal 3
const totalStockPerWadah = fruits.reduce<Record<string, number>>(
  (acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0; // Inisialisasi jumlah stok jika tipe buah belum ada
    }
    acc[fruit.fruitType] += fruit.stock; // Tambahkan stok buah
    return acc;
  },
  {}
);

console.log(totalStockPerWadah);

//Bonus Case
const getUniqueFruitNames = (fruits: IFruit[]): string[] => {
  const uniqueNammes = new Set<string>();

  fruits.forEach((fruit) => {
    uniqueNammes.add(fruit.fruitName.toLowerCase());
  });

  return Array.from(uniqueNammes).map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
};

const result = getUniqueFruitNames(fruits);
console.log(result); // Output: ["Apel", "Kurma", "Manggis", "Jeruk Bali", "Salak"]
