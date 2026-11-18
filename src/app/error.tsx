"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Try again
      </button>
    </div>
  )
}
