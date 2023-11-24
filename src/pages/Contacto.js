import React from "react";
function Contacto() {
return (
    <>
      <div className="bg-light rounded-4 py-5 px-4 px-md-5">
        <div className="text-center mb-5">
          <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
            <i className="bi bi-envelope"></i>
          </div>
          <h1 className="fw-bolder">Get in touch</h1>
          <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>  
<br></br>
<center>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
         
);
}

export default Contacto;
