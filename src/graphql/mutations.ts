/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSocialLink = /* GraphQL */ `
  mutation CreateSocialLink(
    $input: CreateSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    createSocialLink(input: $input, condition: $condition) {
      id
      accountID
      memberID
      name
      icon
      slug
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSocialLink = /* GraphQL */ `
  mutation UpdateSocialLink(
    $input: UpdateSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    updateSocialLink(input: $input, condition: $condition) {
      id
      accountID
      memberID
      name
      icon
      slug
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSocialLink = /* GraphQL */ `
  mutation DeleteSocialLink(
    $input: DeleteSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    deleteSocialLink(input: $input, condition: $condition) {
      id
      accountID
      memberID
      name
      icon
      slug
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
      id
      name
      icon
      slug
      singleName
      precedence
      featureID
      private
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
      id
      name
      icon
      slug
      singleName
      precedence
      featureID
      private
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
      id
      name
      icon
      slug
      singleName
      precedence
      featureID
      private
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      domain
      headerLogo
      headerLogoURL
      headerLogoWidth
      headerLogoHeight
      footerLogo
      footerLogoURL
      footerLogoWidth
      footerLogoHeight
      siteTitle
      tagline
      description
      address
      workingHours
      email
      phone_number
      siteAddress
      features
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      domain
      headerLogo
      headerLogoURL
      headerLogoWidth
      headerLogoHeight
      footerLogo
      footerLogoURL
      footerLogoWidth
      footerLogoHeight
      siteTitle
      tagline
      description
      address
      workingHours
      email
      phone_number
      siteAddress
      features
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      domain
      headerLogo
      headerLogoURL
      headerLogoWidth
      headerLogoHeight
      footerLogo
      footerLogoURL
      footerLogoWidth
      footerLogoHeight
      siteTitle
      tagline
      description
      address
      workingHours
      email
      phone_number
      siteAddress
      features
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      accountID
      username
      preferred_username
      email
      email_verified
      phone_number
      phone_number_verified
      name
      nickname
      given_name
      middle_name
      family_name
      address
      birthDate
      gender
      locale
      picture
      website
      zoneInfo
      verification_code
      group
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      accountID
      username
      preferred_username
      email
      email_verified
      phone_number
      phone_number_verified
      name
      nickname
      given_name
      middle_name
      family_name
      address
      birthDate
      gender
      locale
      picture
      website
      zoneInfo
      verification_code
      group
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      accountID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      attachments
      attachmentsFiles
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      accountID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      attachments
      attachmentsFiles
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      accountID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      attachments
      attachmentsFiles
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
      id
      mediaID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
      id
      mediaID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
      id
      mediaID
      fileUrl
      filename
      filetype
      fileSize
      fileWidth
      fileHeight
      alternativeText
      caption
      description
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      accountID
      name
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      accountID
      name
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      accountID
      name
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
      id
      menuID
      type
      pageID
      categoryID
      precedence
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
      id
      menuID
      type
      pageID
      categoryID
      precedence
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
      id
      menuID
      type
      pageID
      categoryID
      precedence
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
      id
      accountID
      pageID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
      id
      accountID
      pageID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
      id
      accountID
      pageID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      description
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      posts
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      email
      content
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      email
      content
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      email
      content
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      categories
      tags
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      categories
      tags
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      excerpt
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      categories
      tags
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTestimonial = /* GraphQL */ `
  mutation CreateTestimonial(
    $input: CreateTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    createTestimonial(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTestimonial = /* GraphQL */ `
  mutation UpdateTestimonial(
    $input: UpdateTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    updateTestimonial(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTestimonial = /* GraphQL */ `
  mutation DeleteTestimonial(
    $input: DeleteTestimonialInput!
    $condition: ModelTestimonialConditionInput
  ) {
    deleteTestimonial(input: $input, condition: $condition) {
      id
      accountID
      title
      slug
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      accountID
      title
      precedence
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      accountID
      title
      precedence
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      accountID
      title
      precedence
      content
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      statusID
      visibilityID
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
      id
      accountID
      email
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
      id
      accountID
      email
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
      id
      accountID
      email
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCustomContent = /* GraphQL */ `
  mutation CreateCustomContent(
    $input: CreateCustomContentInput!
    $condition: ModelCustomContentConditionInput
  ) {
    createCustomContent(input: $input, condition: $condition) {
      id
      accountID
      model
      modelID
      title
      content
      statusID
      visibilityID
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCustomContent = /* GraphQL */ `
  mutation UpdateCustomContent(
    $input: UpdateCustomContentInput!
    $condition: ModelCustomContentConditionInput
  ) {
    updateCustomContent(input: $input, condition: $condition) {
      id
      accountID
      model
      modelID
      title
      content
      statusID
      visibilityID
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCustomContent = /* GraphQL */ `
  mutation DeleteCustomContent(
    $input: DeleteCustomContentInput!
    $condition: ModelCustomContentConditionInput
  ) {
    deleteCustomContent(input: $input, condition: $condition) {
      id
      accountID
      model
      modelID
      title
      content
      statusID
      visibilityID
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      accountID
      name
      jobTitle
      bio
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      accountID
      name
      jobTitle
      bio
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      accountID
      name
      jobTitle
      bio
      thumbnail
      thumbnailURL
      thumbnailWidth
      thumbnailHeight
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      accountID
      actorID
      notifierID
      entityID
      entityType
      description
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      accountID
      actorID
      notifierID
      entityID
      entityType
      description
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      accountID
      actorID
      notifierID
      entityID
      entityType
      description
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      accountID
      title
      description
      eventDate
      eventTime
      eventLocation
      eventLocationURL
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      accountID
      title
      description
      eventDate
      eventTime
      eventLocation
      eventLocationURL
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      accountID
      title
      description
      eventDate
      eventTime
      eventLocation
      eventLocationURL
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      accountID
      username
      preferred_username
      email
      email_verified
      phone_number
      phone_number_verified
      name
      nickname
      given_name
      middle_name
      family_name
      address
      birthDate
      gender
      locale
      picture
      website
      zoneInfo
      verification_code
      group
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      accountID
      name
      email
      subject
      message
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      accountID
      name
      email
      subject
      message
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      accountID
      name
      email
      subject
      message
      deleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
