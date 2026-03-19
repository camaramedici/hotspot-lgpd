// components/ui/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0a1628]">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
