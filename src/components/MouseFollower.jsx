import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // শুরুতে মাঝখানে সেট করা
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    positionRef.current = { x: startX, y: startY };
    targetRef.current = { x: startX, y: startY };

    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", handleMove);

    const animate = () => {
      const pos = positionRef.current;
      const target = targetRef.current;
      const ease = 0.15; // কমালে বেশি ল্যাগ, বাড়ালে ফাস্টার

      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;

      // বড় গ্লাস সার্কেল (size: 48px => 24 offset)
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${
          pos.x - 24
        }px, ${pos.y - 24}px, 0)`;
      }

      // ছোট ডট (size: 8px => 4 offset)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${
          target.x - 4
        }px, ${target.y - 4}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      {/* বড় গ্লাসি সার্কেল */}
      <div
        ref={circleRef}
        className="
          pointer-events-none fixed top-0 left-0
          h-12 w-12 rounded-full
          border border-[#D8F3DC]/70
          bg-[#1B4332]/15
          shadow-[0_0_40px_rgba(255,112,67,0.45)]
          backdrop-blur-sm
          mix-blend-screen
          transition-[background,border,box-shadow]
          duration-200
        "
      />
      {/* ছোট ফায়ার ডট */}
      <div
        ref={dotRef}
        className="
          pointer-events-none fixed top-0 left-0
          h-2 w-2 rounded-full
          bg-[#FF7043]
          shadow-[0_0_12px_rgba(255,112,67,0.9)]
        "
      />
    </div>
  );
};

export default MouseFollower;