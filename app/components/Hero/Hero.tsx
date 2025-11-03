import BadgeCard from "../BadgeCard/BadgeCard";

function Hero() {
  return (
    <section className="hero">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="text-7xl font-caveat font-semibold mb-3">
          Rudolph Pereira
        </h2>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-center font-semibold flex flex-col leading-13">
            <span>A creative building exceptional web experiences</span>
            <span>that captivate, foster trust and drive growth.</span>
          </h1>
          <p className="text-base font-normal text-center">
            Seamless, purposeful, and polished touchpoints for every user.
          </p>
        </div>

        <BadgeCard title="Open to opportunities" available />
      </div>
    </section>
  );
}

export default Hero;
