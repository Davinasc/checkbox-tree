import { useCategories } from './queries/useCategories';
import CheckboxTree from './components/CheckboxTree';

export default function App() {
  const { data, error, isLoading } = useCategories();

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div>
      <CheckboxTree items={data?.data.categories} />
    </div>
  );
}
