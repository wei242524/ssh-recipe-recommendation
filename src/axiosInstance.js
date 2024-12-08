import axios from "axios";

// 創建一個 axios 實例
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // 指向後端 API 的基礎路徑
  timeout: 5000, // 請求超時設置為 5 秒
  headers: {
    "Content-Type": "application/json", // 默認請求頭類型設置為 JSON
  },
});

// 添加一個請求攔截器（可選）
instance.interceptors.request.use(
  (config) => {
    // 在發送請求之前執行一些操作，例如添加授權令牌
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // 對請求錯誤做一些處理
    return Promise.reject(error);
  }
);

// 添加一個響應攔截器（可選）
instance.interceptors.response.use(
  (response) => {
    // 對響應數據做一些處理
    return response;
  },
  (error) => {
    // 對響應錯誤做一些處理，例如顯示錯誤信息
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default instance;

