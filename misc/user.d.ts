import { License } from './auth'

export type User = {
  user_id: string;
  license_id: string;
  user_firstname: string;
  user_lastname: string;
  user_phone: string;
  user_email: string;
  user_birthday: string | null;
  user_username: string;
  user_password: string;
  user_address: string;
  user_img: string;
  user_status: string;
  images?: { user_img: { src: string, name: string } };
  license?: License;
};

export type UserPosition = {
  user_position_id: string;
  user_position_name: string;
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};
export type Banner = {
  banner_id: string;
  banner_name: string;
  banner_detail: string;
  banner_img?: string;
  banner_lists?: BannerList[]
  images?: { banner_img: { src: string, name: string } };
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};

export type BannerList = {
  banner_list_id: string,
  banner_id: string,
  banner_list_name: string
  addby?: string
  adddate?: Date,
  updateby?: string
  lastupdate?: string,
};

export type Portfolio = {
  portfolio_id: string;
  portfolio_name: string;
  portfolio_detail: string;
  portfolio_lists?: PortfolioList[];
  images?: { portfolio_img: { src: string, name: string } };
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};

export type PortfolioList = {
  portfolio_list_id: string,
  portfolio_id: string,
  portfolio_list_detail: string
  portfolio_list_img?: string;
  images?: { portfolio_list_img: { src: string, name: string } };
  addby?: string
  adddate?: Date,
  updateby?: string
  lastupdate?: string,
};

export type Skill = {
  skill_id: string;
  skill_name: string;
  skill_detail: string;
  skill_Lists?: SkillList[];
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};

export type SkillList = {
  skill_list_id: string,
  skill_id: string,
  skill_list_name: string
  skill_list_img?: string;
  images?: { skill_list_img: { src: string, name: string , skill_list_id: string } };
  addby?: string
  adddate?: Date,
  updateby?: string
  lastupdate?: string,
};


export type Experience = {
  experience_id: string;
  experience_name: string;
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};

export type Product = {
  product_id: string;
  product_name: string;
  product_detail: string;
  product_img?: string;
  images?: { product_img: { src: string, name: string } };
  addby?: string,
  adddate?: Date,
  updateby?: string,
  lastupdate?: string,
};

// export type ListImg = {
//   list_img?: string;
//   images?: { product_img: { src: string, name: string } };
// };