export default function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const start = lowerText.indexOf(lowerQuery);

  if (start === -1) return text;
  const end = start + query.length;

  return (
    <>
      {text.slice(0, start)}
      <span className="bg-yellow-200 text-gray-900 rounded px-0.5">
        {text.slice(start, end)}
      </span>
      {text.slice(end)}
    </>
  );
}
