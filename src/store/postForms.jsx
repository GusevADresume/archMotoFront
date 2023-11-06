import axios from "axios";
const postFormsData = async (formData) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/forms/", formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default postFormsData;
