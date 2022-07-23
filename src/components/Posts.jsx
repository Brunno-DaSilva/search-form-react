const Post = ({ region, name, flags }) => {
  return (
    <article>
      <img src={flags} alt={name.common} />
      <h2>{name}</h2>
      <p>{region}</p>
    </article>
  );
};
export default Post;
