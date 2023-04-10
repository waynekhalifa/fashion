/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSocialLink = /* GraphQL */ `
  query GetSocialLink($id: ID!) {
    getSocialLink(id: $id) {
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
export const listSocialLinks = /* GraphQL */ `
  query ListSocialLinks(
    $filter: ModelSocialLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSocialLinks = /* GraphQL */ `
  query SyncSocialLinks(
    $filter: ModelSocialLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocialLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
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
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMedia = /* GraphQL */ `
  query SyncMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedia(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMenus = /* GraphQL */ `
  query SyncMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMenuItems = /* GraphQL */ `
  query SyncMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMenuItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
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
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestimonial = /* GraphQL */ `
  query GetTestimonial($id: ID!) {
    getTestimonial(id: $id) {
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
export const listTestimonials = /* GraphQL */ `
  query ListTestimonials(
    $filter: ModelTestimonialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestimonials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTestimonials = /* GraphQL */ `
  query SyncTestimonials(
    $filter: ModelTestimonialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestimonials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
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
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSlides = /* GraphQL */ `
  query SyncSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSlides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
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
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSubscribers = /* GraphQL */ `
  query SyncSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubscribers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCustomContent = /* GraphQL */ `
  query GetCustomContent($id: ID!) {
    getCustomContent(id: $id) {
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
export const listCustomContents = /* GraphQL */ `
  query ListCustomContents(
    $filter: ModelCustomContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomContents = /* GraphQL */ `
  query SyncCustomContents(
    $filter: ModelCustomContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
