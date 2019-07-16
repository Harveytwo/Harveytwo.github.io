export const GetArticles = (nextPage) => `
{
  repository(owner: "Harveytwo", name: "the-game-blog") {
    issues(${nextPage} filterBy: {createdBy: "Harveytwo",states: OPEN}, orderBy: {field: CREATED_AT, direction: DESC}, first: 100) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        number
        body
        createdAt
        labels(first: 5) {
          nodes {
            color
            name
          }
        }
        comments {
          totalCount
        }
        reactions(content: THUMBS_UP) {
          totalCount
        }
      }
    }
  }
}        
`

export const GetUserInfo = () => `
{
  viewer {
    name
    avatarUrl
    login
  }
}
`
