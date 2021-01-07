import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ReactComponent as GlitchIcon } from "../data/icons/glitch.svg";
import styled from "styled-components";
import Link from "next/link";
const NotFoundDiv = styled.div`
  color: #fff;
  padding: 15rem;
  .flex {
    display: flex;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    color: #a8b2d1;
    font-size: 1.5rem;
  }
  button {
    border: 1px solid var(--color-text-secondary);
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default function NotFound() {
  const { pathname } = useRouter();

  return (
    <Layout location={pathname}>
      <NotFoundDiv>
        <div>
          <div className="flex">
            <div>
              <GlitchIcon />
            </div>
            <div className="content">
              <p>Sorry. Unless you’ve got a time machine, It is unavailable.</p>
              <Link href="/">
                <button>
                  <div>
                    <div>Go Back Homepage</div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </NotFoundDiv>
    </Layout>
  );
}
