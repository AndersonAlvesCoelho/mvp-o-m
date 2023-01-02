import StepsForm from "./StepsForm";

function Heroe() {
  return (
    <div id="hero-block" className="hero-block">
      <div
        id="hero-carousel"
        className="hero-carousel carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item-1 carousel-item active"></div>
          <div className="carousel-item-2 carousel-item"></div>
          <div className="carousel-item-3 carousel-item"></div>
        </div>
      </div>
      <div className="hero-block-mask"></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="hero-text-block">
              <h1 className="hero-heading mb-2">Maya O&M</h1>

              <div className="hero-intro mb-4">
                ECONOMIZE TEMPO E DINHEIRO
                <br />
                COM NOSSAS SOLUÇÕES!
              </div>
              <div className="hero-cta">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://api.whatsapp.com/send?phone=5531982053474"
                  target="_blank"
                >
                  Contrate agora
                </a>
              </div>
            </div>
          </div>
          <div className="col hero-text-block">
            <div className="card mb-4 rounded-3 shadow-sm border-primary text-bg-light">
              <StepsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroe;
