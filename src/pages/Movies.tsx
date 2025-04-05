import { Link } from "react-router";
import { demoData } from "../demoData";

type MovieType = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  type: string;
};

const Movies = () => {
  const newData = demoData;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white">Movies</h1>
      <div className="py-8 flex flex-wrap gap-4 overflow-hidden">
        {newData?.map((e, i) => (
          <MovieLinks data={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

const MovieLinks = ({ data }: { data: MovieType }) => {
  return (
    <Link
      className="text-white p-4 border rounded hover:border-dashed"
      to={`/movies/${data?.id}`}
    >
      <span>{data?.name}</span>
    </Link>
  );
};
