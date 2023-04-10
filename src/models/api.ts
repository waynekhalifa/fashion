/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSocialLinkInput = {
  id?: string | null,
  accountID?: string | null,
  memberID?: string | null,
  name: string,
  icon: string,
  slug: string,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelSocialLinkConditionInput = {
  accountID?: ModelIDInput | null,
  memberID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelSocialLinkConditionInput | null > | null,
  or?: Array< ModelSocialLinkConditionInput | null > | null,
  not?: ModelSocialLinkConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SocialLink = {
  __typename: "SocialLink",
  id: string,
  accountID?: string | null,
  memberID?: string | null,
  name: string,
  icon: string,
  slug: string,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSocialLinkInput = {
  id: string,
  accountID?: string | null,
  memberID?: string | null,
  name?: string | null,
  icon?: string | null,
  slug?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteSocialLinkInput = {
  id: string,
  _version?: number | null,
};

export type CreateFeatureInput = {
  id?: string | null,
  name: string,
  icon: string,
  slug: string,
  singleName: string,
  precedence: string,
  featureID?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelFeatureConditionInput = {
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  singleName?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  featureID?: ModelIDInput | null,
  private?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFeatureConditionInput | null > | null,
  or?: Array< ModelFeatureConditionInput | null > | null,
  not?: ModelFeatureConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Feature = {
  __typename: "Feature",
  id: string,
  name: string,
  icon: string,
  slug: string,
  singleName: string,
  precedence: string,
  featureID?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateFeatureInput = {
  id: string,
  name?: string | null,
  icon?: string | null,
  slug?: string | null,
  singleName?: string | null,
  precedence?: string | null,
  featureID?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteFeatureInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountInput = {
  id?: string | null,
  domain: string,
  headerLogo?: string | null,
  headerLogoURL?: string | null,
  headerLogoWidth?: number | null,
  headerLogoHeight?: number | null,
  footerLogo?: string | null,
  footerLogoURL?: string | null,
  footerLogoWidth?: number | null,
  footerLogoHeight?: number | null,
  siteTitle: string,
  tagline: string,
  description: string,
  address: string,
  workingHours?: string | null,
  email?: string | null,
  phone_number?: string | null,
  siteAddress: string,
  features?: Array< string | null > | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelAccountConditionInput = {
  domain?: ModelStringInput | null,
  headerLogo?: ModelIDInput | null,
  headerLogoURL?: ModelStringInput | null,
  headerLogoWidth?: ModelIntInput | null,
  headerLogoHeight?: ModelIntInput | null,
  footerLogo?: ModelIDInput | null,
  footerLogoURL?: ModelStringInput | null,
  footerLogoWidth?: ModelIntInput | null,
  footerLogoHeight?: ModelIntInput | null,
  siteTitle?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  workingHours?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  siteAddress?: ModelStringInput | null,
  features?: ModelIDInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  domain: string,
  headerLogo?: string | null,
  headerLogoURL?: string | null,
  headerLogoWidth?: number | null,
  headerLogoHeight?: number | null,
  footerLogo?: string | null,
  footerLogoURL?: string | null,
  footerLogoWidth?: number | null,
  footerLogoHeight?: number | null,
  siteTitle: string,
  tagline: string,
  description: string,
  address: string,
  workingHours?: string | null,
  email?: string | null,
  phone_number?: string | null,
  siteAddress: string,
  features?: Array< string | null > | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAccountInput = {
  id: string,
  domain?: string | null,
  headerLogo?: string | null,
  headerLogoURL?: string | null,
  headerLogoWidth?: number | null,
  headerLogoHeight?: number | null,
  footerLogo?: string | null,
  footerLogoURL?: string | null,
  footerLogoWidth?: number | null,
  footerLogoHeight?: number | null,
  siteTitle?: string | null,
  tagline?: string | null,
  description?: string | null,
  address?: string | null,
  workingHours?: string | null,
  email?: string | null,
  phone_number?: string | null,
  siteAddress?: string | null,
  features?: Array< string | null > | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteAccountInput = {
  id: string,
  _version?: number | null,
};

export type UpdateUserInput = {
  id: string,
  accountID?: string | null,
  username?: string | null,
  preferred_username?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  phone_number?: string | null,
  phone_number_verified?: boolean | null,
  name?: string | null,
  nickname?: string | null,
  given_name?: string | null,
  middle_name?: string | null,
  family_name?: string | null,
  address?: string | null,
  birthDate?: string | null,
  gender?: string | null,
  locale?: string | null,
  picture?: string | null,
  website?: string | null,
  zoneInfo?: string | null,
  verification_code?: string | null,
  group?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  accountID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  preferred_username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  email_verified?: ModelBooleanInput | null,
  phone_number?: ModelStringInput | null,
  phone_number_verified?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  given_name?: ModelStringInput | null,
  middle_name?: ModelStringInput | null,
  family_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  locale?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  website?: ModelStringInput | null,
  zoneInfo?: ModelStringInput | null,
  verification_code?: ModelStringInput | null,
  group?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  accountID?: string | null,
  username: string,
  preferred_username: string,
  email: string,
  email_verified?: boolean | null,
  phone_number?: string | null,
  phone_number_verified?: boolean | null,
  name?: string | null,
  nickname?: string | null,
  given_name?: string | null,
  middle_name?: string | null,
  family_name?: string | null,
  address?: string | null,
  birthDate?: string | null,
  gender?: string | null,
  locale?: string | null,
  picture?: string | null,
  website?: string | null,
  zoneInfo?: string | null,
  verification_code?: string | null,
  group?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateMediaInput = {
  id?: string | null,
  accountID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  attachments?: Array< string | null > | null,
  attachmentsFiles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelMediaConditionInput = {
  accountID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  fileWidth?: ModelIntInput | null,
  fileHeight?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attachments?: ModelIDInput | null,
  attachmentsFiles?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
};

export type Media = {
  __typename: "Media",
  id: string,
  accountID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  attachments?: Array< string | null > | null,
  attachmentsFiles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMediaInput = {
  id: string,
  accountID?: string | null,
  fileUrl?: string | null,
  filename?: string | null,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  attachments?: Array< string | null > | null,
  attachmentsFiles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteMediaInput = {
  id: string,
  _version?: number | null,
};

export type CreateAttachmentInput = {
  id?: string | null,
  mediaID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelAttachmentConditionInput = {
  mediaID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  fileWidth?: ModelIntInput | null,
  fileHeight?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAttachmentConditionInput | null > | null,
  or?: Array< ModelAttachmentConditionInput | null > | null,
  not?: ModelAttachmentConditionInput | null,
};

export type Attachment = {
  __typename: "Attachment",
  id: string,
  mediaID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAttachmentInput = {
  id: string,
  mediaID?: string | null,
  fileUrl?: string | null,
  filename?: string | null,
  filetype?: string | null,
  fileSize?: number | null,
  fileWidth?: number | null,
  fileHeight?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteAttachmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateMenuInput = {
  id?: string | null,
  accountID: string,
  name: string,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelMenuConditionInput = {
  accountID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  accountID: string,
  name: string,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMenuInput = {
  id: string,
  accountID?: string | null,
  name?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteMenuInput = {
  id: string,
  _version?: number | null,
};

export type CreateMenuItemInput = {
  id?: string | null,
  menuID: string,
  type: string,
  pageID?: string | null,
  categoryID?: string | null,
  precedence?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelMenuItemConditionInput = {
  menuID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  precedence?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
};

export type MenuItem = {
  __typename: "MenuItem",
  id: string,
  menuID: string,
  type: string,
  pageID?: string | null,
  categoryID?: string | null,
  precedence?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMenuItemInput = {
  id: string,
  menuID?: string | null,
  type?: string | null,
  pageID?: string | null,
  categoryID?: string | null,
  precedence?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteMenuItemInput = {
  id: string,
  _version?: number | null,
};

export type CreatePageInput = {
  id?: string | null,
  accountID: string,
  pageID?: string | null,
  title: string,
  slug: string,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelPageConditionInput = {
  accountID?: ModelIDInput | null,
  pageID?: ModelStringInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
};

export type Page = {
  __typename: "Page",
  id: string,
  accountID: string,
  pageID?: string | null,
  title: string,
  slug: string,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePageInput = {
  id: string,
  accountID?: string | null,
  pageID?: string | null,
  title?: string | null,
  slug?: string | null,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeletePageInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  accountID: string,
  title: string,
  slug: string,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  posts?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  accountID: string,
  title: string,
  slug: string,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoryInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  slug?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateTagInput = {
  id?: string | null,
  accountID: string,
  title: string,
  slug: string,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  posts?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  accountID: string,
  title: string,
  slug: string,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTagInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  slug?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  posts?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  email: string,
  content?: string | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  content?: ModelStringInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  email: string,
  content?: string | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  email?: string | null,
  content?: string | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteCommentInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  accountID: string,
  title: string,
  slug: string,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  categories?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  categories?: ModelIDInput | null,
  tags?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  accountID: string,
  title: string,
  slug: string,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  categories?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  slug?: string | null,
  content?: string | null,
  excerpt?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  categories?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateTestimonialInput = {
  id?: string | null,
  accountID: string,
  title: string,
  slug: string,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelTestimonialConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTestimonialConditionInput | null > | null,
  or?: Array< ModelTestimonialConditionInput | null > | null,
  not?: ModelTestimonialConditionInput | null,
};

export type Testimonial = {
  __typename: "Testimonial",
  id: string,
  accountID: string,
  title: string,
  slug: string,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTestimonialInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  slug?: string | null,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteTestimonialInput = {
  id: string,
  _version?: number | null,
};

export type CreateSlideInput = {
  id?: string | null,
  accountID: string,
  title: string,
  precedence: string,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelSlideConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelSlideConditionInput | null > | null,
  or?: Array< ModelSlideConditionInput | null > | null,
  not?: ModelSlideConditionInput | null,
};

export type Slide = {
  __typename: "Slide",
  id: string,
  accountID: string,
  title: string,
  precedence: string,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSlideInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  precedence?: string | null,
  content?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  statusID?: string | null,
  visibilityID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteSlideInput = {
  id: string,
  _version?: number | null,
};

export type CreateSubscriberInput = {
  id?: string | null,
  accountID: string,
  email: string,
  deleted?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelSubscriberConditionInput = {
  accountID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSubscriberConditionInput | null > | null,
  or?: Array< ModelSubscriberConditionInput | null > | null,
  not?: ModelSubscriberConditionInput | null,
};

export type Subscriber = {
  __typename: "Subscriber",
  id: string,
  accountID: string,
  email: string,
  deleted?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSubscriberInput = {
  id: string,
  accountID?: string | null,
  email?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteSubscriberInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomContentInput = {
  id?: string | null,
  accountID: string,
  model: string,
  modelID: string,
  title: string,
  content: string,
  statusID?: string | null,
  visibilityID?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelCustomContentConditionInput = {
  accountID?: ModelIDInput | null,
  model?: ModelStringInput | null,
  modelID?: ModelIDInput | null,
  title?: ModelIDInput | null,
  content?: ModelStringInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCustomContentConditionInput | null > | null,
  or?: Array< ModelCustomContentConditionInput | null > | null,
  not?: ModelCustomContentConditionInput | null,
};

export type CustomContent = {
  __typename: "CustomContent",
  id: string,
  accountID: string,
  model: string,
  modelID: string,
  title: string,
  content: string,
  statusID?: string | null,
  visibilityID?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCustomContentInput = {
  id: string,
  accountID?: string | null,
  model?: string | null,
  modelID?: string | null,
  title?: string | null,
  content?: string | null,
  statusID?: string | null,
  visibilityID?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteCustomContentInput = {
  id: string,
  _version?: number | null,
};

export type CreateMemberInput = {
  id?: string | null,
  accountID: string,
  name: string,
  jobTitle?: string | null,
  bio?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelMemberConditionInput = {
  accountID?: ModelIDInput | null,
  name?: ModelIDInput | null,
  jobTitle?: ModelStringInput | null,
  bio?: ModelIDInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  accountID: string,
  name: string,
  jobTitle?: string | null,
  bio?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMemberInput = {
  id: string,
  accountID?: string | null,
  name?: string | null,
  jobTitle?: string | null,
  bio?: string | null,
  thumbnail?: string | null,
  thumbnailURL?: string | null,
  thumbnailWidth?: number | null,
  thumbnailHeight?: number | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteMemberInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotificationInput = {
  id?: string | null,
  accountID: string,
  actorID: string,
  notifierID: string,
  entityID: string,
  entityType: string,
  description: string,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelNotificationConditionInput = {
  accountID?: ModelIDInput | null,
  actorID?: ModelIDInput | null,
  notifierID?: ModelIDInput | null,
  entityID?: ModelIDInput | null,
  entityType?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  accountID: string,
  actorID: string,
  notifierID: string,
  entityID: string,
  entityType: string,
  description: string,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateNotificationInput = {
  id: string,
  accountID?: string | null,
  actorID?: string | null,
  notifierID?: string | null,
  entityID?: string | null,
  entityType?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteNotificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventInput = {
  id?: string | null,
  accountID: string,
  title: string,
  description: string,
  eventDate: string,
  eventTime: string,
  eventLocation: string,
  eventLocationURL?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type ModelEventConditionInput = {
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  eventTime?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventLocationURL?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  accountID: string,
  title: string,
  description: string,
  eventDate: string,
  eventTime: string,
  eventLocation: string,
  eventLocationURL?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEventInput = {
  id: string,
  accountID?: string | null,
  title?: string | null,
  description?: string | null,
  eventDate?: string | null,
  eventTime?: string | null,
  eventLocation?: string | null,
  eventLocationURL?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  _version?: number | null,
};

export type DeleteEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  accountID?: string | null,
  username: string,
  preferred_username: string,
  email: string,
  email_verified?: boolean | null,
  phone_number?: string | null,
  phone_number_verified?: boolean | null,
  name?: string | null,
  nickname?: string | null,
  given_name?: string | null,
  middle_name?: string | null,
  family_name?: string | null,
  address?: string | null,
  birthDate?: string | null,
  gender?: string | null,
  locale?: string | null,
  picture?: string | null,
  website?: string | null,
  zoneInfo?: string | null,
  verification_code?: string | null,
  group?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  accountID: string,
  name: string,
  email: string,
  subject?: string | null,
  message: string,
  deleted?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  accountID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  accountID: string,
  name: string,
  email: string,
  subject?: string | null,
  message: string,
  deleted?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageInput = {
  id: string,
  accountID?: string | null,
  name?: string | null,
  email?: string | null,
  subject?: string | null,
  message?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type ModelSocialLinkFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  memberID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelSocialLinkFilterInput | null > | null,
  or?: Array< ModelSocialLinkFilterInput | null > | null,
  not?: ModelSocialLinkFilterInput | null,
};

export type ModelSocialLinkConnection = {
  __typename: "ModelSocialLinkConnection",
  items:  Array<SocialLink | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  singleName?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  featureID?: ModelIDInput | null,
  private?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
};

export type ModelFeatureConnection = {
  __typename: "ModelFeatureConnection",
  items:  Array<Feature | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  domain?: ModelStringInput | null,
  headerLogo?: ModelIDInput | null,
  headerLogoURL?: ModelStringInput | null,
  headerLogoWidth?: ModelIntInput | null,
  headerLogoHeight?: ModelIntInput | null,
  footerLogo?: ModelIDInput | null,
  footerLogoURL?: ModelStringInput | null,
  footerLogoWidth?: ModelIntInput | null,
  footerLogoHeight?: ModelIntInput | null,
  siteTitle?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  workingHours?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  siteAddress?: ModelStringInput | null,
  features?: ModelIDInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  preferred_username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  email_verified?: ModelBooleanInput | null,
  phone_number?: ModelStringInput | null,
  phone_number_verified?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  given_name?: ModelStringInput | null,
  middle_name?: ModelStringInput | null,
  family_name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  locale?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  website?: ModelStringInput | null,
  zoneInfo?: ModelStringInput | null,
  verification_code?: ModelStringInput | null,
  group?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  fileWidth?: ModelIntInput | null,
  fileHeight?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attachments?: ModelIDInput | null,
  attachmentsFiles?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<Media | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDInput | null,
  mediaID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  fileWidth?: ModelIntInput | null,
  fileHeight?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAttachmentFilterInput | null > | null,
  or?: Array< ModelAttachmentFilterInput | null > | null,
  not?: ModelAttachmentFilterInput | null,
};

export type ModelAttachmentConnection = {
  __typename: "ModelAttachmentConnection",
  items:  Array<Attachment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMenuItemFilterInput = {
  id?: ModelIDInput | null,
  menuID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  precedence?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMenuItemFilterInput | null > | null,
  or?: Array< ModelMenuItemFilterInput | null > | null,
  not?: ModelMenuItemFilterInput | null,
};

export type ModelMenuItemConnection = {
  __typename: "ModelMenuItemConnection",
  items:  Array<MenuItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPageFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  pageID?: ModelStringInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  posts?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  posts?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  content?: ModelStringInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  excerpt?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  categories?: ModelIDInput | null,
  tags?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTestimonialFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTestimonialFilterInput | null > | null,
  or?: Array< ModelTestimonialFilterInput | null > | null,
  not?: ModelTestimonialFilterInput | null,
};

export type ModelTestimonialConnection = {
  __typename: "ModelTestimonialConnection",
  items:  Array<Testimonial | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  message?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSlideFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  content?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelSlideFilterInput | null > | null,
  or?: Array< ModelSlideFilterInput | null > | null,
  not?: ModelSlideFilterInput | null,
};

export type ModelSlideConnection = {
  __typename: "ModelSlideConnection",
  items:  Array<Slide | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriberFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSubscriberFilterInput | null > | null,
  or?: Array< ModelSubscriberFilterInput | null > | null,
  not?: ModelSubscriberFilterInput | null,
};

export type ModelSubscriberConnection = {
  __typename: "ModelSubscriberConnection",
  items:  Array<Subscriber | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCustomContentFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  model?: ModelStringInput | null,
  modelID?: ModelIDInput | null,
  title?: ModelIDInput | null,
  content?: ModelStringInput | null,
  statusID?: ModelStringInput | null,
  visibilityID?: ModelStringInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCustomContentFilterInput | null > | null,
  or?: Array< ModelCustomContentFilterInput | null > | null,
  not?: ModelCustomContentFilterInput | null,
};

export type ModelCustomContentConnection = {
  __typename: "ModelCustomContentConnection",
  items:  Array<CustomContent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  name?: ModelIDInput | null,
  jobTitle?: ModelStringInput | null,
  bio?: ModelIDInput | null,
  thumbnail?: ModelIDInput | null,
  thumbnailURL?: ModelStringInput | null,
  thumbnailWidth?: ModelIntInput | null,
  thumbnailHeight?: ModelIntInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  actorID?: ModelIDInput | null,
  notifierID?: ModelIDInput | null,
  entityID?: ModelIDInput | null,
  entityType?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  eventTime?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventLocationURL?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionSocialLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  memberID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialLinkFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFeatureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  singleName?: ModelSubscriptionStringInput | null,
  precedence?: ModelSubscriptionStringInput | null,
  featureID?: ModelSubscriptionIDInput | null,
  private?: ModelSubscriptionBooleanInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  domain?: ModelSubscriptionStringInput | null,
  headerLogo?: ModelSubscriptionIDInput | null,
  headerLogoURL?: ModelSubscriptionStringInput | null,
  headerLogoWidth?: ModelSubscriptionIntInput | null,
  headerLogoHeight?: ModelSubscriptionIntInput | null,
  footerLogo?: ModelSubscriptionIDInput | null,
  footerLogoURL?: ModelSubscriptionStringInput | null,
  footerLogoWidth?: ModelSubscriptionIntInput | null,
  footerLogoHeight?: ModelSubscriptionIntInput | null,
  siteTitle?: ModelSubscriptionStringInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  workingHours?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  siteAddress?: ModelSubscriptionStringInput | null,
  features?: ModelSubscriptionIDInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  preferred_username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  email_verified?: ModelSubscriptionBooleanInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  phone_number_verified?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  nickname?: ModelSubscriptionStringInput | null,
  given_name?: ModelSubscriptionStringInput | null,
  middle_name?: ModelSubscriptionStringInput | null,
  family_name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  birthDate?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  locale?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  zoneInfo?: ModelSubscriptionStringInput | null,
  verification_code?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  filename?: ModelSubscriptionStringInput | null,
  filetype?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  fileWidth?: ModelSubscriptionIntInput | null,
  fileHeight?: ModelSubscriptionIntInput | null,
  alternativeText?: ModelSubscriptionStringInput | null,
  caption?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  attachments?: ModelSubscriptionIDInput | null,
  attachmentsFiles?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  or?: Array< ModelSubscriptionMediaFilterInput | null > | null,
};

export type ModelSubscriptionAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mediaID?: ModelSubscriptionIDInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  filename?: ModelSubscriptionStringInput | null,
  filetype?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  fileWidth?: ModelSubscriptionIntInput | null,
  fileHeight?: ModelSubscriptionIntInput | null,
  alternativeText?: ModelSubscriptionStringInput | null,
  caption?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
};

export type ModelSubscriptionMenuItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  menuID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  pageID?: ModelSubscriptionIDInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  precedence?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
};

export type ModelSubscriptionPageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  pageID?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  excerpt?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPageFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  posts?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  posts?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  excerpt?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  categories?: ModelSubscriptionIDInput | null,
  tags?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionTestimonialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestimonialFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestimonialFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionSlideFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  precedence?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSlideFilterInput | null > | null,
  or?: Array< ModelSubscriptionSlideFilterInput | null > | null,
};

export type ModelSubscriptionSubscriberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubscriberFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubscriberFilterInput | null > | null,
};

export type ModelSubscriptionCustomContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  model?: ModelSubscriptionStringInput | null,
  modelID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  statusID?: ModelSubscriptionStringInput | null,
  visibilityID?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomContentFilterInput | null > | null,
};

export type ModelSubscriptionMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionIDInput | null,
  jobTitle?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionIDInput | null,
  thumbnail?: ModelSubscriptionIDInput | null,
  thumbnailURL?: ModelSubscriptionStringInput | null,
  thumbnailWidth?: ModelSubscriptionIntInput | null,
  thumbnailHeight?: ModelSubscriptionIntInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberFilterInput | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  actorID?: ModelSubscriptionIDInput | null,
  notifierID?: ModelSubscriptionIDInput | null,
  entityID?: ModelSubscriptionIDInput | null,
  entityType?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  eventDate?: ModelSubscriptionStringInput | null,
  eventTime?: ModelSubscriptionStringInput | null,
  eventLocation?: ModelSubscriptionStringInput | null,
  eventLocationURL?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type CreateSocialLinkMutationVariables = {
  input: CreateSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type CreateSocialLinkMutation = {
  createSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSocialLinkMutationVariables = {
  input: UpdateSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type UpdateSocialLinkMutation = {
  updateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSocialLinkMutationVariables = {
  input: DeleteSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type DeleteSocialLinkMutation = {
  deleteSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type CreateFeatureMutation = {
  createFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type UpdateFeatureMutation = {
  updateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type DeleteFeatureMutation = {
  deleteFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAttachmentMutationVariables = {
  input: CreateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type CreateAttachmentMutation = {
  createAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAttachmentMutationVariables = {
  input: UpdateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentMutation = {
  updateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAttachmentMutationVariables = {
  input: DeleteAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type DeleteAttachmentMutation = {
  deleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTestimonialMutationVariables = {
  input: CreateTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type CreateTestimonialMutation = {
  createTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTestimonialMutationVariables = {
  input: UpdateTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type UpdateTestimonialMutation = {
  updateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTestimonialMutationVariables = {
  input: DeleteTestimonialInput,
  condition?: ModelTestimonialConditionInput | null,
};

export type DeleteTestimonialMutation = {
  deleteTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSlideMutationVariables = {
  input: CreateSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type CreateSlideMutation = {
  createSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSlideMutationVariables = {
  input: UpdateSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type UpdateSlideMutation = {
  updateSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSlideMutationVariables = {
  input: DeleteSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type DeleteSlideMutation = {
  deleteSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSubscriberMutationVariables = {
  input: CreateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type CreateSubscriberMutation = {
  createSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSubscriberMutationVariables = {
  input: UpdateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type UpdateSubscriberMutation = {
  updateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSubscriberMutationVariables = {
  input: DeleteSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type DeleteSubscriberMutation = {
  deleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCustomContentMutationVariables = {
  input: CreateCustomContentInput,
  condition?: ModelCustomContentConditionInput | null,
};

export type CreateCustomContentMutation = {
  createCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCustomContentMutationVariables = {
  input: UpdateCustomContentInput,
  condition?: ModelCustomContentConditionInput | null,
};

export type UpdateCustomContentMutation = {
  updateCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCustomContentMutationVariables = {
  input: DeleteCustomContentInput,
  condition?: ModelCustomContentConditionInput | null,
};

export type DeleteCustomContentMutation = {
  deleteCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSocialLinkQueryVariables = {
  id: string,
};

export type GetSocialLinkQuery = {
  getSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSocialLinksQueryVariables = {
  filter?: ModelSocialLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialLinksQuery = {
  listSocialLinks?:  {
    __typename: "ModelSocialLinkConnection",
    items:  Array< {
      __typename: "SocialLink",
      id: string,
      accountID?: string | null,
      memberID?: string | null,
      name: string,
      icon: string,
      slug: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSocialLinksQueryVariables = {
  filter?: ModelSocialLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSocialLinksQuery = {
  syncSocialLinks?:  {
    __typename: "ModelSocialLinkConnection",
    items:  Array< {
      __typename: "SocialLink",
      id: string,
      accountID?: string | null,
      memberID?: string | null,
      name: string,
      icon: string,
      slug: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      name: string,
      icon: string,
      slug: string,
      singleName: string,
      precedence: string,
      featureID?: string | null,
      private?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFeaturesQuery = {
  syncFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      name: string,
      icon: string,
      slug: string,
      singleName: string,
      precedence: string,
      featureID?: string | null,
      private?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      domain: string,
      headerLogo?: string | null,
      headerLogoURL?: string | null,
      headerLogoWidth?: number | null,
      headerLogoHeight?: number | null,
      footerLogo?: string | null,
      footerLogoURL?: string | null,
      footerLogoWidth?: number | null,
      footerLogoHeight?: number | null,
      siteTitle: string,
      tagline: string,
      description: string,
      address: string,
      workingHours?: string | null,
      email?: string | null,
      phone_number?: string | null,
      siteAddress: string,
      features?: Array< string | null > | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountsQuery = {
  syncAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      domain: string,
      headerLogo?: string | null,
      headerLogoURL?: string | null,
      headerLogoWidth?: number | null,
      headerLogoHeight?: number | null,
      footerLogo?: string | null,
      footerLogoURL?: string | null,
      footerLogoWidth?: number | null,
      footerLogoHeight?: number | null,
      siteTitle: string,
      tagline: string,
      description: string,
      address: string,
      workingHours?: string | null,
      email?: string | null,
      phone_number?: string | null,
      siteAddress: string,
      features?: Array< string | null > | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      accountID?: string | null,
      username: string,
      preferred_username: string,
      email: string,
      email_verified?: boolean | null,
      phone_number?: string | null,
      phone_number_verified?: boolean | null,
      name?: string | null,
      nickname?: string | null,
      given_name?: string | null,
      middle_name?: string | null,
      family_name?: string | null,
      address?: string | null,
      birthDate?: string | null,
      gender?: string | null,
      locale?: string | null,
      picture?: string | null,
      website?: string | null,
      zoneInfo?: string | null,
      verification_code?: string | null,
      group?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      accountID?: string | null,
      username: string,
      preferred_username: string,
      email: string,
      email_verified?: boolean | null,
      phone_number?: string | null,
      phone_number_verified?: boolean | null,
      name?: string | null,
      nickname?: string | null,
      given_name?: string | null,
      middle_name?: string | null,
      family_name?: string | null,
      address?: string | null,
      birthDate?: string | null,
      gender?: string | null,
      locale?: string | null,
      picture?: string | null,
      website?: string | null,
      zoneInfo?: string | null,
      verification_code?: string | null,
      group?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      accountID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      fileWidth?: number | null,
      fileHeight?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      attachments?: Array< string | null > | null,
      attachmentsFiles?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMediaQuery = {
  syncMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      accountID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      fileWidth?: number | null,
      fileHeight?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      attachments?: Array< string | null > | null,
      attachmentsFiles?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAttachmentQueryVariables = {
  id: string,
};

export type GetAttachmentQuery = {
  getAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttachmentsQuery = {
  listAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      fileWidth?: number | null,
      fileHeight?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAttachmentsQuery = {
  syncAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      fileWidth?: number | null,
      fileHeight?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      accountID: string,
      name: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMenusQuery = {
  syncMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      accountID: string,
      name: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMenuItemQueryVariables = {
  id: string,
};

export type GetMenuItemQuery = {
  getMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuItemsQuery = {
  listMenuItems?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      menuID: string,
      type: string,
      pageID?: string | null,
      categoryID?: string | null,
      precedence?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMenuItemsQuery = {
  syncMenuItems?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      menuID: string,
      type: string,
      pageID?: string | null,
      categoryID?: string | null,
      precedence?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      accountID: string,
      pageID?: string | null,
      title: string,
      slug: string,
      content?: string | null,
      excerpt?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPagesQuery = {
  syncPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      accountID: string,
      pageID?: string | null,
      title: string,
      slug: string,
      content?: string | null,
      excerpt?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      posts?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      posts?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      posts?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      posts?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      email: string,
      content?: string | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      email: string,
      content?: string | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      content?: string | null,
      excerpt?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      categories?: Array< string | null > | null,
      tags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      content?: string | null,
      excerpt?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      categories?: Array< string | null > | null,
      tags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTestimonialQueryVariables = {
  id: string,
};

export type GetTestimonialQuery = {
  getTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTestimonialsQueryVariables = {
  filter?: ModelTestimonialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestimonialsQuery = {
  listTestimonials?:  {
    __typename: "ModelTestimonialConnection",
    items:  Array< {
      __typename: "Testimonial",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      content?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTestimonialsQueryVariables = {
  filter?: ModelTestimonialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTestimonialsQuery = {
  syncTestimonials?:  {
    __typename: "ModelTestimonialConnection",
    items:  Array< {
      __typename: "Testimonial",
      id: string,
      accountID: string,
      title: string,
      slug: string,
      content?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      accountID: string,
      name: string,
      email: string,
      subject?: string | null,
      message: string,
      deleted?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      accountID: string,
      name: string,
      email: string,
      subject?: string | null,
      message: string,
      deleted?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSlideQueryVariables = {
  id: string,
};

export type GetSlideQuery = {
  getSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSlidesQueryVariables = {
  filter?: ModelSlideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSlidesQuery = {
  listSlides?:  {
    __typename: "ModelSlideConnection",
    items:  Array< {
      __typename: "Slide",
      id: string,
      accountID: string,
      title: string,
      precedence: string,
      content?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSlidesQueryVariables = {
  filter?: ModelSlideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSlidesQuery = {
  syncSlides?:  {
    __typename: "ModelSlideConnection",
    items:  Array< {
      __typename: "Slide",
      id: string,
      accountID: string,
      title: string,
      precedence: string,
      content?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      statusID?: string | null,
      visibilityID?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSubscriberQueryVariables = {
  id: string,
};

export type GetSubscriberQuery = {
  getSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSubscribersQueryVariables = {
  filter?: ModelSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscribersQuery = {
  listSubscribers?:  {
    __typename: "ModelSubscriberConnection",
    items:  Array< {
      __typename: "Subscriber",
      id: string,
      accountID: string,
      email: string,
      deleted?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSubscribersQueryVariables = {
  filter?: ModelSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSubscribersQuery = {
  syncSubscribers?:  {
    __typename: "ModelSubscriberConnection",
    items:  Array< {
      __typename: "Subscriber",
      id: string,
      accountID: string,
      email: string,
      deleted?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomContentQueryVariables = {
  id: string,
};

export type GetCustomContentQuery = {
  getCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomContentsQueryVariables = {
  filter?: ModelCustomContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomContentsQuery = {
  listCustomContents?:  {
    __typename: "ModelCustomContentConnection",
    items:  Array< {
      __typename: "CustomContent",
      id: string,
      accountID: string,
      model: string,
      modelID: string,
      title: string,
      content: string,
      statusID?: string | null,
      visibilityID?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomContentsQueryVariables = {
  filter?: ModelCustomContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomContentsQuery = {
  syncCustomContents?:  {
    __typename: "ModelCustomContentConnection",
    items:  Array< {
      __typename: "CustomContent",
      id: string,
      accountID: string,
      model: string,
      modelID: string,
      title: string,
      content: string,
      statusID?: string | null,
      visibilityID?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      accountID: string,
      name: string,
      jobTitle?: string | null,
      bio?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMembersQuery = {
  syncMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      accountID: string,
      name: string,
      jobTitle?: string | null,
      bio?: string | null,
      thumbnail?: string | null,
      thumbnailURL?: string | null,
      thumbnailWidth?: number | null,
      thumbnailHeight?: number | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      accountID: string,
      actorID: string,
      notifierID: string,
      entityID: string,
      entityType: string,
      description: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotificationsQuery = {
  syncNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      accountID: string,
      actorID: string,
      notifierID: string,
      entityID: string,
      entityType: string,
      description: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      accountID: string,
      title: string,
      description: string,
      eventDate: string,
      eventTime: string,
      eventLocation: string,
      eventLocationURL?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      accountID: string,
      title: string,
      description: string,
      eventDate: string,
      eventTime: string,
      eventLocation: string,
      eventLocationURL?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
};

export type OnCreateSocialLinkSubscription = {
  onCreateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
};

export type OnUpdateSocialLinkSubscription = {
  onUpdateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
};

export type OnDeleteSocialLinkSubscription = {
  onDeleteSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    accountID?: string | null,
    memberID?: string | null,
    name: string,
    icon: string,
    slug: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon: string,
    slug: string,
    singleName: string,
    precedence: string,
    featureID?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    domain: string,
    headerLogo?: string | null,
    headerLogoURL?: string | null,
    headerLogoWidth?: number | null,
    headerLogoHeight?: number | null,
    footerLogo?: string | null,
    footerLogoURL?: string | null,
    footerLogoWidth?: number | null,
    footerLogoHeight?: number | null,
    siteTitle: string,
    tagline: string,
    description: string,
    address: string,
    workingHours?: string | null,
    email?: string | null,
    phone_number?: string | null,
    siteAddress: string,
    features?: Array< string | null > | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    accountID?: string | null,
    username: string,
    preferred_username: string,
    email: string,
    email_verified?: boolean | null,
    phone_number?: string | null,
    phone_number_verified?: boolean | null,
    name?: string | null,
    nickname?: string | null,
    given_name?: string | null,
    middle_name?: string | null,
    family_name?: string | null,
    address?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    locale?: string | null,
    picture?: string | null,
    website?: string | null,
    zoneInfo?: string | null,
    verification_code?: string | null,
    group?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia?:  {
    __typename: "Media",
    id: string,
    accountID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    attachments?: Array< string | null > | null,
    attachmentsFiles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnCreateAttachmentSubscription = {
  onCreateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnUpdateAttachmentSubscription = {
  onUpdateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnDeleteAttachmentSubscription = {
  onDeleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    fileWidth?: number | null,
    fileHeight?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    accountID: string,
    name: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuID: string,
    type: string,
    pageID?: string | null,
    categoryID?: string | null,
    precedence?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    id: string,
    accountID: string,
    pageID?: string | null,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    posts?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    email: string,
    content?: string | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    excerpt?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    categories?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnCreateTestimonialSubscription = {
  onCreateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnUpdateTestimonialSubscription = {
  onUpdateTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTestimonialSubscriptionVariables = {
  filter?: ModelSubscriptionTestimonialFilterInput | null,
};

export type OnDeleteTestimonialSubscription = {
  onDeleteTestimonial?:  {
    __typename: "Testimonial",
    id: string,
    accountID: string,
    title: string,
    slug: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    accountID: string,
    name: string,
    email: string,
    subject?: string | null,
    message: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSlideSubscriptionVariables = {
  filter?: ModelSubscriptionSlideFilterInput | null,
};

export type OnCreateSlideSubscription = {
  onCreateSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSlideSubscriptionVariables = {
  filter?: ModelSubscriptionSlideFilterInput | null,
};

export type OnUpdateSlideSubscription = {
  onUpdateSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSlideSubscriptionVariables = {
  filter?: ModelSubscriptionSlideFilterInput | null,
};

export type OnDeleteSlideSubscription = {
  onDeleteSlide?:  {
    __typename: "Slide",
    id: string,
    accountID: string,
    title: string,
    precedence: string,
    content?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    statusID?: string | null,
    visibilityID?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSubscriberSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriberFilterInput | null,
};

export type OnCreateSubscriberSubscription = {
  onCreateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSubscriberSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriberFilterInput | null,
};

export type OnUpdateSubscriberSubscription = {
  onUpdateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSubscriberSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriberFilterInput | null,
};

export type OnDeleteSubscriberSubscription = {
  onDeleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    accountID: string,
    email: string,
    deleted?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCustomContentSubscriptionVariables = {
  filter?: ModelSubscriptionCustomContentFilterInput | null,
};

export type OnCreateCustomContentSubscription = {
  onCreateCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCustomContentSubscriptionVariables = {
  filter?: ModelSubscriptionCustomContentFilterInput | null,
};

export type OnUpdateCustomContentSubscription = {
  onUpdateCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCustomContentSubscriptionVariables = {
  filter?: ModelSubscriptionCustomContentFilterInput | null,
};

export type OnDeleteCustomContentSubscription = {
  onDeleteCustomContent?:  {
    __typename: "CustomContent",
    id: string,
    accountID: string,
    model: string,
    modelID: string,
    title: string,
    content: string,
    statusID?: string | null,
    visibilityID?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    accountID: string,
    name: string,
    jobTitle?: string | null,
    bio?: string | null,
    thumbnail?: string | null,
    thumbnailURL?: string | null,
    thumbnailWidth?: number | null,
    thumbnailHeight?: number | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    accountID: string,
    actorID: string,
    notifierID: string,
    entityID: string,
    entityType: string,
    description: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    accountID: string,
    title: string,
    description: string,
    eventDate: string,
    eventTime: string,
    eventLocation: string,
    eventLocationURL?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
