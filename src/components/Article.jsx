export default function Article({ image, author, title, body }) {
    return (
        <article className="rounded-md shadow-md ring-1 ring-very-light-gray">
            <img src={image} alt={title} className="object-cover rounded-t-md h-56 w-full" loading="lazy"/>
            <div className="px-4 py-3 flex flex-col gap-2">
                <span className="text-xs text-grayish-blue">{author}</span>
                <h3 className="font-400 text-base lg:text-lg/6 cursor-pointer text-dark-blue hover:text-bright-cyan"><a href="#">{title}</a></h3>
                <p className="text-sm text-grayish-blue">{body}</p>
            </div>
        </article>
    )
}