interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  isLoandedBook: Boolean;
  description: string;
  color: string;
  cover: string;
  videoUrl: string;
  summary: string;
  createdAt: Date | null;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

// interface BookParams {
//   title: string;
//   author: string;
//   genre: string;
//   rating: number;
//   coverUrl: string;
//   coverColor: string;
//   description: string;
//   totalCopies: number;
//   videoUrl: string;
//   summary: string;
// }

// interface BorrowBookParams {
//   bookId: string;
//   userId: string;
// }
