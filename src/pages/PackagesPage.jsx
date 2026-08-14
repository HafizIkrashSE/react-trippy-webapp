import Packages from "../components/Packages";
import packagesImage from "../assets/images/package1.jpg";

function PackagesPage() {
  return (
    <>
      <div
        className="page-header details-page-header"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${packagesImage})`,
        }}
      >
        <h1>Travel Packages</h1>
        <p>Choose your next destination</p>
      </div>

      <Packages />
    </>
  );
}

export default PackagesPage;
