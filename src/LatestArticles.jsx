import { memo } from "react";
import Article from "./components/Article";
import useFadeInOnView from "./hooks/useFadeInOnView";

const articles = [
  {
    image: "/image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    body: " The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: "/image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: "/image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    body: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: "/image-confetti.jpg",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    body: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

function LatestArticles() {
  const [ref, isVisible] = useFadeInOnView();
  return (
    <section
      ref={ref}
      className={`min-h-screen px-6 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto py-18">
        <h2 className="text-xl lg:text-3xl text-dark-blue">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 lg:pt-10">
          {articles.map((article, index) => (
            <Article
              key={index}
              image={article.image}
              author={article.author}
              title={article.title}
              body={article.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(LatestArticles);
