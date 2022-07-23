import Post from "./Posts";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map(({ name, region, flags }) => (
    <Post
      key={name.common}
      region={region}
      name={name.common}
      flags={flags.png}
    />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return <main>{content}</main>;
};

export default ListPage;
