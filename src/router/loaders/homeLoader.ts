import { LoaderFunctionArgs, redirect } from "react-router-dom";

export function homeLoader(params: LoaderFunctionArgs) {
  const pathname = new URL(params.request.url).pathname;

  if (pathname === "/") return redirect("/home");

  return params;
}
