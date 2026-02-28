import { useEffect, useState } from "react";
import { interpolate, spring } from "remotion";

export default function RemotionLaunchBadge() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let rafId;

    const tick = () => {
      setFrame((current) => (current + 1) % 720);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const fps = 30;
  const timeline = frame % 420;

  const containerIn = spring({
    frame: timeline,
    fps,
    config: {
      damping: 170,
      stiffness: 120,
      mass: 0.7,
    },
  });

  const dashboardOpacity = interpolate(timeline, [0, 140, 180], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dashboardY = interpolate(timeline, [0, 140, 180], [0, 0, -16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const editorOpacity = interpolate(timeline, [150, 185, 210], [0, 0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const editorY = interpolate(timeline, [150, 210], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cursorX = interpolate(timeline, [0, 50, 95, 130], [58, 58, 83, 83], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cursorY = interpolate(timeline, [0, 50, 95, 130], [58, 58, 16, 16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const clickScale = interpolate(timeline, [104, 112, 122], [1, 0.86, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const clickRipple = interpolate(timeline, [108, 132], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shimmerX = interpolate(timeline % 180, [0, 180], [-260, 300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statA = Math.round(
    interpolate(timeline % 150, [0, 75, 150], [64, 80, 69], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const statB = Math.round(
    interpolate(timeline % 170, [0, 85, 170], [42, 58, 50], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const statC = Math.round(
    interpolate(timeline % 190, [0, 95, 190], [70, 88, 77], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const typedContent = "Chapter 1: The night was silent until the ink began to glow.";
  const typingProgress = Math.floor(
    interpolate(timeline, [210, 360], [0, typedContent.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const visibleText = typedContent.slice(0, typingProgress);
  const cursorBlink = timeline % 24 < 12;

  return (
    <div className="mx-auto mb-6 w-full max-w-xl">
      <div
        style={{
          transform: `scale(${containerIn})`,
          opacity: containerIn,
        }}
        className="relative overflow-hidden rounded-2xl border border-purple-400/50 bg-gray-900/80 p-4 md:p-5 text-left shadow-[0_0_30px_rgba(168,85,247,0.35)]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ transform: `translateX(${shimmerX}px)` }}
        />

        <div className="relative mb-3 h-2" />

        <div className="relative h-64 overflow-hidden rounded-xl border border-purple-500/30 bg-[#101325]">
          <div
            style={{
              opacity: dashboardOpacity,
              transform: `translateY(${dashboardY}px)`,
            }}
            className="absolute inset-0"
          >
            <div className="h-full w-full text-xs text-gray-200">
              <div className="flex h-full">
                <div className="w-[26%] border-r border-white/10 bg-[#0d1122] p-3">
                  <p className="text-lg font-semibold text-white">
                    Novel<span className="text-violet-400">Pedia</span>
                  </p>
                  <p className="text-[10px] text-gray-400">Author Dashboard</p>
                  <div className="mt-3 space-y-2 text-gray-300">
                    <p>Dashboard</p>
                    <p>My Novels</p>
                    <p>Analytics</p>
                    <p>Settings</p>
                  </div>
                  <p className="mt-8 text-[10px] text-violet-300">User · Author</p>
                </div>

                <div className="w-[74%] p-3">
                  <div className="rounded-lg border border-white/10 bg-[#141933] p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-lg font-bold text-white">Welcome back, User</p>
                        <p className="text-[11px] text-gray-400">1 novel · 0 readers · 0 followers</p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full bg-violet-600 px-3 py-1.5 text-[11px] font-semibold text-white"
                        style={{ transform: `scale(${clickScale})` }}
                      >
                        Start Writing
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="rounded-md bg-[#1a2140] p-2">
                      <p className="text-gray-400">Total Novels</p>
                      <p className="font-bold text-white">1</p>
                    </div>
                    <div className="rounded-md bg-[#1a2140] p-2">
                      <p className="text-gray-400">Total Views</p>
                      <p className="font-bold text-white">0</p>
                    </div>
                    <div className="rounded-md bg-[#1a2140] p-2">
                      <p className="text-gray-400">Words Today</p>
                      <p className="font-bold text-white">0</p>
                    </div>
                  </div>

                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 w-full overflow-hidden rounded bg-white/10">
                      <div className="h-full rounded bg-violet-400" style={{ width: `${statA}%` }} />
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded bg-white/10">
                      <div className="h-full rounded bg-blue-400" style={{ width: `${statB}%` }} />
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded bg-white/10">
                      <div className="h-full rounded bg-orange-400" style={{ width: `${statC}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute h-5 w-5"
              style={{
                left: `${cursorX}%`,
                top: `${cursorY}%`,
                transition: "none",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "9px solid #f8fafc",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
                }}
              />
              <div
                className="absolute -left-2 -top-2 h-8 w-8 rounded-full border border-violet-300/60"
                style={{
                  opacity: clickRipple,
                  transform: `scale(${1 + clickRipple})`,
                }}
              />
            </div>
          </div>

          <div
            style={{
              opacity: editorOpacity,
              transform: `translateY(${editorY}px)`,
            }}
            className="absolute inset-0 p-3"
          >
            <div className="h-full rounded-lg border border-white/10 bg-[#0f142b] p-3 text-xs text-gray-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <p className="font-semibold text-white">Chapter Editor</p>
                <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[10px] text-violet-200">Drafting</span>
              </div>
              <div className="flex items-center justify-between pt-2 text-[11px] text-gray-400">
                <p>Chapter 1 · Untitled</p>
                <p>Auto-save enabled · {typingProgress} chars</p>
              </div>
              <div className="mt-2 h-[70%] rounded-md border border-white/10 bg-[#141933] p-2 font-mono text-[11px] leading-relaxed text-gray-100">
                {visibleText}
                <span className="ml-0.5 text-violet-300">{cursorBlink ? "|" : " "}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}