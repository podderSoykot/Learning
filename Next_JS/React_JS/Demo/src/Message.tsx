function Message() {
  const name1 = "";
  const name2 = "";

  if (name1.trim() && name2.trim()) {
    return (
      <h1>
        Helloo
        {name1}
        {name2}
      </h1>
    );
  }

  return <h1>Hello World!</h1>;
}

export default Message;
