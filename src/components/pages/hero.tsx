import { useParams, Params } from 'react-router-dom';

const Document: React.FC = () => {
  const { id } = useParams<Params>();

  return <div>{`hero ${id}`}</div>;
};

export default Document;
