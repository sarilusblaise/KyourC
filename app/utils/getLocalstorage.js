export const getLocalStorage = () => {
  if (typeof window !== undefined) {
    //localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark";
  }
  return "dark";
};
