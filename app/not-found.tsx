export default function NotFound() {
  return (
    <main className="p-0 items-center flex flex-row h-screen justify-center">
      <div className="m-8 rounded-3xl border border-gray-300/80 bg-gray-100/80 p-8 text-gray-800">
        <h1 className="text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
