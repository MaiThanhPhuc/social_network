import avatarDefault from "../../Resource/Image/avatar.png";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";

const Topten = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [topten, setTopTen] = useState([]);
  const fetchDataTopTen = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://socialnetwork999.herokuapp.com/api/user/topFollower",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const payload = JSON.parse(result).data;
        setTopTen(payload);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchDataTopTen();
  }, []);

  return (
    <>
      <div className=" p-3 bg-white mb-4 rounded ">
        <div className="heading font-medium text-[15px] text-black mb-2">
          Top 10 most followed people
        </div>

        {topten.map((data, i) => (
          <div key={i} className="flex justify-between items-center p-1">
            <div className="flex items-center">
              <button className="avatar">
                <div className="w-[40px] rounded-full">
                  <img
                    src={data.imageUrl !== null ? data.imageUrl : avatarDefault}
                    alt="avatar"
                  />
                </div>
              </button>
              <div className="ml-2 flex flex-col ">
                <div className="text-sm text-black font-medium">
                  {data.lastName + " " + data.firstName}
                </div>
                <div className="text-xs text-black/70">
                  {data.countFollower} follower
                </div>
              </div>
            </div>
            <Link
              to={`/user/${data.id}`}
              className="text-sm font-medium hover:underline text-primaryblue"
            >
              Go to profile
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Topten;
