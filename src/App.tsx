import QuoteCard from "./components/QuoteCard";
import { useEffect, useMemo, useState } from "react";
import Axios from "axios";
interface QuotesProps {
  id: number;
  text: string;
  author: string;
}
const baseUrl = "https://type.fit/api/quotes";

function App() {
  const [quotes, setQuotes] = useState<QuotesProps[]>([]);
  const [selectQuotes, setSelectedQuote] = useState<any>(null);
  const [count, setCount] = useState<number>(0);

  useMemo(async () => {
    const result = await Axios.get(`${baseUrl}`);
    const finalResult = result?.data?.map((item: any, id: number) => {
      return {
        ...item,
        id,
      };
    });
    setQuotes(finalResult);
  }, []);

  const handleNextQuote = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    const currentQuote = quotes?.find((item: QuotesProps) => item.id === count);
    setSelectedQuote(currentQuote);
  }, [count, quotes]);

  return (
    <QuoteCard
      text={selectQuotes?.text}
      author={selectQuotes?.author}
      handleNextQuote={handleNextQuote}
    />
  );
}

export default App;
