interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  // isLoandedBook: Boolean;
  description: string;
  coverColor: string;
  coverUrl: string;
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

interface BookParams { 
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

interface User { 
  id: string;
  fullName: string;
  email: string;
  universityId: number;
  password: string;
  universityCard: string;
  status: string | null;
  role: string;
  lastActivityDate: Date;
  createdAt: Date;
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

interface BorrowBookParams {
  bookId: string;
  userId: string;
}
