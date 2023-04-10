/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSocialLink = /* GraphQL */ `
  subscription OnCreateSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
  ) {
    onCreateSocialLink(filter: $filter) {
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
export const onUpdateSocialLink = /* GraphQL */ `
  subscription OnUpdateSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
  ) {
    onUpdateSocialLink(filter: $filter) {
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
export const onDeleteSocialLink = /* GraphQL */ `
  subscription OnDeleteSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
  ) {
    onDeleteSocialLink(filter: $filter) {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onCreateFeature(filter: $filter) {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onUpdateFeature(filter: $filter) {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature($filter: ModelSubscriptionFeatureFilterInput) {
    onDeleteFeature(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onCreateMenu(filter: $filter) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onUpdateMenu(filter: $filter) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
    onDeleteMenu(filter: $filter) {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onCreateMenuItem(filter: $filter) {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onUpdateMenuItem(filter: $filter) {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onDeleteMenuItem(filter: $filter) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($filter: ModelSubscriptionPageFilterInput) {
    onCreatePage(filter: $filter) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($filter: ModelSubscriptionPageFilterInput) {
    onUpdatePage(filter: $filter) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($filter: ModelSubscriptionPageFilterInput) {
    onDeletePage(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateTestimonial = /* GraphQL */ `
  subscription OnCreateTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onCreateTestimonial(filter: $filter) {
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
export const onUpdateTestimonial = /* GraphQL */ `
  subscription OnUpdateTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onUpdateTestimonial(filter: $filter) {
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
export const onDeleteTestimonial = /* GraphQL */ `
  subscription OnDeleteTestimonial(
    $filter: ModelSubscriptionTestimonialFilterInput
  ) {
    onDeleteTestimonial(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide($filter: ModelSubscriptionSlideFilterInput) {
    onCreateSlide(filter: $filter) {
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide($filter: ModelSubscriptionSlideFilterInput) {
    onUpdateSlide(filter: $filter) {
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide($filter: ModelSubscriptionSlideFilterInput) {
    onDeleteSlide(filter: $filter) {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber(
    $filter: ModelSubscriptionSubscriberFilterInput
  ) {
    onCreateSubscriber(filter: $filter) {
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
export const onUpdateSubscriber = /* GraphQL */ `
  subscription OnUpdateSubscriber(
    $filter: ModelSubscriptionSubscriberFilterInput
  ) {
    onUpdateSubscriber(filter: $filter) {
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
export const onDeleteSubscriber = /* GraphQL */ `
  subscription OnDeleteSubscriber(
    $filter: ModelSubscriptionSubscriberFilterInput
  ) {
    onDeleteSubscriber(filter: $filter) {
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
export const onCreateCustomContent = /* GraphQL */ `
  subscription OnCreateCustomContent(
    $filter: ModelSubscriptionCustomContentFilterInput
  ) {
    onCreateCustomContent(filter: $filter) {
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
export const onUpdateCustomContent = /* GraphQL */ `
  subscription OnUpdateCustomContent(
    $filter: ModelSubscriptionCustomContentFilterInput
  ) {
    onUpdateCustomContent(filter: $filter) {
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
export const onDeleteCustomContent = /* GraphQL */ `
  subscription OnDeleteCustomContent(
    $filter: ModelSubscriptionCustomContentFilterInput
  ) {
    onDeleteCustomContent(filter: $filter) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
