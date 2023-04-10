import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSocialLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialLink, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID?: string | null;
  readonly memberID?: string | null;
  readonly name: string;
  readonly icon: string;
  readonly slug: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazySocialLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialLink, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID?: string | null;
  readonly memberID?: string | null;
  readonly name: string;
  readonly icon: string;
  readonly slug: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type SocialLink = LazyLoading extends LazyLoadingDisabled ? EagerSocialLink : LazySocialLink

export declare const SocialLink: (new (init: ModelInit<SocialLink>) => SocialLink) & {
  copyOf(source: SocialLink, mutator: (draft: MutableModel<SocialLink>) => MutableModel<SocialLink> | void): SocialLink;
}

type EagerFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feature, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly slug: string;
  readonly singleName: string;
  readonly precedence: string;
  readonly featureID?: string | null;
  readonly private?: boolean | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feature, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly slug: string;
  readonly singleName: string;
  readonly precedence: string;
  readonly featureID?: string | null;
  readonly private?: boolean | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Feature = LazyLoading extends LazyLoadingDisabled ? EagerFeature : LazyFeature

export declare const Feature: (new (init: ModelInit<Feature>) => Feature) & {
  copyOf(source: Feature, mutator: (draft: MutableModel<Feature>) => MutableModel<Feature> | void): Feature;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly domain: string;
  readonly headerLogo?: string | null;
  readonly headerLogoURL?: string | null;
  readonly headerLogoWidth?: number | null;
  readonly headerLogoHeight?: number | null;
  readonly footerLogo?: string | null;
  readonly footerLogoURL?: string | null;
  readonly footerLogoWidth?: number | null;
  readonly footerLogoHeight?: number | null;
  readonly siteTitle: string;
  readonly tagline: string;
  readonly description: string;
  readonly address: string;
  readonly workingHours?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly siteAddress: string;
  readonly features?: (string | null)[] | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly domain: string;
  readonly headerLogo?: string | null;
  readonly headerLogoURL?: string | null;
  readonly headerLogoWidth?: number | null;
  readonly headerLogoHeight?: number | null;
  readonly footerLogo?: string | null;
  readonly footerLogoURL?: string | null;
  readonly footerLogoWidth?: number | null;
  readonly footerLogoHeight?: number | null;
  readonly siteTitle: string;
  readonly tagline: string;
  readonly description: string;
  readonly address: string;
  readonly workingHours?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly siteAddress: string;
  readonly features?: (string | null)[] | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID?: string | null;
  readonly username: string;
  readonly preferred_username: string;
  readonly email: string;
  readonly email_verified?: boolean | null;
  readonly phone_number?: string | null;
  readonly phone_number_verified?: boolean | null;
  readonly name?: string | null;
  readonly nickname?: string | null;
  readonly given_name?: string | null;
  readonly middle_name?: string | null;
  readonly family_name?: string | null;
  readonly address?: string | null;
  readonly birthDate?: string | null;
  readonly gender?: string | null;
  readonly locale?: string | null;
  readonly picture?: string | null;
  readonly website?: string | null;
  readonly zoneInfo?: string | null;
  readonly verification_code?: string | null;
  readonly group?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID?: string | null;
  readonly username: string;
  readonly preferred_username: string;
  readonly email: string;
  readonly email_verified?: boolean | null;
  readonly phone_number?: string | null;
  readonly phone_number_verified?: boolean | null;
  readonly name?: string | null;
  readonly nickname?: string | null;
  readonly given_name?: string | null;
  readonly middle_name?: string | null;
  readonly family_name?: string | null;
  readonly address?: string | null;
  readonly birthDate?: string | null;
  readonly gender?: string | null;
  readonly locale?: string | null;
  readonly picture?: string | null;
  readonly website?: string | null;
  readonly zoneInfo?: string | null;
  readonly verification_code?: string | null;
  readonly group?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly fileUrl: string;
  readonly filename: string;
  readonly filetype?: string | null;
  readonly fileSize?: number | null;
  readonly fileWidth?: number | null;
  readonly fileHeight?: number | null;
  readonly alternativeText?: string | null;
  readonly caption?: string | null;
  readonly description?: string | null;
  readonly attachments?: (string | null)[] | null;
  readonly attachmentsFiles?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly fileUrl: string;
  readonly filename: string;
  readonly filetype?: string | null;
  readonly fileSize?: number | null;
  readonly fileWidth?: number | null;
  readonly fileHeight?: number | null;
  readonly alternativeText?: string | null;
  readonly caption?: string | null;
  readonly description?: string | null;
  readonly attachments?: (string | null)[] | null;
  readonly attachmentsFiles?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}

type EagerAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly mediaID: string;
  readonly fileUrl: string;
  readonly filename: string;
  readonly filetype?: string | null;
  readonly fileSize?: number | null;
  readonly fileWidth?: number | null;
  readonly fileHeight?: number | null;
  readonly alternativeText?: string | null;
  readonly caption?: string | null;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly mediaID: string;
  readonly fileUrl: string;
  readonly filename: string;
  readonly filetype?: string | null;
  readonly fileSize?: number | null;
  readonly fileWidth?: number | null;
  readonly fileHeight?: number | null;
  readonly alternativeText?: string | null;
  readonly caption?: string | null;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment) & {
  copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment>) => MutableModel<Attachment> | void): Attachment;
}

type EagerMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menu, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Menu, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Menu = LazyLoading extends LazyLoadingDisabled ? EagerMenu : LazyMenu

export declare const Menu: (new (init: ModelInit<Menu>) => Menu) & {
  copyOf(source: Menu, mutator: (draft: MutableModel<Menu>) => MutableModel<Menu> | void): Menu;
}

type EagerMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly menuID: string;
  readonly type: string;
  readonly pageID?: string | null;
  readonly categoryID?: string | null;
  readonly precedence?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly menuID: string;
  readonly type: string;
  readonly pageID?: string | null;
  readonly categoryID?: string | null;
  readonly precedence?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem) & {
  copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem>) => MutableModel<MenuItem> | void): MenuItem;
}

type EagerPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Page, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly pageID?: string | null;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly excerpt?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Page, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly pageID?: string | null;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly excerpt?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Page = LazyLoading extends LazyLoadingDisabled ? EagerPage : LazyPage

export declare const Page: (new (init: ModelInit<Page>) => Page) & {
  copyOf(source: Page, mutator: (draft: MutableModel<Page>) => MutableModel<Page> | void): Page;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly posts?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly posts?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly posts?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly posts?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly email: string;
  readonly content?: string | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly postID: string;
  readonly email: string;
  readonly content?: string | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly excerpt?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly categories?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly excerpt?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly categories?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly slug: string;
  readonly content?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Testimonial = LazyLoading extends LazyLoadingDisabled ? EagerTestimonial : LazyTestimonial

export declare const Testimonial: (new (init: ModelInit<Testimonial>) => Testimonial) & {
  copyOf(source: Testimonial, mutator: (draft: MutableModel<Testimonial>) => MutableModel<Testimonial> | void): Testimonial;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly email: string;
  readonly subject?: string | null;
  readonly message: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly email: string;
  readonly subject?: string | null;
  readonly message: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerSlide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slide, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly precedence: string;
  readonly content?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazySlide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slide, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly precedence: string;
  readonly content?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Slide = LazyLoading extends LazyLoadingDisabled ? EagerSlide : LazySlide

export declare const Slide: (new (init: ModelInit<Slide>) => Slide) & {
  copyOf(source: Slide, mutator: (draft: MutableModel<Slide>) => MutableModel<Slide> | void): Slide;
}

type EagerSubscriber = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subscriber, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly email: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazySubscriber = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subscriber, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly email: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Subscriber = LazyLoading extends LazyLoadingDisabled ? EagerSubscriber : LazySubscriber

export declare const Subscriber: (new (init: ModelInit<Subscriber>) => Subscriber) & {
  copyOf(source: Subscriber, mutator: (draft: MutableModel<Subscriber>) => MutableModel<Subscriber> | void): Subscriber;
}

type EagerCustomContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomContent, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly model: string;
  readonly modelID: string;
  readonly title: string;
  readonly content: string;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyCustomContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomContent, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly model: string;
  readonly modelID: string;
  readonly title: string;
  readonly content: string;
  readonly statusID?: string | null;
  readonly visibilityID?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type CustomContent = LazyLoading extends LazyLoadingDisabled ? EagerCustomContent : LazyCustomContent

export declare const CustomContent: (new (init: ModelInit<CustomContent>) => CustomContent) & {
  copyOf(source: CustomContent, mutator: (draft: MutableModel<CustomContent>) => MutableModel<CustomContent> | void): CustomContent;
}

type EagerMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly jobTitle?: string | null;
  readonly bio?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Member, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly name: string;
  readonly jobTitle?: string | null;
  readonly bio?: string | null;
  readonly thumbnail?: string | null;
  readonly thumbnailURL?: string | null;
  readonly thumbnailWidth?: number | null;
  readonly thumbnailHeight?: number | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member>) => Member) & {
  copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly actorID: string;
  readonly notifierID: string;
  readonly entityID: string;
  readonly entityType: string;
  readonly description: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly actorID: string;
  readonly notifierID: string;
  readonly entityID: string;
  readonly entityType: string;
  readonly description: string;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly description: string;
  readonly eventDate: string;
  readonly eventTime: string;
  readonly eventLocation: string;
  readonly eventLocationURL?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly accountID: string;
  readonly title: string;
  readonly description: string;
  readonly eventDate: string;
  readonly eventTime: string;
  readonly eventLocation: string;
  readonly eventLocationURL?: string | null;
  readonly deleted?: string | null;
  readonly createdAt: string;
  readonly createdByID: string;
  readonly createdByName: string;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}