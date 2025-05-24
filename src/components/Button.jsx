export default function Button ({ text, className }) {
    return (
      <button type="button" className={`${className}`}>
        <span className="sr-only">{text}</span>
        {text}
      </button>
    );
}