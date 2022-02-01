import './SearchBox.css';

export const SearchBox = (props: any) => {
  const outputTags = (event: any) => {
    props.searchCallback(event.target.search.value);
    event.preventDefault();
  };
  return (
    <>
      <h1>
        <span className="blue">Flick</span>
        <span className="purple">r</span>
        <span className="slim"> tag search</span>
      </h1>
      <div className="searchbox">
        <form action="" onSubmit={outputTags}>
          <input
            className="input"
            name="search"
            type="text"
            placeholder="Search flickr by tags, comma separated"
          />
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
    </>
  );
};
