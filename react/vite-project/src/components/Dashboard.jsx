

function Dashboard() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
    <form>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-lg">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
        </div>
      </div>
    </form>
  </div>
  
  );
}

export default Dashboard;
