// components/icons.tsx
// import { LucideProps } from 'lucide-react'
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

export const loader = {
  spinner: dynamic(() => dynamicIconImports["loader-circle"]()),
};
