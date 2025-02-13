import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

const UserAppLayout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default UserAppLayout;
