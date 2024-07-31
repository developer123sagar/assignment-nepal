/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axios.config";

// GET
export const getTasks = (api: string) => axiosInstance.get(api);
export const getLoginUserInfo = () => axiosInstance.get("client/info");
export const profile = () => axiosInstance.get("client/info");
export const getClientInfo = () => axiosInstance.get("client/list");
export const getOrganizerClient = (merchantKey: string) => axiosInstance.get(`client/list?merchantKey=${merchantKey}`);
export const getOrganizerWatcher = (merchantKey: string) => axiosInstance.get(`watcher/list?merchantKey=${merchantKey}`);
export const getOrganizerWorker = (merchantKey: string) => axiosInstance.get(`worker/list?merchantKey=${merchantKey}`);
export const getOrganizerList = () => axiosInstance.get('organiser')
export const getWatcherList = () => axiosInstance.get("watcher/list");
export const getAcceptedWorkerTasks = () => axiosInstance.get("task/WorkerAcceptedTask")

// POST
export const taskCreate = (form: any) =>
  axiosInstance.post("fonepayqr/fonepay_qr", form);

export const postData = (api: string, form: any) => axiosInstance.post(api, form)

export const validateQRCode = (data: any) => axiosInstance.post("fonepayqr/validation-qrcode", data)

export const authFormSubmit = (api: string, form: any) =>
  axiosInstance.post(`${api}`, form);

export const changepassword = (form: any) =>
  axiosInstance.post("allUser/change_password", form);

export const workerLogin = (form: any) =>
  axiosInstance.post("worker/register", form);

export const forgotPassword = (data: any) =>
  axiosInstance.post("allUser/forgot_password", data)
export const resetPassword = (form: any) =>
  axiosInstance.post("allUser/reset_password", form);

export const acceptTask = (api: string, form: any) => axiosInstance.post(`task/${api}`, form);
export const workerAcceptTask = (form: any) => axiosInstance.post("task/workerAccept", form);
export const postCyberSource = (form: any) => axiosInstance.post("cbs/cybersource", form)
export const postCyberSourceSignature = (form: any) => axiosInstance.post("https://testsecureacceptance.cybersource.com/pay", form)

// DELETE
export const deactivateAccount = (data: any) =>
  axiosInstance.delete("client/deactivate_account", data);
