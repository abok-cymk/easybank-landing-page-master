export default function Service({ icon, offer, body }) {
  return (
    <article className="flex flex-col gap-2 lg:gap-5 justify-center items-center lg:items-start lg:justify-start text-center lg:text-left">
      <img src={icon} alt={offer} className="h-10 w-10 object-cover"/>
      <h3 className="font-400 text-base/6 lg:text-lg/6">{offer}</h3>
      <div className="px-4 lg:px-0">
          <p className="text-sm/6 text-grayish-blue">{body}</p>
      </div>
    </article>
  );
}
