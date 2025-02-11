import { WEB_NAME } from "@quanlysanbong/constants/MainContent";

const HeaderComponent = () => {
  return (
    <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
            <h1 className="text-primary"><img src="./img/logo.png" className="me-3" alt="Logo" style={{height: "50px"}}/>{WEB_NAME}</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <a href="blog.html" className="nav-item nav-link">Blogs</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                        <span className="dropdown-toggle">Pages</span>
                    </a>
                    <div className="dropdown-menu m-0">
                        <a href="feature.html" className="dropdown-item">Our Features</a>
                        <a href="team.html" className="dropdown-item">Our team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="offer.html" className="dropdown-item">Our offer</a>
                        <a href="FAQ.html" className="dropdown-item">FAQs</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
        </div>
    </nav>

    <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image"/>
            <div className="carousel-caption">
                <div className="container">
                    <div className="row gy-0 gx-5">
                        <div className="col-lg-0 col-xl-5"></div>
                        <div className="col-xl-7 animated fadeInLeft">
                            <div className="text-sm-center text-md-end">
                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Stocker</h4>
                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy... 
                                </p>
                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                    <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                                    <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                </div>
                                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                                    <h2 className="text-white me-2">Follow Us:</h2>
                                    <div className="d-flex justify-content-end ms-2">
                                        <a className="btn btn-md-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-carousel-item">
            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image"/>
            <div className="carousel-caption">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 animated fadeInUp">
                            <div className="text-center">
                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Stocker</h4>
                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy... 
                                </p>
                                <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                    <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                                    <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="text-white me-2">Follow Us:</h2>
                                    <div className="d-flex justify-content-end ms-2">
                                        <a className="btn btn-md-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-md-square btn-light rounded-circle ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default HeaderComponent;