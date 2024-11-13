var comments = [
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
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: 'Halooo',
  },
];
// Fungsi untuk menghitung total komentar
function countComments(comments) {
  var _a;
  var count = 0;
  // Iterasi untuk setiap komentar
  for (var i = 0; i < comments.length; i++) {
    count++; // Hitung komentar utama
    // Menggunakan optional chaining dan nullish coalescing untuk menangani undefined
    count += countComments(
      (_a = comments[i].replies) !== null && _a !== void 0 ? _a : []
    ); // Gunakan array kosong jika replies undefined
  }
  return count;
}
console.log(countComments(comments)); // Output: 7
