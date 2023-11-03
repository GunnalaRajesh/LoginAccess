function Dashboard() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <form>
        <div style={{ padding: "20px" }} className="form-group row">
          <label className="col-sm-2 col-form-label col-form-label-lg">
            Question Title :
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="Title"
            />
          </div>
        </div>

        <div style={{ padding: "20px" }} className="form-group row">
          <label className="col-sm-2 col-form-label col-form-label-lg">
            Website link :
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="link"
            />
          </div>
        </div>

        <div style={{ padding: "20px" }} className="form-group row">
          <label className="col-sm-2 col-form-label col-form-label-lg">
            Description :
          </label>
          <div className="col-sm-10">
            <textarea
              style={{ height: "300px" }}
              className="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="nik ardam ayindi rayi"
            ></textarea>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            style={{ padding: "10px" }}
            className="btn btn-primary btn-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
