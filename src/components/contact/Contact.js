import styled from "styled-components"

const ContactWrapper = styled.div`
  width: 535px;
  height: 110px;
  border-radius: 32px;
  background-color: hsla(104, 100%, 100%, 1);
  margin-top: 4rem;
  box-shadow: 1px 2px 2px hsla(359, 11%, 92%, 0.2),
    2px 4px 4px hsla(359, 11%, 92%, 0.2), 4px 8px 8px hsla(359, 11%, 92%, 0.2),
    8px 16px 16px hsla(359, 11%, 92%, 0.2),
    16px 32px 32px hsla(359, 11%, 92%, 0.2);
  padding: clamp(0.75rem, 3%, 2rem);
  display: grid;
  justify-content: center;
  align-content: center;
  font-family: Silka;

  @media (max-width: 550px) {
    /* Tablets */
  }
  @media (max-width: 1100px) {
    /* Laptop */
    width: auto;
    height: auto;
    margin-top: 0;
  }
`

const ContactAnchor = styled.a`
  display: inline-block;
  display: grid;
  grid-auto-flow: column;
  min-height: 100%;
  text-decoration: none;
  font-size: 1.5rem;
  color: hsla(214, 24%, 19%, 1);
`

function Contact() {
  return (
    <ContactWrapper>
      <ContactAnchor
        aria-label="Company"
        title="Company"
        href="mailto:Ariel.Rodriguez@hey.com"
        target="_blank"
        rel="noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ marginRight: ".5rem" }}
        >
          <title>newsletter-dev</title>
          <g>
            <path
              fill="#A67C52"
              d="M11.88 18.32a0.49 0.49 0 0 1-0.27-0.08l-10.89-6.93a0.49 0.49 0 0 1 0.04-0.87l11.12-6.97 11.12 6.97a0.49 0.49 0 0 1 0.04 0.87l-10.89 6.93a0.49 0.49 0 0 1-0.27 0.08z"
            ></path>
            <path
              fill="#E6E6E6"
              d="M19.3 18.81h-14.85v-17.82a0.49 0.49 0 0 1 0.5-0.5h13.86a0.49 0.49 0 0 1 0.49 0.5v17.82z"
            ></path>
            <path
              fill="#B28F77"
              d="M22.77 23.27a0.51 0.51 0 0 1-0.12-0.02l-11.38-2.97 0.12-3.45 11.88-5.94v11.88a0.49 0.49 0 0 1-0.5 0.5z"
            ></path>
            <path
              fill="#C19F85"
              d="M22.77 23.27h-21.78a0.49 0.49 0 0 1-0.49-0.5v-11.88l22.51 11.45a0.49 0.49 0 0 1-0.24 0.93z"
            ></path>
            <path
              fill="#335262"
              d="M9.9 10.61l-2.33-2.34a0.49 0.49 0 0 1 0-0.69l2.33-2.34 0.7 0.7-1.98 1.98 1.98 1.98-0.7 0.7z"
            ></path>
            <path
              fill="#335262"
              d="M13.86 10.61l-0.7-0.71 1.98-1.98-1.98-1.98 0.7-0.7 2.33 2.34a0.49 0.49 0 0 1 0 0.69l-2.33 2.34z"
            ></path>
          </g>
        </svg>{" "}
        <span className="ml-4 text-sm font-bold tracking-normal text-gray-900 dark:text-gray-100 dark:text-gray uppercase sm:text-base md:text-lg duration-500">
          Ariel.Rodriguez@hey.com
        </span>
      </ContactAnchor>
    </ContactWrapper>
  )
}

export default Contact
