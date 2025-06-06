import ApiMethods from "./ApiMethods";

export const getAllSettings = () => {
  const url = 'settings';
  return ApiMethods.get(url);
};

export const getApplicationsOpenStatus = () => {
  const url = 'settings/applications-open';
  return ApiMethods.get(url);
}; 