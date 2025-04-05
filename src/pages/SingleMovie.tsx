import { useLoaderData, useNavigation } from "react-router";

const SingleMovie = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData();

  console.log("SingleMovie", loaderData, navigation.state);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white">
        {loaderData?.data?.name}
      </h1>
      <p className="text-gray-300 mt-4">{loaderData?.data?.description}</p>
      <p className="text-gray-300 mt-4">{loaderData?.data?.longDescription}</p>
    </div>
  );
};

export default SingleMovie;
