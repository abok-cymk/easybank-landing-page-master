export default function DesktopMobileImage({ mobile, desktop }) {
    return (
        <picture>
            <source media="(min-width: 1024px)" srcSet={desktop} />
            <img src={mobile} alt="" />
        </picture>
    )

}