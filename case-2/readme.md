Case 2 (Soal No.5)
Diketahui data berikut ini.

```typescript
type IComment = {
    commentId: number;
    commentContent: string;

    Junior Fullstack - Technical Test 3

    replies?: IComment[];
}

const comments: IComment[] = [
    {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
    {
    commentId: 11,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 111,
    commentContent: 'Haai juga hai jugaa'
    },
    {
    commentId: 112,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    },
    {
    commentId: 12,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 121,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    }
    ]
    },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
]
```
5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

```typescript
type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];

// Fungsi untuk menghitung total komentar
function countComments(comments: IComment[]): number {
    let count = 0;

    // Iterasi untuk setiap komentar
    for (let i = 0; i < comments.length; i++) {
        count++; // Hitung komentar utama
        // Menggunakan optional chaining dan nullish coalescing untuk menangani undefined
        count += countComments(comments[i].replies ?? []); // Gunakan array kosong jika replies undefined
    }

    return count;
}

console.log(countComments(comments)); // Output: 7
```