import {useListTestsQuery} from '../../graphql/dist/client';

const Items = () => {
  const { data: { tests = [] } = {} } = useListTestsQuery();

  return (
    <div>
      <h2>List</h2>
      {tests.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}: {item.text}</p>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <Items />
  )
}

export default Index