import axios from "axios";

const token = `eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImRvY3RvcklkIjoiMCIsImV4cCI6MTY3ODE4MTUyMSwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.WKlB0FL_bpEO-Dea0-YcbuKDXwSgCqRZ9-qlAf_OxeI`;
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const postData = async (postData) => {
  const { data } = await axios.post(
    `http://40.127.194.127:777/api/Emergency/AddOrUpdateArrivingMethod`,
    postData,
    config
  );
  return data;
};
