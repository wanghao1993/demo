"use client";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div>
        现在主题是: <span>{theme}</span>
      </div>
      <button onClick={() => setTheme("light")}>明亮</button>
      {"  "}
      <button onClick={() => setTheme("dark")}>暗黑模式</button>
      {"  "}

      <button onClick={() => setTheme("os")}>跟随系统</button>
    </div>
  );
};

export default ThemeChanger;
