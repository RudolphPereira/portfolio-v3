"use client";
import GradualBlur from "@/components/ui/gradualBlur";

function BlurContent() {
  return (
    <GradualBlur
      target="page"
      position="bottom"
      height="8rem"
      strength={2}
      divCount={5}
      curve="bezier"
      exponential={true}
      opacity={1}
      responsive={true}
    />
  );
}

export default BlurContent;
