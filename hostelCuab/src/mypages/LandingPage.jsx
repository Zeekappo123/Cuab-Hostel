import Button from "../components/button/Button";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Center content */}
      <div className="flex flex-col flex-grow justify-center items-center gap-16 px-4">
        <div className="text-2xl font-semibold text-gray-800">
          <p>Welcome to ABC hostel portal</p>
        </div>

        <div className="flex gap-6">
          <Link to="/login">
            <Button  value="Login" />
          </Link>

          <Link to="/signup">
            <Button value="Sign Up" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
