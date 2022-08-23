function Sort(props) {

  const hdlChange = e => {
    props.setOptions(e.target.value)
    // props.fetchTodos()
  }
  return (
    <div className="d-flex gap-2 align-items-center">
      <small className="text-muted">Sort by</small>
      <select className="form-select form-select-sm" style={{ width: '8rem' }} onChange={hdlChange}>
        <option value="?sort=title">Title: A-Z</option>
        <option value="?sort=-title">Title: Z-A</option>
      </select>
    </div>
  );
}

export default Sort;
