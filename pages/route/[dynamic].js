import { useRouter } from "next/router";
// Always export default function "naming convention"

export default function fruit() {
  const router = useRouter();
  //   console.log(useRouter());
  //   console.log(pathname);
  console.log(router); //this will result in consoling two statements in client and server which contains both query object empty
  //   need to do pre-fetching

  return <div>Hello</div>;
}
