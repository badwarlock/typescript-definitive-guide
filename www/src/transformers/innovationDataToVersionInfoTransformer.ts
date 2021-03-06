import * as DateUtils from "../utils/date-utils";
import { IWinPageContentData } from "../types/IWhatIsNewToc";
import { toVersionInfo } from "../utils/version-utils";

export type ReleaseInfo={
  stage:string;
  version:string;
  updateVersion: string;
  dateRelease:string;
  datePublication:string;
}
export type VersionInfoMeta = ReleaseInfo & { count: number; };

export const innovationDataToVersionInfoTransformer = ( dataAll: IWinPageContentData ):VersionInfoMeta[] => {
  let counts = dataAll.innovations.reduce( ( hash, innovation ) => {
    if ( !hash.hasOwnProperty( innovation.version ) ) {
      hash[ innovation.version ] = 0;
    }

    hash[ innovation.version ]++;

    return hash;
  }, {} as Record<string, number> );
  let releaseHistoryAll = [...dataAll.releaseHistory]
    .sort((a, b) => Date.parse(b.datePublication) - Date.parse(a.datePublication));


  let versionInfoAll = releaseHistoryAll.map( versionInfo => {
    let version = toVersionInfo(versionInfo.version);

    return {
      stage: version.preReleaseName,
      version: versionInfo.version,
      updateVersion: version.updateVersion,
      dateRelease: DateUtils.toAppShortDateFormat( versionInfo.dateRelease ),
      datePublication: DateUtils.toAppShortDateFormat( versionInfo.datePublication ),
      count: counts[ versionInfo.version ] ?? 0
    }
  }  );


  return versionInfoAll;
};
