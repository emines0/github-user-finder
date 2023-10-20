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

// Get single user
export const getUser = async (login) => {
   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
         Authorization: `token ${GITGUB_TOKEN}`
      }
   })

   if (response.status === 404) {
      window.location = '/notfound'
   } else {
      /* this is what we need from response */
      const data = await response.json()

      return data
   }
}

// Get user repos results
export const getUserRepos = async (login) => {
   const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
   })

   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
         Authorization: `token ${GITGUB_TOKEN}`
      }
   })

   /* this is what we need from response */
   const data = await response.json()

   return data
}
