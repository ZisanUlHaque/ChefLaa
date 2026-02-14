import React from "react";

const ManualScanMarquee = () => {
  return (
    <div className="
      w-full
      border-y border-amber-200/70
      bg-amber-50/95 text-amber-900
      dark:border-amber-500/40
      dark:bg-amber-900/70 dark:text-amber-50
    ">
      <marquee
        behavior="scroll"
        direction="left"
        scrollAmount="5"
        className="py-2.5 text-[13px] sm:text-sm font-semibold tracking-wide"
      >
        🔧 Cheflaa is currently running in manual demo scan mode – images are not yet analyzed by live AI.
        &nbsp;&nbsp;•&nbsp;&nbsp;
        🤖 Full AI‑powered image detection, smarter ingredient recognition & recipe generation are coming very soon. Stay tuned!
      </marquee>
    </div>
  );
};

export default ManualScanMarquee;