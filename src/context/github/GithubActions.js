const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITGUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// Get search results
export const searchUsers = async (text) => {
   const params = new URLSearchParams({
      q: text
   })

   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
         Authorization: `token ${GITGUB_TOKEN}`
      }
   })

   /* this is what we need from response */
   const { items } = await response.json()

   return items
}
