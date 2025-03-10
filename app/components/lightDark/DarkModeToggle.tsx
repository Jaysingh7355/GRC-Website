"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-white dark:bg-gray-800 transition">
        <Sun size={20} className="text-gray-800 dark:text-blue-800" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition hover:scale-110"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun size={20} className="text-gray-800 dark:text-yellow-300" />
      ) : (
        <Moon size={20} className="text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
}
