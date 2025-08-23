import React, { createContext, useContext, useState } from "react";
type DataContextType = {
  data: any;
  setData: React.Dispatch<any>;
  detail: any;
  setDetail: React.Dispatch<any>;
  sendNewRepositoryDetail: any;
  setSendNewRepositoryDetail: React.Dispatch<any>;
  saveData: any;
  setSaveData: React.Dispatch<any>;
  InsightDetail: any;
  setInsightDetail: React.Dispatch<any>;
  copyFiles: any;
  setCopyFiles: React.Dispatch<any>;
  CTIReport: any;
  setCTIReport: React.Dispatch<any>;
  chatScreen: any;
  setChatScreen: React.Dispatch<any>;
  openThreat: any;
  setOpenThreat: React.Dispatch<any>;
  ctiFileName: any;
  setCtiFileName: React.Dispatch<any>;
  HuntToaster: any;
  setHuntToaster: React.Dispatch<any>;
  ResultToaster: any;
  setResultToaster: React.Dispatch<any>;
  Faildname: any;
  setHuntFaild: React.Dispatch<any>;
};
const DataContext = createContext<DataContextType | null>(null);
interface props {
  children: any;
}
const DataProvider = ({ children }: props) => {
  const [data, setData] = useState<any>(null);
  const [detail, setDetail] = useState<any>(null);
  const [sendNewRepositoryDetail, setSendNewRepositoryDetail] =
    useState<any>(null);
  const [saveData, setSaveData] = useState<any>(null);
  const [InsightDetail, setInsightDetail] = useState<any>(null);
  const [copyFiles, setCopyFiles] = useState<any>(null);
  const [CTIReport, setCTIReport] = useState<any>(null);
  const [chatScreen, setChatScreen] = useState<any>(null);
  const [openThreat, setOpenThreat] = useState<any>(null);
  const [ctiFileName, setCtiFileName] = useState<any>(null);
  const [HuntToaster, setHuntToaster] = useState<any>(null);
  const [ResultToaster, setResultToaster] = useState<any>(null);
  const [Faildname, setHuntFaild] = useState<any>(null as any);
  return (
    <div>
      <DataContext.Provider
        value={{
          data,
          setData,
          detail,
          setDetail,
          sendNewRepositoryDetail,
          setSendNewRepositoryDetail,
          saveData,
          setSaveData,
          InsightDetail,
          setInsightDetail,
          copyFiles,
          setCopyFiles,
          CTIReport,
          setCTIReport,
          chatScreen,
          setChatScreen,
          openThreat,
          setOpenThreat,
          ctiFileName,
          setCtiFileName,
          HuntToaster,
          setHuntToaster,
          ResultToaster,
          setResultToaster,
          Faildname,
          setHuntFaild,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
export default DataProvider;
export const useData = () => useContext(DataContext);
