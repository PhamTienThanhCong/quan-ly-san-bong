import { OUR_TEAM } from "@quanlysanbong/constants/MainContent";

const OurTeamComponent = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Nhà phát triển</h4>
          <h1 className="display-5 mb-4">Đội ngũ phát triển của chúng tôi</h1>
          <p className="mb-0">
            Chúng tôi là một nhóm những người trẻ, năng động, sáng tạo và đầy nhiệt huyết. Chúng tôi luôn cố gắng hoàn
            thiện bản thân và đem lại những sản phẩm tốt nhất cho khách hàng.
          </p>
        </div>
        <div className="row g-4">
          {OUR_TEAM.map((team) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s" key={team.id}>
              <div className="team-item">
                <div className="team-img">
                  <img src={team.img} className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">{team.name}</h4>
                  <p className="mb-0">{team.profession}</p>
                </div>
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href={team.facebook || "#"}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href={team.tiktok || "#"}>
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href={team.linkedin || "#"}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href={team.instagram || "#"}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
