import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />
      <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28" />
    </div>
  );
};

export default Home;
