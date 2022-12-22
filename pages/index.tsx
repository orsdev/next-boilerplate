import { fetcher } from "@/config";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";

export const getPost = async (id: number) => {
  return await fetcher({
    method: "GET",
    url: `/todos/${id}`,
  });
};

export default function Home() {
  const { data: todo } = useQuery({
    queryKey: "post",
    queryFn: () => getPost(1),
    onError(err) {
      alert("error dey");
    },
  });

  return (
    <div className="container">
      <h1 className="text-red-400"> Home </h1>
      <ul className="mt-4 p-4">
        <li>{todo?.title}</li>
      </ul>
    </div>
  );
}

Home.meta = {
  title: "Home",
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", () => getPost(1));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
