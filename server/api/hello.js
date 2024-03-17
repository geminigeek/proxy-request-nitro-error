export default defineEventHandler((event) => {
  // bad url or server down
  let url = "http://some-non-existent.url.domain"
  return proxyRequest(event, url)
})
