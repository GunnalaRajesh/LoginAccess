import "./drawer.css";
import { useAuth0 } from "@auth0/auth0-react";

function Drawer() {
    const { isAuthenticated } = useAuth0();
  return (
    <div className="main">
        {isAuthenticated && (
            <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Submissions
      </button>
        )}
    
      <div
        className="offcanvas offcanvas-top"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Recent Submissions</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-2">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <a href="www.google.com">link here</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
