import styled from "styled-components"

const BlogPostWrapper = styled.div`
  width: 350px;
  background-color: hsla(104, 100%, 100%, 1);
  border-radius: 32px;
  padding: clamp(0.75rem, 3%, 2rem);
  font-family: Silka;
  color: hsla(214, 24%, 19%, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: clamp(1.5rem, 3%, 2rem);
  word-break: break-word;

  box-shadow: 1px 2px 2px hsla(359, 11%, 92%, 0.2),
    2px 4px 4px hsla(359, 11%, 92%, 0.2), 4px 8px 8px hsla(359, 11%, 92%, 0.2),
    8px 16px 16px hsla(359, 11%, 92%, 0.2),
    16px 32px 32px hsla(359, 11%, 92%, 0.2);
  margin: auto;
`

const BlogPostTitle = styled.h1`
  font-size: 1.25rem;
`

const BlogPostContent = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: hsla(214, 24%, 19%, 0.7);
`

const BlogPostLink = styled.a`
  display: block;
  text-align: right;
  color: hsla(220, 3%, 63%, 1);
`

function BlogPost() {
  return (
    <BlogPostWrapper>
      <BlogPostTitle>Bloging, Documentation, and walkthroughs.</BlogPostTitle>
      <BlogPostContent>
        If you read something that may interest you or someone you know, feel
        free to share!{" "}
      </BlogPostContent>
      <BlogPostLink target="_blank" href="https://hashnode.com/@ArielRodriguez">
        &rarr; Read More
      </BlogPostLink>
      {/* <BlogPostButton role="button">Hashnode</BlogPostButton> */}
    </BlogPostWrapper>
  )
}

export default BlogPost
