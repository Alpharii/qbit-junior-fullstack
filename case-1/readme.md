Case 1 (Soal No.1-4)
Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini
adalah sebagai berikut.

```typescript
type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: 'IMPORT' | 'LOCAL';
  stock: number;
};
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];
```

1. Buah apa saja yang dimiliki Andi? (fruitName)

```typescript
const fruitNames = fruits.map((fruit) => fruit.fruitName);
console.log(fruitNames);
```

output :

```typescript
['Apel', 'Kurma', 'apel', 'Manggis', 'Jeruk Bali', 'KURMA', 'Salak'];
```

2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
   (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
   masing-masing wadah?

```typescript
const separatedFruits = fruits.reduce((acc, fruit) => {
  if (!acc[fruit.fruitType]) {
    acc[fruit.fruitType] = [];
  }
  acc[fruit.fruitType].push(fruit.fruitName);
  return acc;
}, {});

console.log(separatedFruits);
```

output :

```typescript
{
    IMPORT: ['Apel', 'Kurma', 'apel', 'KURMA'],
    LOCAL: ['Manggis', 'Jeruk Bali', 'Salak']
}
```

3. Berapa total stock buah yang ada di masing-masing wadah?

```typescript
const totalStockPerWadah = fruits.reduce((acc, fruit) => {
  if (!acc[fruit.fruitType]) {
    acc[fruit.fruitType] = 0;
  }
  acc[fruit.fruitType] += fruit.stock;
  return acc;
}, {});

console.log(totalStockPerWadah);
```

output :

```typescript
{
    IMPORT: 100,  // 10 (Apel) + 20 (Kurma) + 50 (apel) + 20 (KURMA)
    LOCAL: 260    // 100 (Manggis) + 10 (Jeruk Bali) + 150 (Salak)
}
```

4. Apakah ada komentar terkait kasus di atas?

- Nama buah dalam daftar memiliki inkonsistensi huruf besar/kecil, misalnya 'Apel' dan 'apel', atau 'Kurma' dan 'KURMA'. Ini bisa menyebabkan kesulitan dalam pengelompokkan atau pencarian buah jika perbandingan case-sensitive diterapkan. Untuk menghindari masalah ini, sebaiknya konsisten menggunakan satu format penulisan (misalnya, semuanya menggunakan huruf besar atau kecil).

- ID buah dengan fruitId: 5 memiliki entri yang sama untuk buah Kurma, dengan nama yang berbeda (Kurma dan KURMA). Ini bisa menjadi masalah dalam pengelolaan data karena menduplikasi ID yang sama untuk buah yang sama, hanya berbeda nama.

Solusi yang mungkin:

- Menggunakan normalisasi nama buah untuk memastikan konsistensi format.
- Memastikan bahwa fruitId unik untuk setiap buah, menghindari duplikasi.
