export type Course={id:string;name:string;price:number;duration:string;modules:string[];description:string;image:string;sellerLink:string;status:string};
export type Service={id:string;title:string;description:string;startingPrice:number;features:string[];portfolioImages:string[]};
export type Lead={id:string;createdAt:string;name:string;businessName:string;phone:string;email:string;serviceNeeded:string;budget:string;description:string;status:string};
export const seller=process.env.SELLER_LINK||'https://selar.com/b89u521s5s';
export const bot={workspaceId:'wkspace_01M2R9YDBR2FF6R9KNK6QJNAT0',botId:'6a635d30-54f8-429d-a011-9de82c326183',kbId:'kb_01M2RJKA7MSDFWNPYRV1N73C96',kbFile:'file_01M2RNSHFC796SY0RZZT9GGY2E'};
