import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class UserService {
  async getPostHomePage(userID, page) {
    const response = await axios.get(
      API_URL + `post/homepage?userId=${userID}&page=${page}&size=10`,
      {
        headers: authHeader(),
      }
    );

    return response.data.data;
  }

  likePost(userId, postID) {
    return axios.post(API_URL + `post/like?userId=${userId}&postId=${postID}`, {
      headers: authHeader(),
    });
  }
  async getUser(userId) {
    const response = await axios.get(API_URL + `user?userId=${userId}`, {
      headers: authHeader(),
    });

    return response.data.data;
  }

  newPost(content, userId) {
    return axios.post(
      API_URL + "post",
      {content, userId},
      {
        headers: authHeader(),
      }
    );
  }

  addImgUser(userID, img) {
    return axios.post(
      API_URL + `user/upimg?userId=${userID}`,
      {
        img,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
  }

  async getPostUser(userID, page) {
    const response = await axios.get(
      API_URL + `post/user?userId=${userID}&page=${page}&size=10`,
      {
        headers: authHeader(),
      }
    );

    return response.data.data;
  }

  async getComment(postID, size) {
    const res = await axios.get(
      API_URL + `comment/post?postId=${postID}&page=0&size=${size}`,
      {
        headers: authHeader(),
      }
    );
    return res.data.data;
  }

  reportUser(userID) {
    return axios.put(API_URL + `report/user/${userID}`, {
      headers: authHeader(),
    });
  }

  reportPost(postID) {
    return axios.put(API_URL + `report/post/${postID}`, {
      headers: authHeader(),
    });
  }

  updateUser(id, firstName, lastName, bio, address, birthday) {
    return axios.put(
      API_URL + "user",
      {id, firstName, lastName, bio, address, birthday},
      {headers: authHeader()}
    );
  }
}

export default new UserService();
