import CommonIcon from "../assets/icons/common.svg";
import TwitterIcon from "../assets/icons/twitter.svg";

interface QuoteProps {
  text: string;
  author: string;
  handleNextQuote: () => void;
}
const QuoteCard = ({ text, author, handleNextQuote }: QuoteProps) => {
  return (
    <div className="card">
      <div id="quote-box">
        <img src={CommonIcon} alt="svg-icon" />
        <div id="text">{text}</div>
        <div id="author">- {author}</div>

        <div className="action-wrapper">
          <a
            className="social-share"
            href="http://twitter.com/intent/tweet"
            target="_top"
          >
            <img src={TwitterIcon} id="tweet-quote" alt="twitter" />
          </a>
          <button id="new-quote" onClick={handleNextQuote}>
            New Quote
          </button>
        </div>
      </div>
      <div className="developer">by Mustfai</div>
    </div>
  );
};

export default QuoteCard;
