import type { Ref } from 'vue'

type Articles = {
  description: string
  facebook_id: string
  followees_count: number
  followers_count: number
  github_login_name: [null, string]
  id: string
  items_count: number
  linkedin_id: [null, string]
  location: [null, string]
  name: [null, string]
  organization: [null, string]
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: [null, string]
  website_url: [null, string]
}

export const useArticles = () => {
  const articles: Ref<Array<Articles>> = useState('articles', () => [])

  const setArticles = (articles: Ref<Array<Articles>>) => (value: Array<Articles>) => {
    articles.value = value
  }

  return {
    articles: readonly(articles),
    setArticles: setArticles(articles),
  }
}
