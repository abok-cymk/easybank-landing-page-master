import { memo } from "react";
import Service from "./components/Service";
import useFadeInOnView from "./hooks/useFadeInOnView";

const services = [
  {
    icon: "/icon-online.svg",
    offer: "Online Banking",
    body: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: "/icon-budgeting.svg",
    offer: "Simple Budgeting",
    body: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: "/icon-onboarding.svg",
    offer: "Fast Onboarding",
    body: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: "/icon-api.svg",
    offer: "Open API",
    body: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function Services() {
  const [ref, isVisible] = useFadeInOnView();
  return (
    <section
      ref={ref}
      className={`relative px-6 bg-light-grayish-blue min-h-screen transition-opacity duration-700 ${
        isVisible ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto py-18">
        <h2 className="text-2xl lg:text-4xl font-300 text-center lg:text-left my-3">
          Why choose Easybank?
        </h2>
        <p className="text-base font-400 text-center lg:text-left text-grayish-blue max-w-xl">
          {" "}
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              offer={service.offer}
              body={service.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
