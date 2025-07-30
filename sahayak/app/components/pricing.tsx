"use client";
// import TestimonialSingle from "./testimonial-single";
import { Button } from "./button";
export default function Pricing({ }: { config?: string }) {
  return (
    <section className="overflow-hidden bg-slate-50" id="pricing">
      <div className="mx-auto max-w-5xl px-8 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          {/* <div className="mb-4">
            <div className="mx-auto max-w-fit animate-pulse whitespace-nowrap rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
              ✨ Launch discount — $50 OFF ✨
            </div>
          </div> */}
          <h2 className="mx-auto mb-8 max-w-xl text-3xl font-bold tracking-tight text-green-600 lg:text-5xl">
          Choose Your Plan, Grow Your Future
          </h2>
          <div className="mx-auto max-w-md font-medium text-slate-500">
          Whether you&apos;re a hobbyist or a commercial farmer, SAHAYAK has a plan to fit your needs and budget.
          </div>
        </div>
        <div className="relative flex flex-col items-stretch justify-center gap-8 lg:flex-row">
          <PricingCard
            key="Basic Plan"
            title="Basic Plan"
            isFeatured={false}
            price={2730}
            originalPrice={0}
            features={[
              <span key="feature1">Clay-Based Evaporative Cooling System</span>,
              <span key="feature2">IoT-Powered Temperature Control</span>,
              <span key="feature3">Materials for one small-scale farming unit</span>,
              <span key="feature4">Grow Light</span>,
              <span key="feature5">Step-by-step guide for setup and maintenance</span>,
              <span key="feature6">Email support for troubleshooting</span>,
            ]}
            buttonLink="https://buy.stripe.com/test_00g4iW1NydhW3HG5kl"
            description="Small-scale farmers, urban gardeners, or hobbyists."
          />
          <PricingCard
            key="Pro Plan"
            title="Pro Plan"
            isFeatured={true}
            price={12000}
            originalPrice={15000}
            features={[
              <span key="feature1">Everything in the Basic Plan</span>,
              <span key="feature2">Materials for up to 5 farming units</span>,
              <span key="feature3">Advanced IoT Features</span>,
              <span key="feature4">6 months&apos; supply of liquid nutrients</span>,
              <span key="feature5">1-hour online training session for efficient use of the system</span>,
            ]}
            buttonLink="https://buy.stripe.com/test_00g5n01Ny6Tya64fYY"
            description="Medium-scale farmers or small agricultural businesses"
          />
        </div>
        {/* <TestimonialSingle
          testimonial={{
            name: "Sarah Johnson",
            content:
              "QuillMinds has revolutionized my lesson planning. I save hours each week and my students love the engaging content!",
            schoolName: "Oakridge Elementary",
            image: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah",
          }}
        /> */}
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  originalPrice,
  features,
  buttonLink,
  isFeatured,
  description,
}: {
  title: string;
  price: number;
  originalPrice: number;
  features: React.ReactNode[];
  buttonLink: string;
  isFeatured?: boolean;
  description: string;
}) {
  return (
    <div className={`relative w-full max-w-lg ${isFeatured ? "lg:-mt-4" : ""}`}>
      {isFeatured && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <span className="whitespace-nowrap rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
            FARMER&apos;S FAVOURITE
          </span>
        </div>
      )}
      <div
        className={`relative z-10 h-full rounded-lg ${
          isFeatured ? "ring-2 ring-green-500" : "border border-zinc-200"
        }`}
      >
        <div className="flex h-full flex-col gap-5 rounded-lg bg-white p-8 lg:gap-8 ">
          <div>
            <h3 className="mb-2 text-xl font-bold text-orange-500 ">{title}</h3>
            <p className="text-sm text-orange-400">{description}</p>
          </div>
          <div className="flex flex-wrap items-end gap-2">
            <div
              className={`mb-[4px] flex flex-col justify-end text-lg ${
                isFeatured ? "" : "hidden"
              }`}
            >
              <p className="relative">
                <span className="absolute inset-x-0 top-[53%] h-[1.5px] bg-orange-600"></span>
                <span className="text-orange-300">₹{originalPrice}</span>
              </p>
            </div>
            <p className="text-5xl font-black tracking-tight text-orange-500">
            ₹{price}
            </p>
            <div className="mb-[4px] flex flex-col justify-end">
              <p className="text-xs font-semibold uppercase text-orange-400">
                INR / month
              </p>
            </div>
          </div>
          <ul
            className={`flex-1 space-y-2.5 text-base leading-relaxed ${
              isFeatured ? "text-green-600" : "text-slate-700"
            }`}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-[18px] w-[18px] shrink-0 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-orange-400">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <Button href={buttonLink} color="green" className="w-full hover:bg-green-500 transition duration-500">
              Get Sahayak
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
