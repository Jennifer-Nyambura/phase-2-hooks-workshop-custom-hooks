import { useEffect } from "react";

/* ✅ Custom Hook with Extra Credit */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/* ✅ Component using the hook */
export default function Home() {
  useDocumentTitle("Welcome to the home page!");

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  );
}
