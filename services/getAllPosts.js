
const NOTION_BLOG_ID = '6bcf8a5fe0be4de48afa863f65f8047a?v=4467232d03384b35b0db263443ac2688'

const getAllPosts = async () => {
    return await fetch(
      `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
    ).then((res) => res.json());
}

export default getAllPosts;