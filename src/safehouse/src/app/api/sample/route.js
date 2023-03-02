export async function GET(request, { params }) {
  console.log(params);
  return new Response("Hello, Next.js!");
}
