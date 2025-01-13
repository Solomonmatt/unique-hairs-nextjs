"use client";

import { FallingLines } from "react-loader-spinner";

interface LoaderProps {
  color?: string;
  width?: string;
  visible?: boolean;
}

export default function Loader({ color = "#222", width = "80", visible = true }: LoaderProps) {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-3">
      <div className="flex flex-row items-baseline">
        <FallingLines color={color} width={width} visible={visible} />
      </div>
    </div>
  );
}
